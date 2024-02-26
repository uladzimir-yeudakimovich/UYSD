import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawComponent } from './draw/draw.component';
import { DrawRoutingModule } from './draw-routing.module';

// Material section
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [DrawComponent],
  imports: [
    CommonModule,
    DrawRoutingModule,

    // Material
    MatButtonModule,
    MatIconModule,
  ]
})
export class DrawModule { }
