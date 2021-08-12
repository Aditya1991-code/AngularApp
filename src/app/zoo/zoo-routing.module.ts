import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BirdsComponent } from './birds/birds.component';
import { MammalsComponent } from './mammals/mammals.component';

const route: Routes = [
{ path: 'Birds', component: BirdsComponent},
{ path: 'Mammal', component: MammalsComponent}

];

@NgModule({
    declarations: [BirdsComponent, MammalsComponent],
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})
export class ZooRoutingModule { }
export const routingComponents = [ BirdsComponent, MammalsComponent]