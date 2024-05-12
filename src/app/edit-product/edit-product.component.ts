import { Component, Inject } from '@angular/core';
import { Products } from '../products/products';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  public products: Products[] = [];

  constructor(
    private productService: ProductService,
    public dialogRef: MatDialogRef<EditProductComponent>,
   @Inject(MAT_DIALOG_DATA) public data: { product: Products }
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  public getProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data: Products[]) => {
        this.products = data;
      },
      error: (err) => {
        alert('Failed to retrieve products');
      }
    });
  }

  public onUpdateProducts(): void {
    this.productService.updateProducts(this.data.product).subscribe({
      next: (data: Products) => {
        this.dialogRef.close(data);
        this.getProducts(); // Refresh list after update
      },
      error: (err: HttpErrorResponse) => {
        alert(err.message);
      }
    });
  }
}



