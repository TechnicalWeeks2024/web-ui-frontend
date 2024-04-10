import { NgModule } from '@angular/core';    
import { Routes, RouterModule } from '@angular/router';    
import { DashboardComponent } from './dashboard/dashboard.component';    
import { UsersComponent } from './users/users.component';    
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';   
    
    
export const routes: Routes = [    
  {    
    path: '',    
    redirectTo: 'users',    
    pathMatch: 'full',    
  },    
  {    
    path: 'users',    
    component: UsersComponent,    
    data: {    
      title: 'Users Page'    
    }    
  },    
  {    
    path: 'Dasboard',    
    component: DashboardComponent,    
    data: {    
      title: 'Dashboard Page'    
    }    
  },    
  {    
    path: 'AddUser',    
    component: RegisterComponent,    
    data: {    
      title: 'Add User Page'    
    }    
  },
  {    
    path: 'Login',    
    component: LoginComponent,    
    data: {    
      title: 'Login'    
    }    
  },   
];    
    
@NgModule({    
  imports: [RouterModule.forRoot(routes)],    
  exports: [RouterModule]    
})    
export class AppRoutingModule { }