import { Component } from '@angular/core';
import axios from 'axios';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

interface user{
  id: string;
  username: string;
  password: string;
  fullName: string;
  address: string;
  email: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // username: string = '';
  // password: string = '';

  constructor(private router: Router){}

  ngOnInit(){
    const localkey = localStorage.getItem('localkey');
    if(localkey !== null){
      this.router.navigate(['/dashboard']);
    }
  }


  userdata: user = {
    id: '',
    username: '',
    password: '',
    fullName: '',
    address: '',
    email: ''
  };
  loginError: string = '';

  

  // onInputChange(event: Event, eventName:string){
  //   if(eventName === 'username'){
  //     this.userdata.username = (<HTMLInputElement>event.target).value;
  //   }
  //   else if(eventName === 'password'){
  //     this.userdata.password = (<HTMLInputElement>event.target).value;
  //   }
  // }



  onLogin(){
  
    if(this.userdata.username === ''){
      this.loginError = 'Please enter a valid username';
      setTimeout(() => {
        this.loginError = '';
      }, 4000);
    }
    else if(this.userdata.password === ''){
      this.loginError = 'Please enter a valid password';
      setTimeout(() => {
        this.loginError = '';
      }, 4000);
    }
    else{
      this.onApiCall();
    }
    console.log(this.userdata);

  }

  

  async onApiCall(){
    
    const path = `http://localhost:4500/userData?username=${this.userdata.username}`;
    try{
      const response = await axios.get(path);
    console.log(response.data);
    if(this.userdata.password === response.data[0].password){
      localStorage.setItem('localkey', response.data[0].username);
      this.router.navigate(['/dashboard']);
    }else{
      this.loginError = 'Wrong Password';
      setTimeout(() => {
        this.loginError = '';
      }, 3000);
    }
    
    }catch(err){
      console.log(err);
    }
  }

  redirectToSignup(){
    this.router.navigate(['/signup']);
  }
}
