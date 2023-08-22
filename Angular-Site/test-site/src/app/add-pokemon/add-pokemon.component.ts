import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';

export interface Pokemon {
  name: string;
  birthDate: Date;
  ownerId: number;
  catId: number;
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
    const selectedOwner = this.owners.find((owner) => owner.id === this.selectedOwner);
    if (selectedOwner) {
      this.selectedOwnerId = selectedOwner.ownerId;
    } else {
      this.selectedOwnerId = -1;
    }
    this.cdr.markForCheck(); 
  }

  onCategorySelected(): void {
    const selectedCategory = this.categories.find((category) => category.id === this.selectedCategory);
    if (selectedCategory) {
      this.selectedCategoryId = selectedCategory.categoryId;
    } else {
      this.selectedCategoryId = -1;
    }
    this.cdr.markForCheck();
  }

  getPokemaneData(data: any): void {
    this.apiDataService.createData('Pokemon').subscribe((data: Pokemon) => {
      this.poke = data;});
    console.warn(data);
    
  }
}
