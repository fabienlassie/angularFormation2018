import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductVo } from '../product-vo';

/** Composant du détail d'un produit */
@Component({selector: 'app-product-detail', templateUrl: './product-detail.component.html', styleUrls: ['./product-detail.component.css']})
export class ProductDetailComponent implements OnInit {

  private pRoute: ActivatedRoute;

  private pService: ProductService;

  public product: ProductVo = null;

  /** Constructeur */
  constructor(pRoute: ActivatedRoute, pService: ProductService) {
    this.pRoute = pRoute;
    this.pService = pService;
  }

  /** Initialisation */
  ngOnInit() {
    this.pRoute.params.subscribe((params: any): void => {
      this.pService.fetchByRef(params.ref).then((product: ProductVo): void => {
        this.product = product;
      });
    })
  }

}
