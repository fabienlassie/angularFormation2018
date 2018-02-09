import { Injectable } from '@angular/core';
import { ProductVo} from './product-vo';

@Injectable()
export class CartService {

  private productCart: Array<ProductVo> = new Array<ProductVo>();

  constructor() { 
  }

  /** GET */
  public fetchAll(): Promise<Array<ProductVo>> {
    return Promise.resolve(this.productCart);
  }

  /** PUT */
  public addToCart(productToAdd: ProductVo): void {
    this.productCart.push(productToAdd);
  }

  /** DELETE */
  public removeToCart(productToRemove: ProductVo): void {
    this.productCart.splice(this.productCart.indexOf(productToRemove), 1);
  }

}
