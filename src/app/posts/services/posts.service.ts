import { Injectable } from '@angular/core';
import {Post} from '../models/post.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor() { }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string): void {
    const newPost: Post = { title, content };

    this.posts.push(newPost);
    this.postsUpdated.next([...this.posts]);
  }
}
