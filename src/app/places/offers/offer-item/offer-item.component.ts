import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Place } from '../../place.model';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
})
export class OfferItemComponent {

  @Input() offer: Place = {
    id: '',
    title: '',
    description: '',
    imageUrl: '',
    price: 0,
  };

  constructor() { }

  getDummyDate(): string|number|Date {
    return new Date();
  }

}
