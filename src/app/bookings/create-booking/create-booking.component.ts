import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace!: Place;

  constructor(private modelCtrl: ModalController) {}

  ngOnInit() {}

  onBookPlace() {
    this.modelCtrl.dismiss({ message: 'This is a dummy message!' }, 'confirm');
  }

  onCancel() {
    this.modelCtrl.dismiss(1, 'cancel');
  }
}
