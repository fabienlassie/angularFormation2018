import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductVo } from '../product-vo';
import { Router } from '@angular/router';

/** Composant d'un produit du catalogue */
@Component({selector: 'app-product', templateUrl: './product.component.html', styleUrls: ['./product.component.css']})
export class ProductComponent implements OnInit {

  /** Produit affiché dans le composant */
  @Input()
  public product: ProductVo = null;

  /** EventEmitter vers le composant catalogue */
  @Output()
  public onAddToCart: EventEmitter<ProductVo> = new EventEmitter<ProductVo>();

  private router: Router;

  /** Constructeur */
  constructor(router:Router) { 
    this.router = router;
  }

  /** Initialisation */
  ngOnInit() {
  }

  /** Ajout d'un produit au panier via le composant catalogue */
  public clickAddToCart(event: MouseEvent): void {
    event.stopPropagation();
    this.onAddToCart.emit(this.product);
  }

  /** Affichage du détail d'un produit */
  public clickProduct(event: MouseEvent): void {
    this.router.navigate(['/detail/' + this.product.ref]);
  }
}
