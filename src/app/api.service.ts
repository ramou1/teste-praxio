import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'https://processoseletivo.azurewebsites.net/swagger/index.html';

  constructor(private http: HttpClient) { }

  // listar() {
  //   return this.http.get<any[]>(`${this.API_URL}`)
  // }

  cadastrarUsuario(data) {
    console.log("Dados sendo enviados: ", data);
    this.http.post(`${this.API_URL}/api/Usuario`, data).subscribe((resultUser: any) => {
    resultUser = resultUser.json();
    });
  }

  login(data) {
    console.log("Dados sendo enviados: ", data);
    this.http.post(`${this.API_URL}/api/Authorization/RequestToken`, data).subscribe((resultLogin: any) => {
    resultLogin = resultLogin.json();
    });
  }

}
