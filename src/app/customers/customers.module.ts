import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

// Material components
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CustomerCardComponent,
    CustomerListComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,

    //Material
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class CustomersModule { }
