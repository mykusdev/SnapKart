import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  constructor(private router: Router){}
  ngOnInit(): void {
      if(!localStorage.getItem('localkey')){
        this.router.navigate(['/login']);
      }
  }
}
