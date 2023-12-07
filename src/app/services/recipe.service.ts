import { Injectable } from '@angular/core';
import { Observable, map, of, throwError } from 'rxjs';
import { Recipe, RecipeFilter } from '../model/recipe.model';
import { recipesMock } from 'src/assets/mocks/recipe';
import { NewPagination, Pagination } from '../model/pagination';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private selectedRecipeId: string = "";

  constructor() { }

  getSelectedRecipe(): string {
    return this.selectedRecipeId
  }

  getRecipes(page: number = 0, filters?: RecipeFilter): Observable<Pagination<Recipe>> {
    let list = recipesMock;

    if(filters?.title){
      list = list.filter(item => item.title.toLowerCase().includes(filters.title.toLowerCase()));
    }
    if(filters?.diners){
      list = list.filter(item => item.diners === filters.diners);
    }
    if(filters?.preparationMin){
      list = list.filter(item => item.preparationMin === filters.preparationMin);
    }
    if(filters?.ingredient){
      list = list.filter(item => item.ingredients.map(ingredient => ingredient.name.toLowerCase()).join(" ").includes(filters.ingredient.toLowerCase()));
    }

    return of(new NewPagination(page, list))
  }

  getRecipe(id: string): Observable<Recipe> {
    const RECIPE = recipesMock.find(recipe => recipe.id === id);

    if (RECIPE) {
      return of(RECIPE).pipe(map(recipe => {
        this.selectedRecipeId = RECIPE.id;

        return recipe
      }));
    } else {
      const errorMessage = `Recipe with id ${id} not found.`;
      return throwError(new Error(errorMessage));
    }
  }
}
