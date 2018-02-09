import { Component, OnInit } from '@angular/core';
import { ProductVo } from '../product-vo';
import { CartService} from '../cart.service';

/** Composant du panier */
@Component({selector: 'app-cart', templateUrl: './cart.component.html', styleUrls: ['./cart.component.css']})
export class CartComponent implements OnInit {

  /** Données du panier */
  public cart: Array<ProductVo> = [];

  /** Services */
  private cartService: CartService;

  /** Constructeur */
  constructor(service: CartService) { 
    this.cartService = service;
  }

  /** Initialisateur */
  public ngOnInit(): void {
    this.cartService.fetchAll().then((products: Array<ProductVo>): void => {
        this.cart = products;
    });
  }

  /** Retirer une donnée du panier */
  public removeToCartHandler(product: ProductVo): void {
    this.cartService.removeToCart(product);
  }

  /** Fonction permettant de récupérer le total hors taxe du panier */
  public getHT(): number {
    var total: number = 0;
    this.cart.forEach((product): void => {
      total += product.price;
    });
    return total;
  }

  /** Fonction permettant de récupérer le total toutes taxes du panier */
  public getTTC(): number {
    return this.getHT() * 1.2;
  }

}
