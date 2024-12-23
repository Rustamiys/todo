import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditcardComponent } from './editcard/editcard.component';
import { AuthComponent } from './auth/auth.component';
import { ShowcardComponent } from './showcard/showcard.component'; 


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'editcard', component: EditcardComponent},
    {path: 'task', component: ShowcardComponent},
    {path: 'auth', component: AuthComponent},
    {path: '**', component: HomeComponent}
];
