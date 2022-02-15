import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';

const routes: Routes = [
  { path: '',  component: HomeComponent, children: [
    //{ path: 'name',  component: nameComponent },
    ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
