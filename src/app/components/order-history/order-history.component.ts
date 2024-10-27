import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [],
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
