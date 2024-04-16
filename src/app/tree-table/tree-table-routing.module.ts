import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeTableComponent } from './tree-table.component';

const routes: Routes = [
  {
    path: '',
    component: TreeTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeTableRoutingModule { }
