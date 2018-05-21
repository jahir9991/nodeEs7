import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ProductService } from "../../../@services/product.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.scss"]
})
export class ProductCreateComponent implements OnInit {
  formdata: FormGroup;
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.formdata = new FormGroup({
      name: new FormControl(),
      quantity: new FormControl()
    });
  }

  onClickSubmit(data) {
    this.productService.insert(data).subscribe(result => {
      console.log(result);
      this.router.navigate(["/product"]);
    });
  }
}
