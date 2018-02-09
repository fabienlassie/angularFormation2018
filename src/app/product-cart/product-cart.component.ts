import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductVo } from '../product-vo';
import { Router } from '@angular/router';

/** Composant d'un produit du panier */
@Component({selector: 'app-product-cart', templateUrl: './product-cart.component.html', styleUrls: ['./product-cart.component.css']})
export class ProductCartComponent implements OnInit {

  /** Produit affiché dans le composant */
  @Input()
  public product: ProductVo = null;

  /** EventEmitter vers le composant panier */
  @Output()
  public onRemoveToCart: EventEmitter<ProductVo> = new EventEmitter<ProductVo>();

  private router: Router;

  /** Constructeur */
  constructor(router:Router) { 
    this.router = router;
  }

  /** Initialisation */
  ngOnInit() {}

  /** Retirer le produit du panier via le composant panier */
  public clickRemove(event: MouseEvent): void {
    event.stopPropagation();
    this.onRemoveToCart.emit(this.product);
  }

  /** Affichage du détail d'un produit */
  public clickProduct(event: MouseEvent): void {
    this.router.navigate(['/detail/' + this.product.ref]);
  }
}
