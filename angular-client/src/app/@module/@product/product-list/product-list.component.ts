import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../@services/product.service';


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
    this.productService.getAll().subscribe((result: any) => {
      console.log(result);
      this.productsData = result.data;
    });


  }

}
