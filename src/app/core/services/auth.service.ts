import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);
  public isLoggedIn = signal<boolean>(false);

  login() {
    this.isLoggedIn.set(true);
    this.router.navigate(['/dashboard']);
  }

  logout() {
    this.isLoggedIn.set(false);
    this.router.navigate(['/login']);
  }
}
