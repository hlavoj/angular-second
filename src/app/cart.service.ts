import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('https://private-293278-angulartutorial1.apiary-mock.com/shipping');
  }
}