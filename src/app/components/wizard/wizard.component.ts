import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { Section } from 'src/app/models/Section.model';
import { State } from 'src/app/models/State.model';
import { InputSpaceValidators } from 'src/app/validators/input-space.validators';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from 'src/app/reducers/cart.actions';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
})
export class WizardComponent {
  cart$: Observable<number>;

  form = new FormGroup({
    first: new FormGroup({
      firstname: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(5),
          InputSpaceValidators.cannotContainSpace,
        ],
        InputSpaceValidators.shouldBeUnique
      ),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
      ]),
      phone: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required]),
      state: new FormControl('State One'),
      countries: new FormControl('Amman'),
    }),
    second: new FormGroup({
      product: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      type: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      year: new FormControl('', [Validators.required]),
      day: new FormControl('', Validators.required),
    }),
  });

  step: number = 1;
  nextClick: boolean = false;

  states: State[] = [
    { name: 'State One', value: 1 },
    { name: 'State two', value: 2 },
    { name: 'State three', value: 3 },
  ];

  sections: Section[] = [
    { id: 1, name: 'Section One' },
    { id: 2, name: 'Section Two' },
    { id: 3, name: 'Section Three' },
    { id: 4, name: 'Section Four' },
  ];

  constructor(private store: Store<{ cart: number }>) {
    this.cart$ = store.select('cart');
  }

  onBack() {
    this.store.dispatch(removeFromCart());
    this.step = this.step - 1;
  }
  onNext() {
    this.nextClick = true;

    if (this.step == 1 && this.form.get('first')?.invalid) {
      return;
    }
    if (this.step == 2 && this.form.get('second')?.invalid) {
      return;
    }
    this.nextClick = false;
    this.store.dispatch(addToCart());
    this.step = this.step + 1;
  }
  submit() {
    alert('Thank you!');
  }

  validationClass(data: AbstractControl) {
    if (data.invalid && (data?.touched || this.nextClick)) {
      return 'is-invalid';
    }
    if (data.valid && (data?.touched || this.nextClick)) {
      return 'is-valid';
    }

    return null;
  }

  //Getters
  get first() {
    return (this.form.controls.first as FormGroup).controls;
  }
  get second() {
    return (this.form.controls.second as FormGroup).controls;
  }
}
