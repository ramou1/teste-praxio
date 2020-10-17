import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cliente: any = [{ nome: '', cpf: '', telefone: '', email: '', senha: '', cidade: '', logradouro: '', numero: '', bairro: '', cep: '', complemento: '' }];

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.api.cadastrarUsuario(this.cliente);
  }

}
