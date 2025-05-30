import { Routes } from '@angular/router';
import { ErrorPageComponent } from './errorpage.component/errorpage.component';
import { HomePageComponent } from './home.component/home.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { DashboardComponent } from './dashboard.component/dashboard.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: '**', component: ErrorPageComponent}
];
