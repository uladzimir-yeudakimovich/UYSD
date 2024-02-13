import { Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';

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

  constructor(public dialog: MatDialog) {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  }

  openRepDialog() {
    const dialogRef = this.dialog.open(RepDialogComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      alert(`User chose ${result}`);
    });
  }
}
