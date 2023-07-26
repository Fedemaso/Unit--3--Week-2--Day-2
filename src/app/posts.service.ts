import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private dbUrl = 'assets/db.json';
  private activePosts: Post[] = [];
  private inactivePosts: Post[] = [];

  constructor(private http: HttpClient) { }

  fetchPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.dbUrl);
  }

  getActivePosts(): Post[] {
    return this.activePosts;
  }

  getInactivePosts(): Post[] {
    return this.inactivePosts;
  }

  togglePostStatus(post: Post) {
    post.active = !post.active;
    if (post.active) {
      // Sposta la card tra i post attivi
      const index = this.inactivePosts.indexOf(post);
      if (index !== -1) {
        this.inactivePosts.splice(index, 1);
      }
      this.activePosts.push(post);
    } else {
      // Sposta la card tra i post inattivi
      const index = this.activePosts.indexOf(post);
      if (index !== -1) {
        this.activePosts.splice(index, 1);
      }
      this.inactivePosts.push(post);
    }
  }
}
