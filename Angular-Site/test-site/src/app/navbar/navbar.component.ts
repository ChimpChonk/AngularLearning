import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  data: any;

  constructor(private apiDataService: ApiDataService){}

  ngOnInit(): void {
      this.fetchData();
  }
  endpoint: string = 'reviewer';


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
