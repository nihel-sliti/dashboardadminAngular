import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './recipe';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:8080/ebook/recipes';

  constructor(private http: HttpClient) { }

  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, recipe);
  }
  getRecipesByPeriod(period: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}/byPeriod?period=${period}`);
  }
}
