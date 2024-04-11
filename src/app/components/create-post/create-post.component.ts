import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  formPost: FormGroup;
  postsService = inject(PostsService);
  router = inject(Router);

  constructor() {
    this.formPost = new FormGroup({
      title: new FormControl(null, [
        Validators.required
      ]),
      text: new FormControl("", [
        Validators.required,
        Validators.minLength(20)
      ]),
      author: new FormControl(null, [
        Validators.required
      ]),
      publishDate: new FormControl(new Date(), [])
    }, [])
  }

  async onSubmit(){

    if (this.formPost.invalid){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algún campo está vacío o el texto tiene menos de 20 caracteres",
      }); 
    } else {
      const response = await this.postsService.create(this.formPost.value);
      console.log(response)
      await Swal.fire({
        icon: "success",
        title: "Post creado",
        text: "Se ha creado tu post con éxito",
        confirmButtonText: 'Aceptar'
      }); 
      this.router.navigateByUrl('/home');
    }
    /* try{
      const response = await this.postsService.create(this.formPost.value);
      console.log(response)
    } catch (error){ 
      
      console.log(error)  
    } */
  }

  checkError(field: string, validator: string): boolean {
    return this.formPost.get(field)!.hasError(validator) && this.formPost.get(field)!.touched;
  }
}
