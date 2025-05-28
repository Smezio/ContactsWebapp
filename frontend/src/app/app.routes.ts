import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ErrorComponent } from './error.component';
import { LoginComponent } from './login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: '**', component: ErrorComponent}
];
