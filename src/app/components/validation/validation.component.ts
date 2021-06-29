import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css'],
})
export class ValidationComponent {
  @Input() input: any;
  @Input() text: string = '';
  @Input() nextClick: boolean = false;
}
