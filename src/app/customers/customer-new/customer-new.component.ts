import { Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrl: './customer-new.component.scss'
})
export class CustomerNewComponent {
  emailFormControl: FormControl;

  matcher: ErrorStateMatcher = {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  };

  constructor() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  }
}
