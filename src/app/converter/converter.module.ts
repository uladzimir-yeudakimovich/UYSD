import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConverterComponent } from './converter.component';
import { ConverterRoutingModule } from './converter-routing.module';

// Material section
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [ConverterComponent],
  imports: [
    CommonModule,
    ConverterRoutingModule,
    FormsModule,

    // Material
    MatButtonModule,
  ]
})
export class ConverterModule { }
