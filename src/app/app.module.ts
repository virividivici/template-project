import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ItemCreateComponent } from './components/item-create/item-create.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemUpdateComponent } from './components/item-update/item-update.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ArraySortPipe } from './shared/pipe/array-sort.pipe';
import { ArrayFilterPipe } from './shared/pipe/array-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemCreateComponent,
    ItemDetailsComponent,
    ItemUpdateComponent,
    ItemsListComponent,
    ArraySortPipe,
    ArrayFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


