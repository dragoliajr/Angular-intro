import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  name: string = "Hello world"

  constructor() { }

  ngOnInit(): void {
  }
  click(word : string){
   this.name = word
  }

}
