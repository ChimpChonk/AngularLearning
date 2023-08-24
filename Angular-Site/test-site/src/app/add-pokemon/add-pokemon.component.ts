import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { catchError } from 'rxjs/operators';

export interface Pokemon {
  name: string;
  birthDate: Date;
}

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit{
  poke: any;
  owners: any[] = [];
  categories: any[] = [];
  selectedOwner: number = -1;
  selectedCategory: number = -1;
  selectedOwnerId: number = -1;
  selectedCategoryId: number = -1;

  constructor(private apiDataService: ApiDataService, private cdr: ChangeDetectorRef) {
   }
  ngOnInit(): void {
    this.apiDataService.getData('Owner').subscribe((data: any[]) => {
      this.owners = data;
    });
    this.apiDataService.getData('Category').subscribe((data: any[]) => {
      this.categories = data;
    });
  }

  onOwnerSelected(): void {
    this.selectedOwnerId = this.selectedOwner;
  }

  onCategorySelected(): void {
    this.selectedCategoryId = this.selectedCategory;
  }

  createPokemonData(pokename: any, pokebirth: any): void {
    const newPokemon: Pokemon = {
      name: pokename,
      birthDate: pokebirth,
    };
  
    this.apiDataService.createData('Pokemon', 'ownerId', this.selectedOwnerId, 'catId', this.selectedCategoryId, newPokemon)
    .subscribe({
      next: (data: Pokemon) => {
        console.log('Newly Created Pokemon:', data);
      },
      error: (error) => {
        console.error('HTTP Error:', error);
        console.log('Full Error Response:', error.error); // Log the full response
        // Handle error here if needed
      }
    });
  }
}
