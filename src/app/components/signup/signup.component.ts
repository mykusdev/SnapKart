import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { OnInit } from '@angular/core';

interface user{
  username: string;
  password: string;
  fullName: string;
  address: string;
  email: string;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private router: Router){}

  ngOnInit(){
    const localkey = localStorage.getItem('localkey');
    if(localkey != null){
      this.router.navigate(['/dashboard']);
    }
  }


  

  userdata: user = {
    username: '',
    password: '',
    fullName: '',
    address: '',
    email: '',
  };

  signupError: string = '';

  userIdCounter = 1021;

  async onSignup(){
    if(this.userdata.email === ''){
      this.signupError = 'Please enter a valid Email id';
      setTimeout(() => {
        this.signupError = '';
      }, 3000);
    }
    else if(this.userdata.username === ''){
      this.signupError = 'Please enter a valid username';
      setTimeout(() => {
        this.signupError = '';
      }, 3000);
    }
    else if(this.userdata.password === ''){
      this.signupError = 'Please enter a valid password';
      setTimeout(() => {
        this.signupError = '';
      }, 3000);
    }
    else{
      const userResultCheck = await this.doesUserExist();
      if(userResultCheck === 'error'){
        this.signupError = 'Error signing in. Try again later.';
        setTimeout(() => {
          this.signupError = '';
        }, 3000);
      }
      else if(userResultCheck === 'userExists'){
        this.signupError = 'User already exists';
        setTimeout(() => {
          this.signupError = '';
        }, 3000);
      }else{
        this.createUser();
        localStorage.setItem('localkey', this.userdata.username);
        this.router.navigate(['/dashboard']);
      }
    }

  }

  async doesUserExist(){
    const path = 'http://localhost:4500/userData';
    try{
      const response = await axios.get(path+'?username='+this.userdata.username);
      if(response.data.length > 0){
        return 'userExists';
      }

    }catch(err){
      console.log(err);
      return 'error';
    }
    return 'userDoesntExist';
  }

  async createUser(){
    const path = 'http://localhost:4500/userData';
    try{
      await axios.post(path, {
        username: this.userdata.username,
        password: this.userdata.password,
        fullName: this.userdata.fullName,
        address: this.userdata.address,
        email: this.userdata.email
      });
      this.router.navigate(['/login']);
    }catch(err){
      console.log(err);
    }
  }

  

  showData(){
    console.log(this.userdata.email);
  }
  
  redirectToLogin(){
    this.router.navigate(['/login']);
  }

}
