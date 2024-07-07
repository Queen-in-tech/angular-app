import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  data:any = {}
productID: string | null = null

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }
  ngOnInit(): void {
    this.productID = this.route.snapshot.paramMap.get('id');

    if (this.productID) {
      this.fetchProductData(this.productID);
    }
}
 
fetchProductData(id: string): void {
  const url = `https://fakestoreapi.com/products/${id}`;

  this.http.get(url).subscribe(
    (response) => {
      console.log(response)
      this.data = response
    },
    (error) => {
      console.error('Error fetching product data', error);
    }
  );
}
}
