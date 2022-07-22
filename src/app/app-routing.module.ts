import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { MainComponent } from './admin/main/main.component';
import { AuthGuard, authLogin } from './guard/auth.guard';

const routes:Routes = [
{
  path:'home',component:HomeComponent,title:"Home page", canActivate: [authLogin]
},
{
  path:'admin',component:MainComponent,title:"Admin", canActivate: [AuthGuard]
},
{
  path:'about',component:AboutComponent, title:"About"
},
{
  path:'dashboard',component:DashboardComponent,title:"Dashboard"
},
{
  path:'login',component:LoginComponent,title:"Login"
},
{
  path:'',pathMatch:'full',redirectTo:'/home'
},
{
  path:'maintenance',component: MaintenanceComponent,title:"Maintenance"
},
{
  path:'**',component:NotfoundComponent, title:"Not Found"
}
];

@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot(routes)
],
exports:[
  RouterModule
]
})
export class AppRoutingModule { }
