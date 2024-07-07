import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule,RouterLink, RouterLinkActive],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  data: Product[] = []
  categories: string[] = []
  constructor(private http: HttpClient) {
    this.http.get<Product[]>('https://fakestoreapi.com/products').subscribe(config =>{ 
      this.data = config 
console.log(this.data)
});

this.http.get<string[]>('https://fakestoreapi.com/products/categories').subscribe(config =>{ 
  this.categories = config 
console.log(this.categories)
});
  }

  onCategoryChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedCategory = selectElement.value;
    
    this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${selectedCategory}`).subscribe(config =>{ 
      this.data = config 
    console.log(this.data)
    });
  
  }
}
