import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { BookPageComponent } from './components/book/book-page/book-page.component';
import { AuthComponent } from './components/auth/auth.component';
import { AlertComponent } from './components/alert/alert.component';
import { LeftSideComponent } from './components/sides/left-side/left-side.component';
import { RightSideComponent } from './components/sides/right-side/right-side.component';
import { RecipeCreateComponent } from './components/recipe/recipe-create/recipe-create.component';
import { RecipesComponent } from './components/recipe/recipes/recipes.component';
import { RecipeDetailComponent } from './components/recipe/recipe-detail/recipe-detail.component';
import { RecipeUpdateComponent } from './components/recipe/recipe-update/recipe-update.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CustomHeaderComponent } from './components/commons/custom-header/custom-header.component';
import { CustomPaginatorComponent } from './components/commons/custom-paginator/custom-paginator.component';
import { SearchComponent } from './components/recipe/recipes/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookPageComponent,
    AuthComponent,
    AlertComponent,
    LeftSideComponent,
    RightSideComponent,
    RecipeCreateComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeUpdateComponent,
    HomepageComponent,
    CustomHeaderComponent,
    CustomPaginatorComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
