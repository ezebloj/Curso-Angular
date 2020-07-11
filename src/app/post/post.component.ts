import { Component, OnInit } from "@angular/core";
import { IPost, IRtaGetServidor } from "../models/post.models";
import { PostService } from "../services/post.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  posts: IPost[] = [];
  constructor(private postsService: PostService) {}

  ngOnInit() {
    this.postsService
      .getAllPosts()
      .subscribe((rta_servidor: IRtaGetServidor) => {
        this.posts = rta_servidor.result;
      });
  }
}
