import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  constructor(private as:AuthService, private router: Router) {}

  async login(){

    try {
        let resp:any = await this.as.loginWithUsernameAndPassword(this.username, this.password);
        console.log("resp:", resp);
        localStorage.setItem('token', resp['token'])
        this.router.navigateByUrl('/todos');
    } catch(e) {
      alert('Login fehlgeschlagen!');
        console.log('error', e);
    }
  }
}
