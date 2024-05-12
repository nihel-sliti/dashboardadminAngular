import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../products/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private fb: FormBuilder, 
    private productService: ProductService,
    private router: Router // Inject Router for navigation
  ) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', Validators.required], // Changed from title to name
      description: ['', Validators.required], // Corrected the spelling
      price: ['', [Validators.required]],
      disponibilite: ['', Validators.required], // Added availability
      imageUrl: ['', Validators.required] // Added image URL
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.productService.addProducts(this.productForm.value).subscribe({
        next: (response) => {
          console.log('Product added:', response);
          this.router.navigate(['/products']); // Navigate to the products list
          this.productForm.reset(); // Reset the form after successful submission
        },
        error: (error: HttpErrorResponse) => {
          console.error('Failed to add product:', error.error);
          alert(`Failed to add product: ${error.statusText} (${error.status})`);
          this.productForm.reset(); // Optionally reset form on error
        }
      });
    } else {
      alert('Form is not valid, please check your input.');
    }
}}

