import { Component, Input } from '@angular/core';
import { Post } from '../post.interface';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  @Input()
  post!: Post;

  constructor(private postsService: PostsService) {}

  toggleActiveStatus() {
    this.postsService.togglePostStatus(this.post);
  }
}
