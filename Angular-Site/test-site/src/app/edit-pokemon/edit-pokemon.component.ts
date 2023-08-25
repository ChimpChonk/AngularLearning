import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {
  editedPokemon: any = {};
  pokemonId?: number;

  constructor(private route: ActivatedRoute, private router: Router, private apiDataService: ApiDataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pokemonId = Number(params.get('id'));
      this.apiDataService.getData('Pokemon', this.pokemonId).subscribe(data => {
        this.editedPokemon = data;});
    });
    for (const pokemon of this.editedPokemon) {
      this.apiDataService.getData("pokemon", pokemon.id,'rating').subscribe(rating => {
        pokemon.rating = rating;
      });
    }
  }

  updatePokemon(): void {
    this.apiDataService.updateData('Pokemon', this.pokemonId, this.editedPokemon).subscribe(() => {
      this.router.navigate(['/pokemon']);
    });
  }
}
