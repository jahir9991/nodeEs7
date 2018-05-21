import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "../@module/@product/product-list/product-list.component";
import { ProductCreateComponent } from "../@module/@product/product-create/product-create.component";
import { ProductEditComponent } from "../@module/@product/product-edit/product-edit.component";
import { ProductDetailComponent } from "../@module/@product/product-detail/product-detail.component";

const routes: Routes = [
  // {
  //   path: ""
  // },
  {
    path: "product",
    children: [
      {
        path: "",
        component: ProductListComponent
      },
      {
        path: "create",
        component: ProductCreateComponent
      },
      {
        path: "edit/:id",
        component: ProductEditComponent
      },
      {
        path: "detail",
        component: ProductDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
