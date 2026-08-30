import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  template: ` <article class="listing">
    <div class="image-parent">
      <img class="product-image" src="https://placehold.co/100x100" />
    </div>
    <section class="details">
      <p class="title"><!-- car make and model--></p>
      <hr />
      <p class="detail">
        <span>Year</span>
        <span><!-- year --></span>
      </p>
      <div class="detail">
        <span>Transmission</span>
        <span><!-- transmission --></span>
      </div>
      <p class="detail">
        <span>Mileage</span>
        <span><!-- miles --></span>
      </p>
      <p class="detail">
        <span>Price</span>
        <span><!-- price --></span>
      </p>
    </section>

    <button type="submit" (click)="handleCarSaved()">Save</button>
  </article>`,
  styles: ``,
})
export class ListingComponent {
  @Input() car: Car = {
    make: '',
    model: '',
    miles: 0,
    price: 0,
    year: 0,
    transmission: 'Automatic',
  };

  @Output() carSaved = new EventEmitter<Car>();
  handleCarSaved() {
    this.carSaved.emit(this.car);
  }
}
