import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PostService {
  url = "https://gorest.co.in/public-api/posts";

  constructor(private http: HttpClient) {}

  getAllPosts() {
    const headers = new HttpHeaders({
      Authorization: "Bearer rFAmoCZEBz5tESyhrZFwaZo9eakV3DTym2xT",
    });
    return this.http.get(this.url, { headers });
  }
}
