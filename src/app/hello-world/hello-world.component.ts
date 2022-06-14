import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  name: string = "Hello world"
  bool = false

  constructor() { }

  ngOnInit(): void {
  }
  click(word : string){
  if (this.bool == false){
    this.name = word
    this.bool = true
  }
  else{
    this.name = "hello World"
    this.bool = false
  }
   
  }

}
