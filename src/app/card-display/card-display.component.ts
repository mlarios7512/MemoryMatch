import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit{
  
  public cards:any = []
  constructor(private _cardService:CardService){}
  ngOnInit(): void {
    this.cards = this._cardService.getCards();
  }
}
