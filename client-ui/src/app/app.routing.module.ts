import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ChildComponent } from './child/child.component';
import { UsersComponent } from './users/users.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/shared/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },

    //Authentication required
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'child',
                component: ChildComponent
            },
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: 'contributions',
                component: ContributionsComponent
            }
        ]
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}