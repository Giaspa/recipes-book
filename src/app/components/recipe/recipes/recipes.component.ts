import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { linkButton, outlineButton } from 'src/app/constants/buttons';
import { inputContainer, searchInput } from 'src/app/constants/inputs';
import { Pagination } from 'src/app/model/pagination';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { PostItModalComponent } from '../../commons/post-it-modal/post-it-modal.component';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  @ViewChild(PostItModalComponent) search: PostItModalComponent = new PostItModalComponent();
  outlineButton = outlineButton;
  linkButton = linkButton;
  searchInput = searchInput;
  inputContainer = inputContainer;
  pagination!: Pagination<Recipe>;
  recipes: Recipe[] = [];
  searchFormGroup!: FormGroup;

  constructor(
    readonly recipeService: RecipeService,
    private readonly router: Router
  ) {
    this.setRecipes();
  }

  ngOnInit(): void {
    this.searchFormGroup = new FormGroup({
      title: new FormControl(null),
      ingredient: new FormControl(null),
      preparationMin: new FormControl(null),
      diners: new FormControl(null),
    })
  }

  setRecipes(page?: number) {

    this.recipeService.getRecipes(page, this.searchFormGroup?.value).subscribe(recipesPagination => {
      console.log("🚀 ~ file: recipes.component.ts:23 ~ RecipesComponent ~ this.recipeService.getRecipes ~ recipesPagination:", recipesPagination)
      this.recipes = recipesPagination.content;
      this.pagination = recipesPagination;
    })
  }

  openRecipe(id: string) {
    this.router.navigate([`/recipe/${id}`])
  }

  onSearch(){
    this.setRecipes(0);
    this.search.close();
  }

  onReset(){
    this.searchFormGroup.reset();
    this.setRecipes(0);
  }
}
