import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './common/services/auth-guard.service';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { LinkComponent } from './link/link.component';
import { LinksComponent } from './links/links.component';
import { LoginComponent } from './login/login.component';
import { MyPageComponent } from './my-page/my-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'me', component:MyPageComponent,canActivate:[AuthGuardService]},
  {path: 'register', component: RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'create', component:CreateComponent,canActivate:[AuthGuardService]},
  {path:'links', component:LinksComponent,canActivate:[AuthGuardService]},
  {path:'link/:id', component:LinkComponent,canActivate:[AuthGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
