import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-cardcontainer',
  templateUrl: './cardcontainer.component.html',
  styleUrls: ['./cardcontainer.component.css']
})
export class CardcontainerComponent implements OnInit {
  data: any;
  endpoint: string = 'pokemon';

  constructor(private apiDataService: ApiDataService){}

  ngOnInit(): void {
      this.fetchData();
  }

  fetchData(): void {
    this.apiDataService.getData(this.endpoint).subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
