import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-input [contador]="addValue"></app-input>

  <br>
  <button (click)="add()")> Add </button>

  <router-outlet></router-outlet>
  `,

})
export class AppComponent implements OnInit{

  public destruir: boolean = true;

  public addValue: number = 10;

  constructor() {

  }
ngOnInit(): void {
}
public add(){
  this.addValue += 1;
}
public destruirComponent(){
  this.destruir = false;
}
}
