import { Pipe, PipeTransform } from '@angular/core';
import { ProductVo } from './product-vo';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(products: Array<ProductVo>, min: number = 0, max: number = 1000000): Array<ProductVo> {
    const results: Array<ProductVo> = new Array<ProductVo>();
    products.forEach((value: ProductVo): void => {
      if (value.price >= min && (!max || value.price <= max)) {
        results.push(value);
      }
    });
    return results;
  }

}
