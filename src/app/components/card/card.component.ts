import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input()
	gameCover: string = "N/A"
	@Input()
	gameLabel: string = "N/A"
	@Input()
	gameType: string = "N/A"
	@Input()
	gamePrice: string = "N/A"

  constructor() { }

  ngOnInit(): void {
  }

}
