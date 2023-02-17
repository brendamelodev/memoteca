import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './View/pensamentos/create/create.component';
import { DeleteComponent } from './View/pensamentos/delete/delete.component';
import { ListComponent } from './View/pensamentos/list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CreateComponent
  },
  {
    path: 'listarPensamento',
    component: ListComponent
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
