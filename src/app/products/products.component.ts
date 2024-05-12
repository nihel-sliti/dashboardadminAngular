import { Component, OnInit } from '@angular/core';
import { Products } from './products';
import { ProductService } from './product.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { EditProductComponent } from '../edit-product/edit-product.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  public products: Products[] = [];
  public editproduct: Products| null = null; // Now can be null
  public deleteproduct: Products | null = null; // Now can be null
  notFoundMessage: string = '';


  private baseUrl = 'http://localhost:8080/products';
  constructor(
    private productsService: ProductService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private http: HttpClient,
  ){}

  ngOnInit() {
   this.getProducts();
  }
  public getProducts(): void {
    this.productsService.getProducts().subscribe({
      next : (data: Products[]) => {
        this.products = data;
        console.log(this.products);
      },
      error :(err)=> {
        alert('get dont work');
      }
    
    
    });
      
     
  }
  confirmDelete(productId: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.onDeleteProducts(productId);
    }
  }

  
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
 
  public onDeleteProducts(productId: number | undefined): void {
    if (productId === undefined) {
      console.error("Tried to delete an employee without an ID");
      return; // Retourner ou afficher un message d'erreur
    }
    this.productsService.deleteProducts(productId).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getProducts();
     
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }



  public onOpenModal(product: Products | null, mode: string): void {
    if (mode === 'edit' && product) {
      this.openDialog(product, EditProductComponent);
    } 
  }

  private openDialog(product: Products, component: any): void {
    const dialogRef = this.dialog.open(component, {
      width: '250px',
      data: { product: product }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getProducts();  // refresh the list
      }
    });
  }

  private closeModal(modalId: string): void {
    const dialogRef = this.dialog.getDialogById(modalId);
    if (dialogRef) {
      dialogRef.close();
    } else {
      console.warn(`Dialog with id ${modalId} not found`);
    }
  



}
}