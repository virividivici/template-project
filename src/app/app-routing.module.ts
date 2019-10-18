import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemCreateComponent } from './components/item-create/item-create.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemUpdateComponent } from './components/item-update/item-update.component';
import { ItemsListComponent } from './components/items-list/items-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'items-list' },
  { path: 'create-item', component: ItemCreateComponent },
  { path: 'employee-item/:id', component: ItemDetailsComponent },
  { path: 'update-item', component: ItemUpdateComponent },
  { path: 'items-list', component: ItemsListComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
