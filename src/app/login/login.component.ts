import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: any = { email: '', senha: '' };

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }

  logIn() {
    this.api.login(this.usuario);
  }

  // listar() {
  //   this.api.listar().subscribe(dados => this.usuarios = dados);
  // }

}
