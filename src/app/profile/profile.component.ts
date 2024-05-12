import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    location: 'New York, USA',
    biography: 'John is a developer with a passion for building scalable web applications and working across the full stack.'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
