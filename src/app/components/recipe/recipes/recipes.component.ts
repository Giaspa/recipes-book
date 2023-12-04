import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  recipes: Recipe[] = [];

  constructor(
    private readonly recipeService: RecipeService,
    private readonly router: Router
  ) {
    this.setRecipes();
  }

  setRecipes() {
    this.recipeService.getRecipes().subscribe(recipes => {
      console.log("🚀 ~ file: recipes.component.ts:19 ~ RecipesComponent ~ this.recipeService.getRecipes ~ recipes:", recipes)
      this.recipes = recipes;
    })
  }

  openRecipe(id: string) {
    this.router.navigate([`/recipe/${id}`])
  }
}
