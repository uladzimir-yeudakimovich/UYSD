import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'converter',
    loadChildren: () => import('./converter/converter.module').then(m => m.ConverterModule)
  },
  {
    path: 'draw',
    loadChildren: () => import('./draw/draw.module').then(m => m.DrawModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule)
  },
  {
    path: 'tree-table',
    loadChildren: () => import('./tree-table/tree-table.module').then(m => m.TreeTableModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
