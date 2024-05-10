import { FormsModule }   from "@angular/forms";
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { Component } from '@angular/core';
import { CommonModule } from "@angular/common"; 
import { Router } from '@angular/router';
import { DataService } from "../data.service";

@Component({
  selector: 'app-editcard',
  standalone: true,
  imports: [CommonModule, DxButtonModule, FormsModule],
  templateUrl: './index.editcard.html',
  styleUrls: ['./style.editcard.css']
})



export class EditcardComponent {
  constructor(
    private router: Router,
    private dataService: DataService
  ) { }
  ngOnInit(): void{

  }
  async goToHomePage() {
    await this.router.navigate(['/home'])
  }
}
