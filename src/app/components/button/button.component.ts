import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() btnClass: string = '';
  @Input() text: string = '';
  @Input() disabled: boolean = false;
  @Input() type: string = '';
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
