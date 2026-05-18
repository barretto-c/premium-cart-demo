import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public api = inject(ApiService);
  public authService = inject(AuthService);

  selectedProduct: any = null;

  ngOnInit() {
    this.api.fetchProducts();
  }

  openProductModal(id: number) {
    this.selectedProduct = this.api.products().find(p => p.id === id);
  }

  closeProductModal() {
    this.selectedProduct = null;
  }

  addToCartFromModal(product: any) {
    this.api.addToCart(product);
    this.closeProductModal();
  }

  logout() {
    this.api.clearCart();
    this.authService.logout();
  }

}
