import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent {

  
  myPost!: Post | undefined;

  activatedRoute = inject(ActivatedRoute)
  postsService = inject(PostsService)

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params: any) => {
      
      let id = params.id
    
      let response = await this.postsService.getAll()
      const array = response
      
      this.myPost = array.find(post => post.id == id) 
      
    });
  }


}
