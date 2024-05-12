import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addoffers',
  templateUrl: './addoffers.component.html',
  styleUrl: './addoffers.component.css'
})
export class AddoffersComponent implements OnInit {
  offersForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.offersForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\d+\.?\d{0,2}$/)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.offersForm.value);
  }
}