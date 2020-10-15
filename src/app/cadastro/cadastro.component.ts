import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cliente: any = [{ nome: '', identityId: '', email: '', senha: '', telefone: '', bairro: '', numero: '', complemento: '', cidade: '', logradouro: '', cep: '' }];

  constructor() { }

  ngOnInit(): void {
  }

  cadastrar() {
    
  }

}
