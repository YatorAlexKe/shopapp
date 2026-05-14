import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService, CartItem } from '../../services/cart';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout implements OnInit {
  items: CartItem[] = [];
  total = 0;
  ordered = false;

  form = {
    name: '',
    email: '',
    address: '',
    city: '',
    zip: ''
  };

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.items = items;
      this.total = this.cartService.getTotal();
    });
  }

  isFormValid(): boolean {
    return !!(this.form.name && this.form.email && this.form.address && this.form.city && this.form.zip);
  }

  placeOrder(): void {
    if (!this.isFormValid()) return;
    this.cartService.clearCart();
    this.ordered = true;
    setTimeout(() => this.router.navigate(['/products']), 3000);
  }
}