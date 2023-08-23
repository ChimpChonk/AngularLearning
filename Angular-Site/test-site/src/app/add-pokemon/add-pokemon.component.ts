import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';

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
    // this.apiDataService.createData('Pokemon').subscribe((data: Pokemon) => {
    //   this.poke = data;});
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
    // console.log('Selected Owner ID:', this.selectedOwner);
    // console.log('Owners:', this.owners);
    // const selectedOwner = this.owners.find((owner) => owner.id === this.selectedOwner);
    // console.log(selectedOwner);
    // if (selectedOwner) {
    //   this.selectedOwnerId = selectedOwner.ownerId;
    // } else {
    //   this.selectedOwnerId = -1;
    // }

    this.selectedOwnerId = this.selectedOwner;
    console.log(this.selectedOwnerId);
  }

  onCategorySelected(): void {
    // const selectedCategory = this.categories.find((category) => category.id === this.selectedCategory);
    // if (selectedCategory) {
    //   this.selectedCategoryId = selectedCategory.categoryId;
    // } else {
    //   this.selectedCategoryId = -1;
    // }
    // console.log(selectedCategory);
    this.selectedCategoryId = this.selectedCategory;
    console.log(this.selectedCategoryId);
  }

  // createData(name: any, birthDate: any): void {
  //   const newPokemon: Pokemon = {
  //     name: name.name,
  //     birthDate: birthDate.birthDate,
  //   };
  //   this.apiDataService.createData('Pokemon', 'ownerId', this.selectedOwnerId ,'catId', this.selectedCategoryId, newPokemon).subscribe((data: Pokemon) => {
  //     data = newPokemon;
  //     console.warn(data);
  //   });
  // }

  createPokemonData(pokename: any, pokebirth: any): void {
    const newPokemon: Pokemon = {
      name: pokename,
      birthDate: pokebirth,
    };
  
    console.log(newPokemon.name, newPokemon.birthDate);
  
    this.apiDataService.createData('Pokemon', 'ownerId', this.selectedOwnerId, 'catId', this.selectedCategoryId, newPokemon)
    .subscribe({
      next: (data: Pokemon) => {
        console.log('Newly Created Pokemon:', data);
      },
      error: (error) => {
        console.error('HTTP Error:', error);
      }
    });
  }
  
  
}
