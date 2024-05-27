import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      'https://i.pinimg.com/736x/92/e5/23/92e523508d62fa1b1ab2344ab25ff006.jpg',
      129.0
    ),
    new Place(
      'p2',
      'Rio de Janeiro Apartment',
      'In the heart of Rio',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1aOFsA17CjqioXKOEVvKkpz-jMuH50ZzDx-A_34-2g&s',
      128.0
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}

  getPlace(id: string) {
    return { ...this._places.find((p) => p.id === id) };
  }
}
