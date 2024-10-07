import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackendService } from './services/backend.service';
import { Post } from './models/post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private backService:BackendService){}
  allPosts:Post[] = [];
  formPost:Post = {} as Post;

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this.backService.getAllPosts().subscribe(response => {
      console.log(response);
      this.allPosts = response;
    });
  }

  addPost(){
    //temp fix until login - not secure for real usage
    this.formPost.googleId = "1";
    this.backService.addPost(this.formPost).subscribe(response => {
      console.log(response);
      this.getAll();
      this.formPost = {} as Post;
    });
  }
}
