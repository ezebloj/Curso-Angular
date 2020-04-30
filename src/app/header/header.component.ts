import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  width: number = 450;
  height: number = 350;

  name: string = "";

  avatar: string = "https://api.adorable.io/avatars/285/abott@adorable.png";

  constructor() {}

  ngOnInit() {}
}
