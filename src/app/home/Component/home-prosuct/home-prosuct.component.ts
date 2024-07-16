import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home-prosuct',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-prosuct.component.html',
  styleUrl: './home-prosuct.component.css'
})
export class HomeProsuctComponent {
  products: any;
  constructor(private productService: ProductService) {
    this.products = productService.getProduct();
  }
}
