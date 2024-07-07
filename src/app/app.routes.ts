import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';


export const routes: Routes = [
    { path: 'products', component: ProductsComponent },

    { path: 'product/:id', component: ProductComponent },
];

