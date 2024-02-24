import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawComponent } from './draw/draw.component';
import { DrawRoutingModule } from './draw-routing.module';

@NgModule({
  declarations: [DrawComponent],
  imports: [
    CommonModule,
    DrawRoutingModule
  ]
})
export class DrawModule { }
