import { TestBed, inject, async } from '@angular/core/testing';
import { myModuleConfig } from './conf.spec';
import { CartService } from './cart.service';

describe('CartService', () => {
  beforeEach(async(myModuleConfig));

  it('should be created', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));
});
