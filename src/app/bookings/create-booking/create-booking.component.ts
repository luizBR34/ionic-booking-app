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
  @Input() selectedMode?: 'select' | 'random';
  startDate?: Date;
  endDate?: Date;

  constructor(private modelCtrl: ModalController) {}

  ngOnInit() {
    const availableFrom = new Date(this.selectedPlace.availableFrom!);
    const availableTo = new Date(this.selectedPlace.availableTo!);

    if (this.selectedMode === 'random') {
      this.startDate = new Date(
        availableFrom.getTime() +
          Math.random() *
            (availableTo.getTime() -
              7 * 24 * 60 * 60 * 1000 -
              availableFrom.getTime()),
      );
    }
  }

  onBookPlace() {
    this.modelCtrl.dismiss({ message: 'This is a dummy message!' }, 'confirm');
    console.log(this.selectedPlace);
  }

  onCancel() {
    this.modelCtrl.dismiss(1, 'cancel');
  }
}
