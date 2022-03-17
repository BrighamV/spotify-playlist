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
    const button = document.getElementById("study-button");
    button?.addEventListener("click", handleClick);
    const sleep = document.getElementById("sleep-button");
    sleep?.addEventListener("click", handleSleep);
   

    function handleClick(this: HTMLElement) {
      console.log("clicked");
      document.body.scrollTop = 200;
      document.documentElement.scrollTop = 200;
    }
    function handleSleep(this: HTMLElement) {
      console.log("clicked");
      document.body.scrollTop = 1800;
      document.documentElement.scrollTop = 1550;
    }

  }

}
