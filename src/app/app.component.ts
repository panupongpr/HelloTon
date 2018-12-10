import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'I Love Thailand';

  // Explicit

  private myTitle: string; //Demo Explicit variable Type String
  private myColor: string;

  constructor() {}

  ngOnInit(): void {
    
   this.myTitle = "Doramon";
   this.myColor = '#FF0000'

  }




}// App Component Class





