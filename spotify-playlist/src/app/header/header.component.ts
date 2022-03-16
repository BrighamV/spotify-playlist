import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
    console.log("hello world");
    // let study = document.getElementById("study-button");
    function study() {
      console.log("button was clicked");
    }
  }

}
