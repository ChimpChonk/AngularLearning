import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';


interface Rating {
  id: number;
  title: string;
  text: string;
  rating: number;
}

interface Data {
  id: number;
  name: string;
  birthDate: string;
  reviews: Rating[];
  // ... other properties ...
}

@Component({
  selector: 'app-cardcontainer',
  templateUrl: './cardcontainer.component.html',
  styleUrls: ['./cardcontainer.component.css']
})

export class CardcontainerComponent {

}

