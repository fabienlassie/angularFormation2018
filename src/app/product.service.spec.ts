import { TestBed, inject, async } from '@angular/core/testing';
import { myModuleConfig } from './conf.spec';
import { ProductService } from './product.service';
import { HttpModule } from '@angular/http';
import { ProductVo, PRODUCT_MOCK } from './product-vo';

describe('ProductService', () => {
  beforeEach(async(myModuleConfig));

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
    spyOn(service, 'fetchAll').and.returnValue(Promise.resolve(PRODUCT_MOCK));
    service.fetchAll().then((products: Array<ProductVo>): void => {
      expect(products.length > 0).toBeTruthy();
    });
  }));
});
