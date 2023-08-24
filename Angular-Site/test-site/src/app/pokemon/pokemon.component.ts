import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';


export interface Pokemon {
  id: number;
  name: string;
  birthDate: Date;
  rating: number;
  category: string;
}

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemons: any[] = [];
  showForm: boolean = false;

  constructor(private apiDataService: ApiDataService) { }
  ngOnInit(): void {
    this.apiDataService.getData('Pokemon').subscribe((data: Pokemon[]) => {
      this.pokemons = data;
      this.fetchReviewsForPokemons();
      this.fetchCategoryForPokemons();
    });
  }

  fetchReviewsForPokemons(): void {
    for (const pokemon of this.pokemons) {
      this.apiDataService.getData("pokemon", pokemon.id,'rating').subscribe(rating => {
        pokemon.rating = rating;
      });
    }
  }

  fetchCategoryForPokemons(): void {
    for (const pokemon of this.pokemons) {
      this.apiDataService.getData("pokemon", pokemon.id,'category').subscribe(category => {
        pokemon.category = category.category;
      });
    }
  }

  deletePokemon(id: number): void {
    this.apiDataService.deleteData('Pokemon', id).subscribe(() => {
      this.pokemons = this.pokemons.filter(pokemon => pokemon.id !== id);
    });
  }

  //update pokemon
  updatePokemon(){

    
  }
}
