import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  @Input() form: any;

  //Getters
  get first() {
    return (this.form.controls.first as FormGroup).controls;
  }
  get second() {
    return (this.form.controls.second as FormGroup).controls;
  }
}
