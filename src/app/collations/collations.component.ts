import { Component } from '@angular/core';
import { Recipe } from '../ebook/recipe';
import { RecipeService } from '../ebook/recipe.service';

@Component({
  selector: 'app-collations',
  templateUrl: './collations.component.html',
  styleUrl: './collations.component.css'
})
export class CollationsComponent {
  collationRecipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.loadDinnerRecipes();
  }

  loadDinnerRecipes(): void {
    this.recipeService.getRecipesByPeriod('Collation').subscribe({
      next: (recipes) => this.collationRecipes = recipes,
      error: (err) => console.error('Error loading dinner recipes:', err)
    });
  }
}
