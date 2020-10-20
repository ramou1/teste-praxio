import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // usuario: any = { email: '', senha: '' };
  submitted: boolean = false;
  form: FormGroup;

  constructor(public api: ApiService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // acessar os campos do formulario
  get f() {
    return this.form.controls;
  }

  logIn() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log("dados form: ", this.form.value);

    this.api.login(this.form.value).subscribe(response => {
      console.log(response);
    },
    error => {
      console.log(error);
    });
  }

}
