import { Component } from '@angular/core';

@Component({
  selector: 'app-calculateur-progression',
  templateUrl: './calculateur-progression.component.html',
  styleUrl: './calculateur-progression.component.css'
})
export class CalculateurProgressionComponent {
  trainingSessions = [
    {
      date: '2022-10-01',
      exercises: [
        { name: 'Bench Press', weight: '100kg', repetitions: '10', duration: '60s', intensity: 'High' },
        { name: 'Squat', weight: '120kg', repetitions: '8', duration: '90s', intensity: 'Medium' }
      ]
    },
    {
      date: '2022-10-02',
      exercises: [
        { name: 'Deadlift', weight: '150kg', repetitions: '5', duration: '120s', intensity: 'High' },
        { name: 'Pull Ups', weight: 'Body Weight', repetitions: '15', duration: '45s', intensity: 'Medium' }
      ]
    }
  ];
}
