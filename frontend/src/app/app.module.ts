import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HttpClientModule } from '@angular/common/http';

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import { ItemService } from "./item/item.service";

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent],
  schemas: [
      NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
