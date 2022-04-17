import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService } from './common/services/http.service';
import { CustomValidators } from './common/custom.validators';
import { MyPageComponent } from './my-page/my-page.component';
import { AuthInterceptorService } from './common/services/auth-interceptor.service';
import { CreateComponent } from './create/create.component';
import { LinksComponent } from './links/links.component';
import { LinkComponent } from './link/link.component';
import { AuthGuardService } from './common/services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    MyPageComponent,
    CreateComponent,
    LinksComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService,CustomValidators,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  },AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
