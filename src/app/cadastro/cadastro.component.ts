import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  // cliente: any = { nome: '', cpf: '', telefone: '', email: '', senha: '', cidade: '', logradouro: '', numero: '', bairro: '', cep: '', complemento: '' };
  submitted: boolean = false;
  form: FormGroup;

  constructor(public api: ApiService, private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required, Validators.minLength(9)],
      telefone: ['', Validators.required, Validators.pattern("[0-9 ]{12}")],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cidade: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      cep: ['', Validators.required],
      complemento: [''],
    });
  }

   // acessar os campos do formulario
   get f() {
    return this.form.controls;
  }

  cadastrar() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log("dados form: ", this.form.value);

    this.api.cadastrarUsuario(this.form.value).subscribe(response => {
      console.log(response);
    },
      error => {
        console.log(error);
      });
  }

}
