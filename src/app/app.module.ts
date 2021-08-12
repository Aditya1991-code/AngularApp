import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

import { AppComponent } from './app.component';

import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { ZooComponent } from './zoo/zoo.component';

const route: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent},
  { path: 'zoo', component: ZooComponent},
  

];
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    ProductComponent,
    ZooComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route) 
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
