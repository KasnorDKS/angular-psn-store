import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

	@Input()
	gameType: string = "N/A"
	@Input()
	gamePrice: string = "N/A"
  constructor() { }

  ngOnInit(): void {
  }

}
