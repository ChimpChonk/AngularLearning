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

export class CardcontainerComponent implements OnInit {
  data: Data[] = [];
  endpoint: string = 'pokemon';
  endpoint2: string = '';
  idData: Data[] = [];
  idAndEndpointData: Rating[] = [];

  constructor(private apiDataService: ApiDataService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.apiDataService.getData(this.endpoint).subscribe(
      (response: Data[]) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  fetchDataById(id: number): void {
    this.apiDataService.getDataById(this.endpoint, id).subscribe(
      (response: Data[]) => {
        this.idData = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  fetchDataByIdAndEndpoint(id: number, endpoint2: string): void {
    this.apiDataService.getDataByIdAndEndpoint(this.endpoint, id, endpoint2).subscribe(
      (response: Rating[]) => {
        this.idAndEndpointData = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}

