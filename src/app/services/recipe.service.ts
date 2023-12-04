import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Recipe } from '../model/recipe.model';
import { recipesMock } from 'src/assets/mocks/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Recipe[]>{
    return of(recipesMock)
  }

  getRecipe(id: string): Observable<Recipe>{
    const RECIPE = recipesMock.find(recipe => recipe.id === id);

    if (RECIPE) {
      return of(RECIPE);
    } else {
      const errorMessage = `Recipe with id ${id} not found.`;
      return throwError(new Error(errorMessage));
    }
  }
}
