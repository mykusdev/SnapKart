import { Component } from '@angular/core';
import axios from 'axios';

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
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // username: string = '';
  // password: string = '';
  userdata: user = {
    id: '',
    username: '',
    password: '',
    fullName: '',
    address: '',
    email: ''
  };

  onInputChange(event: Event, eventName:string){
    if(eventName === 'username'){
      this.userdata.username = (<HTMLInputElement>event.target).value;
    }
    else if(eventName === 'password'){
      this.userdata.password = (<HTMLInputElement>event.target).value;
    }
  }


  async onLogin(){
    console.log(this.userdata);
    const path = `http://localhost:4500/userData?username=${this.userdata.username}`;
    try{
      const response = await axios.get(path);
    console.log(response.data);
    }catch(err){
      console.log(err);
    }
    
  }
}
