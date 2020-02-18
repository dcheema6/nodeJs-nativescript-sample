import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './item/items.component';
import { ItemDetailComponent } from './item/item-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/searchgames',
    pathMatch: 'full',
  },
  {
      path: 'searchgames',
      component: ItemsComponent,
  },
  {
    path: 'game/:id',
    component: ItemDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
