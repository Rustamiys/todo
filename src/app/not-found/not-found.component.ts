import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './index.not-found.html',
  styleUrls: ['./style.not-found.css'],
})

export class NotFoundComponent implements OnInit{
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void{

  }
  async goToHomePage() {
    await this.router.navigate(['/home'])
  }

  async goToEditCardPage() {
    await this.router.navigate(['/editcard'])
  }
}
