import { Injectable } from '@angular/core';
import { ProductVo, PRODUCT_MOCK} from './product-vo';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

@Injectable()
export class ProductService {

  private http: Http;

  constructor(http: Http) { 
    this.http = http;
  }

  public fetchAll(): Promise<Array<ProductVo>> {
    return this.http.get("/assets/ws/products.json").toPromise().then((rep: Response): Array<ProductVo> => {
      return rep.json() as Array<ProductVo>;
    });
  }

  public fetchAll2(): Observable<Array<ProductVo>> {
    return this.http.get("/assets/ws/products.json").map((rep: Response): Array<ProductVo> => {
      return rep.json() as Array<ProductVo>;
    });
  }

  public fetchByRef(ref: string): Promise<ProductVo> {
    return this.fetchAll().then((products: Array<ProductVo>): ProductVo => {
      var productReturned: ProductVo = null;
      products.forEach((product: ProductVo): void => {
        if (product.ref === ref) {
          productReturned = product;
        }
      });
      return productReturned;
    });
  }

}
