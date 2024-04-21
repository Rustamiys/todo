import { FormsModule }   from "@angular/forms";
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { CommonModule } from "@angular/common"; 


@Component({
  selector: 'app-editcard',
  standalone: true,
  imports: [CommonModule, DxButtonModule, FormsModule],
  templateUrl: './index.editcard.html',
  styleUrls: ['./style.editcard.css']
})


export class EditcardComponent {
  returnHomePage() : void {
  }
  capitalize = (txt : any) : Text => txt.charAt(0).toUpperCase() + txt.slice(1);
  click = (e : any) : void => {
    const buttonText = e.component.option('text');
    notify(`The ${this.capitalize(buttonText)} button was clicked`);
  };
}

// @NgModule({
//   imports: [
//     BrowserModule,
//     DxButtonModule,
//   ],
//   declarations: [EditcardComponent],
//   bootstrap: [EditcardComponent],
// })

// export class EditModule { }

// platformBrowserDynamic().bootstrapModule();
