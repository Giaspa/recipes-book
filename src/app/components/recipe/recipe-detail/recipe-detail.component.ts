import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { goldHoveringBtn } from 'src/app/constants/buttons';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
  recipe!: Recipe;
  goldHoveringBtn = goldHoveringBtn;
  
  constructor(
    private readonly activatedRoute: ActivatedRoute
  ){
    this.activatedRoute.data.subscribe(data => {
      this.recipe = data['recipe']
    })
  }

}
