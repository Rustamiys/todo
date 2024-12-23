import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DxButtonModule } from 'devextreme-angular';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, DxButtonModule],
  templateUrl: './index.not-found.html',
  styleUrls: ['./style.not-found.css'],
})

export class NotFoundComponent implements OnInit{
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void{
    if (typeof localStorage !== 'undefined') {
      if (!localStorage.getItem('token')){
        this.router.navigate(['/auth']);
      }
    }
  }
  async goToHomePage() {
    await this.router.navigate(['/home/'])
  }

  async goToEditCardPage() {
    await this.router.navigate(['/editcard/'])
  }

  async logout(){
    localStorage.removeItem('token');
    await this.router.navigate(['/auth/'])
  }
}
