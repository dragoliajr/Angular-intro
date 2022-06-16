import { Component, OnInit } from '@angular/core';
import { PiePicComponent } from '../pie-pic/pie-pic.component';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  pies : Pie[] =[
    {type: "Coconut cream pie", charateristic: "creamy, good for summer" , price: 3.50},
    {type: "apple Pie", charateristic: "warm, filling, perfect for fall" , price: 4.00},
    {type: "Key Lime", charateristic: " tart, creamy perfect end to a hot day", price: 2.50}
    


  ];
  pie = "pie is fun"

  constructor() { }

  ngOnInit(): void {
  }
 
}
class Pie{
  type! : string 
  charateristic! : string 
  price: number
}

