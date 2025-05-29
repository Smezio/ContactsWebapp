import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component/dashboard.component';
import { ErrorComponent } from './error.component';
import { HomeComponent } from './login.component/home.component';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: '**', component: ErrorComponent}
];
