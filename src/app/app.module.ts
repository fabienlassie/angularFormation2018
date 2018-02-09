import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductComponent } from './product/product.component';
import { PricePipe } from './price.pipe';
import { CategoryPipe } from './category.pipe';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './product.service';
import { CartService } from './cart.service';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductGuard } from './product.guard';


@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ProductComponent,
    PricePipe,
    CategoryPipe,
    HomeComponent,
    ContactComponent,
    CartComponent,
    ProductCartComponent,
    ProductDetailComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path: "catalog", component: CatalogComponent, pathMatch: "full"
    }, {
      path: "", component: HomeComponent, pathMatch: "full"
    }, {
      path: "home", component: HomeComponent, pathMatch: "full"
    }, {
      path: "contact", component: ContactComponent, pathMatch: "full"
    }, {
      path: "cart", component: CartComponent, pathMatch: "full"
    }, {
      path: "detail/:ref", component: ProductDetailComponent, pathMatch: "full", "canActivate":[ProductGuard]
    }], {useHash: true})
  ],
  providers: [ProductService, CartService, ProductGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
