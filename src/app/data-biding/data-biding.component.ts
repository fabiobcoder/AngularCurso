import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "Fabio";
  public idade: number = 40;
  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png";
  public imgTitle: string = "Property Biding";

  constructor() { }

  ngOnInit(): void {}

  public alertaInfo(){
    alert("Deus bom !");

  }

}
