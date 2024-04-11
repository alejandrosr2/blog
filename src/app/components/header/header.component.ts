import { PostsService } from 'src/app/services/posts.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  idRoute: number[] = [1,2,3,4,5,6,7,8,9,10];

  
  postsService = inject(PostsService);
  
/* 
  constructor(public postsService: PostsService){
    
  } */

}
