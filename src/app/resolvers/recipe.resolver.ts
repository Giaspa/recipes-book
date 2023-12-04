import { ResolveFn, Router } from '@angular/router';
import { Recipe } from '../model/recipe.model';
import { inject } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { catchError, of } from 'rxjs';

export const recipeResolver: ResolveFn<Recipe | null> = (route, state) => {
  console.log("🚀 ~ file: recipe.resolver.ts:8 ~ route:", route)
  const recipeService = inject(RecipeService);
  const router = inject(Router);
  const ID = route.params['id'];
  console.log("🚀 ~ file: recipe.resolver.ts:11 ~ ID:", ID)

  return recipeService.getRecipe(ID).pipe(
    catchError((error) => {
      console.error(error);

      router.navigate(['']);
      
      return of(null);
    })
  );
}