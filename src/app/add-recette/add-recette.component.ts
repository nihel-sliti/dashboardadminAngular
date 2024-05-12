import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { RecipeService } from '../ebook/recipe.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-recette',
  templateUrl: './add-recette.component.html',
  styleUrl: './add-recette.component.css'
})
export class AddRecetteComponent {
  recipeForm!: FormGroup;

  constructor(private fb: FormBuilder ,
     private recipeService: RecipeService,
    private router: Router) {
    this.createForm();
  }

  createForm() {
    this.recipeForm = this.fb.group({
      period: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: ['', Validators.required],
      calories: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }
  onSubmit(): void {
    if (this.recipeForm.valid) {
      this.recipeService.addRecipe(this.recipeForm.value).subscribe({
        next: (response) => {
          console.log('Recipe added:', response);
          this.router.navigate(['/ebook']); // Navigate to the recipes list
          this.recipeForm.reset(); // Reset the form after successful submission
        },
        error: (error: HttpErrorResponse) => {
          console.error('Failed to add recipe:', error.error);
          alert(`Failed to add recipe: ${error.statusText} (${error.status})`);
          this.recipeForm.reset(); // Optionally reset form on error
        }
      });
    } else {
      alert('Form is not valid, please check your input.');
    }
  }
}  
