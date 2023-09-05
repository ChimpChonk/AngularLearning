import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private apiDataService: ApiDataService) {}

  LoginSubmit() {
    console.log();
  }

}
