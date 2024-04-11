import { Post } from './../../interfaces/post.interface';
import { Component, inject } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  arrPosts: Post[] = [];

  date: string = "2024-02-10"

  postsService = inject(PostsService)

  async ngOnInit(){
    const response = await this.postsService.getAll()
    
    this.arrPosts = response;
  };


  
}
