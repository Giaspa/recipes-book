import { ResolveFn, Router } from '@angular/router';
import { Recipe } from '../model/recipe.model';
import { inject } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { catchError, of } from 'rxjs';

export const recipeResolver: ResolveFn<Recipe | null> = (route, state) => {
  const recipeService = inject(RecipeService);
  const router = inject(Router);
  const ID = route.params['id'];

  return recipeService.getRecipe(ID).pipe(
    catchError((error) => {
      console.error(error);

      router.navigate(['']);
      
      return of(null);
    })
  );
}