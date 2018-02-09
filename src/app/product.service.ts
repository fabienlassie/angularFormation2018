import { Injectable } from '@angular/core';
import { ProductVo } from './product-vo';
import { Http, Response } from '@angular/http';
import { Observable, Observer } from 'rxjs';
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

  public fetchByRef(ref: string): Promise<ProductVo> {
    return this.fetchAll().then((products: Array<ProductVo>): ProductVo => {
      return products.filter((product: ProductVo): boolean => {
        return product.ref === ref;
      })[0];
    });
  }

  public fetchProductsInPromo(): Observable<Array<ProductVo>> {

    const obsProduct: Observable<Response> = this.http.get("/assets/ws/products.json");
    const obsPromo: Observable<Response> = this.http.get("/assets/ws/promo.json");

    return Observable.combineLatest(obsProduct, obsPromo).map((rep: [Response, Response]): Array<ProductVo> => {
      return rep[0].json().filter((product: ProductVo): boolean => {
        return rep[1].json().some((promo: any): boolean => {
          return product.id === promo.id
        });
      })
    })
  }
  
}