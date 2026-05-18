import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com';

  public products = signal<any[]>([]);
  public cart = signal<any[]>([]);
  public customerSummary = signal({
    name: 'Clyde Barretto',
    tier: 'Platinum Enterprise Architect',
    totalSpent: 100000.00
  });

  async fetchProducts() {
    try {
      const data = await firstValueFrom(this.http.get<any[]>(`${this.apiUrl}/products?limit=3`));
      this.products.set(data);
    } catch (error) {
      console.error('API Error:', error);
    }
  }

  addToCart(product: any) {
    this.cart.update(items => [...items, product]);
  }
}
