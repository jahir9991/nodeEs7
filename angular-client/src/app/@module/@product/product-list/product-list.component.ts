import { Component, OnInit } from '@angular/core';
import { Product } from '../../../@models/Product';
import { ProductService } from '../../../@services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productsData: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {

    this.productService.getAllByHttp().subscribe((result) => {
      this.productsData = result.data;
    });

  }


}
