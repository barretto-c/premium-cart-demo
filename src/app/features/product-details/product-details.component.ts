import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  public api = inject(ApiService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  product: any = null;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.product = this.api.products().find(p => p.id === parseInt(id));
    }
  }

  addToCart() {
    if (this.product) {
      this.api.addToCart(this.product);
      this.router.navigate(['/dashboard']);
    }
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}