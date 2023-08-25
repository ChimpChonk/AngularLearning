import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CategoryComponent } from './category/category.component';
import { CountryComponent } from './country/country.component';
import { OwnerComponent } from './owner/owner.component';
import { ReviewComponent } from './review/review.component';
import { ReviewersComponent } from './reviewers/reviewers.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';


const routes: Routes = [
  { path: 'pokemon', component: PokemonComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'country', component: CountryComponent },
  { path: 'owner', component: OwnerComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'reviewers', component: ReviewersComponent },
  { path: 'add-pokemon', component: AddPokemonComponent },
  { path: 'edit-pokemon/:id', component: EditPokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
