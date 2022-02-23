import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './ui/board/board.component';
import { HomeComponent } from './ui/home/home.component';

const routes: Routes = [
  { path: '',  component: HomeComponent, children: [
    { path: 'boardComponent',  component: BoardComponent },
    ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
