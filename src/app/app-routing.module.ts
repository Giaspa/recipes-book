import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RecipeCreateComponent } from './components/recipe/recipe-create/recipe-create.component';
import { RecipeDetailComponent } from './components/recipe/recipe-detail/recipe-detail.component';
import { RecipeUpdateComponent } from './components/recipe/recipe-update/recipe-update.component';
import { authGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: 'recipe',
    children: [
      {
        path: 'new',
        component: RecipeCreateComponent,
        canActivate: [authGuard]
      },
      {
        path: ':id',
        component: RecipeDetailComponent,
        canActivate: [authGuard]
      },
      {
        path: 'update/:id',
        component: RecipeUpdateComponent,
        canActivate: [authGuard]
      },
    ]
  },
  {
    path: '', redirectTo: 'homepage', pathMatch: 'full'
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: '**', redirectTo: 'homepage', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
