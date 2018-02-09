import { Pipe, PipeTransform } from '@angular/core';
import { ProductVo } from './product-vo';

@Pipe({name: 'category'})
export class CategoryPipe implements PipeTransform {
  transform(products: Array<ProductVo>, category: string): any {
    const results: Array<ProductVo> = new Array<ProductVo>();
    products.forEach((value: ProductVo): void => {
      if (value.category.toLowerCase().indexOf(category.toLowerCase()) > -1) {
        results.push(value);
      }
    });
    return results;
  }
}
