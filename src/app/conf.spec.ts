import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductComponent } from './product/product.component';
import { PricePipe } from './price.pipe';
import { CategoryPipe } from './category.pipe';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductGuard } from './product.guard';
import { TestBed } from '@angular/core/testing';

export const TESTING_MODULE_CONFIG: any = {
    declarations: [
        AppComponent,
        CatalogComponent,
        ProductComponent,
        CartComponent,
        PricePipe,
        CategoryPipe,
        HomeComponent,
        ContactComponent,
        ProductDetailComponent
    ],
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
        RouterTestingModule,
    ],
    providers: [ProductService, ProductGuard],
    bootstrap: [AppComponent]
}

export function myModuleConfig(): void {
    TestBed.configureTestingModule(TESTING_MODULE_CONFIG).compileComponents();
}

export function getComponentInstance(type: any): any {
    return getComponentFixture(type).debugElement.componentInstance;
}

export function getComponentFixture(type:any):any{
    return TestBed.createComponent(type);
}

export function getComponentNativeElement(type:any):any{
    const fixture = getComponentFixture(type);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    return compiled;
}