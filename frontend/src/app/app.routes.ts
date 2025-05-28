import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component/dashboard.component';
import { ErrorComponent } from './error.component';
import { LoginComponent } from './login.component/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login'},
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: '**', component: ErrorComponent}
];
