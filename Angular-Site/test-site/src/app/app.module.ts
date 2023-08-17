import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CardcontainerComponent } from './cardcontainer/cardcontainer.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CategoryComponent } from './category/category.component';
import { CountryComponent } from './country/country.component';
import { OwnerComponent } from './owner/owner.component';
import { ReviewComponent } from './review/review.component';
import { ReviewersComponent } from './reviewers/reviewers.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TextcomponentComponent,
    NavbarComponent,
    CardcontainerComponent,
    PokemonComponent,
    CategoryComponent,
    CountryComponent,
    OwnerComponent,
    ReviewComponent,
    ReviewersComponent,
    AddPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
