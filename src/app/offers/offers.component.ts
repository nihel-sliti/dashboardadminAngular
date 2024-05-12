import { Component, OnInit } from '@angular/core';
import { offersData } from './offersdata';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent implements OnInit {
  offers = offersData ;
    

  // Méthode pour gérer les Edit
 editOffers(offersId: number) {
    console.log('Edit offer ID:', offersId);
    // Ici, ajoutez la logique pour valider le paiement
  }

  // Méthode pour gérer les delete
  deleteOffers(offersId: number) {
    console.log('Delete offer ID:', offersId);
    // Ici, ajoutez la logique pour refuser le paiement
  }

  constructor() { }

  ngOnInit(): void {
  }
}
