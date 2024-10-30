import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent implements OnInit {
  constructor(private router: Router){

  }
  ngOnInit(): void {
    if(!localStorage.getItem('localkey')){
      this.router.navigate(['/login']);
    }
  }
 

}
