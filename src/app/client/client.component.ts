import { Component, OnInit } from '@angular/core';
interface Client {
  id: number;
  name: string;
  weight: number; // poids en kg
  measurements: { [key: string]: number }; // mesures corporelles
  sleepHours: number;
  stressLevel: number; // niveau de stress de 1 à 10
}
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clients: Client[] = [
    {
      id: 1,
      name: 'John Doe',
      weight: 80,
      measurements: { chest: 102, waist: 85 },
      sleepHours: 7,
      stressLevel: 5
    },
    // Ajoutez plus de clients ici
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
