import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrl: './order-new.component.scss'
})
export class OrderNewComponent {
  minDate = new Date();
  dateCtrl: FormControl;

  constructor() {
    this.dateCtrl = new FormControl('', [Validators.required]);
  }
}
