import { Routes } from '@angular/router';
import { ContactsTable } from './contactstable.component/contactstable.component';
import { ErrorComponent } from './error.component';
import { HomeComponent } from './home.component/home.component';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'dashboard', component: ContactsTable, canActivate: [AuthGuard]},
    { path: '**', component: ErrorComponent}
];
