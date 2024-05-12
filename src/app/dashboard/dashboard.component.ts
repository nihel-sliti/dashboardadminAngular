import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Payments } from './payments';
import { PaymentService } from './payment.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  payments: Payments[] = [];

  constructor(private paymentService: PaymentService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadPayments();
  }

  public loadPayments(): void {
    this.paymentService.getAllPayments().subscribe({
      next : (data: Payments[]) => {
        this.payments = data;
        console.log(this.payments);
        this.cd.detectChanges(); // Force change detection
      },
      error :(err)=> {
        alert('get payment dont work');
      }
  });
  }

  validatePayment(paymentId: number): void {
    this.paymentService.changePaymentStatus(paymentId, 'VALIDE').subscribe({
      next : (response: string) => {
        console.log(response);
        this.loadPayments(); // Recharge les paiements pour refléter le statut mis à jour
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error validating payment:', error);
      }
    });
  }
 

  refusePayment(paymentId: number): void {
    this.paymentService.changePaymentStatus(paymentId, 'NON_VALIDE').subscribe({
      next : (response: string) => {
        console.log(response);
        this.loadPayments(); // Recharge les paiements pour refléter le statut mis à jour
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error refusing payment:', error);
      }
    }
      
    );
  }

  confirmDelete(): void {
    const confirmation = window.confirm('Are you sure you want to delete?');
    if (confirmation) {
      console.log('Item deleted');
    }
  }
}