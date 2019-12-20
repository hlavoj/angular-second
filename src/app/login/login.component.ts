import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  loginFailed = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  onSubmit(loginData){
    console.info('Trololo login', loginData);
    if ( loginData.email=='admin' && loginData.password=='pass'){
      localStorage.setItem('token','122234');
      this.router.navigate(['/'])
    }else{
      this.loginFailed = true
    }
  }

}