import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'https://processoseletivo.azurewebsites.net/swagger/index.html';

  headers: any = {
  //   'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
  //   'Accept': 'application/json',

    // 'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  //   'Access-Control-Allow-Methods': 'HEAD,GET,POST,PUT,DELETE,PATCH,OPTIONS',
  }
  
  options: any = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headers), 
  };

  constructor(private http: HttpClient) { }


  // cabeçalhos permitidos: Authorization, Cache-Control e Content-Type

  // cadastrarUsuario(data) {
  //   console.log("Dados sendo enviados: ", data);
  //   this.http.post(`${this.API_URL}/api/Usuario`, data, this.options).subscribe((resultUser: any) => {
  //   resultUser = resultUser.json();
  //   });
  // }

  // login(data) {
  //   console.log("Dados sendo enviados: ", data);
  //   this.http.post(`${this.API_URL}/api/Authorization/RequestToken`, data, this.options).subscribe((resultLogin: any) => {
  //   resultLogin = resultLogin.json();
  //   });
  // }

  cadastrarUsuario(data): Observable<any> {
    console.log("dados: ", data);
    return this.http.post(`${this.API_URL}/api/Usuario`, data);
  }

  login(data): Observable<any> {
    console.log("dados: ", data);
    return this.http.post(`${this.API_URL}/api/Authorization/RequestToken`, data);
  }

  

}
