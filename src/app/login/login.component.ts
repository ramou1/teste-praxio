import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = { email: '', senha: '' };

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }

  logIn() {
    
  }

}
