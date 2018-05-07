import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll() {

   return this.http.get('http://localhost:3000/api/v1/products');


  }

}
