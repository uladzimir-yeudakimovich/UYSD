import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';
import { RepDialogComponent } from './rep-dialog/rep-dialog.component';

// Material components
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    CustomerCardComponent,
    CustomerListComponent,
    CustomerNewComponent,
    RepDialogComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    //Material
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSnackBarModule,
  ]
})
export class CustomersModule { }
