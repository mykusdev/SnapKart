import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { Routes, RouterModule } from '@angular/router';
// import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  profileClicked:boolean = false;

  openProfile(){
    if(this.profileClicked===false){
      this.profileClicked = true;
    }else{
      this.profileClicked = false;
    }
  }
}
