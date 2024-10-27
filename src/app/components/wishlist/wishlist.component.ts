import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit{
  constructor(private router: Router){}
  ngOnInit(): void {
      if(!localStorage.getItem('localkey')){
        this.router.navigate(['/login']);
      }
  }
}
