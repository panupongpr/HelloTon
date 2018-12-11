import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'I Love Thailand';

  // Explicit

  myTitle: string; //Demo Explicit variable Type String
  myColor: string;
  myNumber;
  mySize; string;

  constructor() {}

  ngOnInit(): void {
    
   this.myTitle = "Doramon";
   this.myColor = '#FFE000';
   this.myNumber=0;
   this.mySize = '60px'

  }

  testClick(){
    console.log('you click Test')
    this.myNumber +=1;
  }




}// App Component Class





