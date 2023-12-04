import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pagination } from 'src/app/model/pagination';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  pagination!: Pagination<Recipe>;
  recipes: Recipe[] = [];

  constructor(
    private readonly recipeService: RecipeService,
    private readonly router: Router
  ) {
    this.setRecipes();
  }

  setRecipes() {
    this.recipeService.getRecipes().subscribe(recipesPagination => {
      console.log("🚀 ~ file: recipes.component.ts:23 ~ RecipesComponent ~ this.recipeService.getRecipes ~ recipesPagination:", recipesPagination)
      this.recipes = recipesPagination.content;
      this.pagination = recipesPagination;
    })
  }

  openRecipe(id: string) {
    this.router.navigate([`/recipe/${id}`])
  }
}
