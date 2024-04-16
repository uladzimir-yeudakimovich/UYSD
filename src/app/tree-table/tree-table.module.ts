import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TreeTableComponent } from './tree-table.component';
import { TreeTableRoutingModule } from './tree-table-routing.module';
import { TableHeaderDirective } from '../shared/directives/table-header.directive';
import { TableCellDirective } from '../shared/directives/table-cell.directive';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    TableCellDirective,
    TableHeaderDirective,
    TableComponent,
    TreeTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TreeTableRoutingModule,
  ]
})
export class TreeTableModule { }
