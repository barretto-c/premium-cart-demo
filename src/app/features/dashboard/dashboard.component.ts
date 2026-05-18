import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public api = inject(ApiService);
  public authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit() {
    this.api.fetchProducts();
  }

  //Added navigation to product details page
  goToProduct(id: number) {
    this.router.navigate(['/product', id]);
  }
}
