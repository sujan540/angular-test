import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { HomeComponent } from "./home/home.component";
import { ProductListComponent } from "./product-list/product-list.component";

import { ProductListSidebarComponent } from "./product-list-sidebar/product-list-sidebar.component";

import { ProductDetailComponent } from "./product-detail/product-detail.component";

import { SidebarComponent } from "./sidebar/sidebar.component";

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    SidebarComponent,
    ProductListSidebarComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
