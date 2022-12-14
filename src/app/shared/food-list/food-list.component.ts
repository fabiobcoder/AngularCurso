import { Component, OnInit } from '@angular/core';
import { foodListService } from '../../services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<string> = [];

  constructor(private foodListService: foodListService) { }

  ngOnInit(): void {
    this.foodList = this.foodListService.foodList();

    this.foodListService.emitEvent.subscribe(
      res => alert(`Olha voce add => ${res}`)
    );
  }

}
