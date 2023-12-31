import { Component, OnInit } from '@angular/core';
import { Post } from '../post.interface';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {
  activePosts: Post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.activePosts = this.postsService.getActivePosts();
  }
}
