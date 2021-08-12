import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ZooComponent } from './zoo/zoo.component';
import { BirdsComponent } from './zoo/birds/birds.component';
import { MammalsComponent } from './zoo/mammals/mammals.component';

const route: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent},
  { 
    path: 'zoo', 
    component: ZooComponent, 
    children: [
      {path: 'Birds', component: BirdsComponent},
      {path: 'Mammals', component: MammalsComponent}
    ]
}
];

@NgModule({
  declarations: [RegisterComponent, ContactComponent, LoginComponent],
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ RegisterComponent, ContactComponent]
