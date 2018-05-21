import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "../@module/@product/product-list/product-list.component";
import { ProductCreateComponent } from "../@module/@product/product-create/product-create.component";
import { ProductEditComponent } from "../@module/@product/product-edit/product-edit.component";
import { ProductDetailComponent } from "../@module/@product/product-detail/product-detail.component";
import { HeaderComponent } from "../@module/@layout/header/header.component";
import { FooterComponent } from "../@module/@layout/footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductService } from "../@services/product.service";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
