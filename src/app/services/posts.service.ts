import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { filter, firstValueFrom } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl: string = "https://my-json-server.typicode.com/mariogiron/blog-server/posts";

  currentRoute: string = "";

  httpClient = inject(HttpClient);
  

  constructor(private router: Router){
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.url
      })
  }

  getAll(): Promise<Post[]> {
    return firstValueFrom(
      this.httpClient.get<Post[]>(this.baseUrl)
    )
  };

  create(newPost: Post): Promise<Post> {
    return firstValueFrom(
      this.httpClient.post<Post>(this.baseUrl, newPost)
    )
  };
}
