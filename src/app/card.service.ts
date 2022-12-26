import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCards(){
    return [
      {"id": 1, "content": "strawberry", "matchingCardId": 4},
      {"id": 4, "content": "strawberry", "matchingCardId": 1},

      {"id": 2, "content": "hat", "matchingCardId": 3},
      {"id": 3, "content": "hat", "matchingCardId": 2}

    ];
  }
}
