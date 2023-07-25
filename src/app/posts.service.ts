import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private dbUrl = 'assets/db.json';

  constructor(private http: HttpClient) { }

  fetchPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.dbUrl);
  }
}
