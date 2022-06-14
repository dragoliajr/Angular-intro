import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  pies : Pie[] =[
    {type: "Coconut cream pie", charateristic: "creamy, good for summer"},
    {type: "apple Pie", charateristic: "warm, filling, perfect for fall"},
    {type: "Key Lime", charateristic: " tart, creamy perfect end to a hot day"}
    


  ];
  pie = "pie is fun"

  constructor() { }

  ngOnInit(): void {
  }
 
}
class Pie{
  type! : string 
  charateristic! : string 
}

