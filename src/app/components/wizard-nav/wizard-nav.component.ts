import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-wizard-nav',
  templateUrl: './wizard-nav.component.html',
  styleUrls: ['./wizard-nav.component.css'],
})
export class WizardNavComponent {
  cart$: Observable<number>;
  @Input() text: string = '';

  constructor(private store: Store<{ cart: number }>) {
    this.cart$ = store.select('cart');
  }
}
