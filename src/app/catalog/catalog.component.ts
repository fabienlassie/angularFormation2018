import { Component, OnInit } from '@angular/core';
import { ProductVo } from '../product-vo';
import { ProductService} from '../product.service';
import { CartService} from '../cart.service';

/** Composant du catalogue */
@Component({selector: 'app-catalog', templateUrl: './catalog.component.html', styleUrls: ['./catalog.component.css']})
export class CatalogComponent implements OnInit {

  /** Données du composant */
  public catalog: Array<ProductVo> = [];
  
  /** Données de filtrage*/
  public pmin: number = undefined;
  public pmax: number = undefined;
  public pcateg: string = "";

  /** Service */
  private productService: ProductService;
  private cartService: CartService;

  /** Constructeur */
  constructor(productService: ProductService, cartService: CartService) { 
    this.productService = productService;
    this.cartService = cartService;
  }

  /** Initialisation des données */
  public ngOnInit(): void {
    this.productService.fetchAll().then((products: Array<ProductVo>): void => {
      this.catalog = products;
    });

    this.productService.fetchProductsInPromo().subscribe((promos: Array<ProductVo>): void => {
      console.log(promos);
    })
  }

  /** Ajout d'un produit au panier via le CartService */
  public addToCartHandler(product: ProductVo): void {
    this.cartService.addToCart(product);
  }

}
