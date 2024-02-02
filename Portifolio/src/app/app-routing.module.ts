import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResumoComponent } from './resumo/resumo.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    // Rota para carregar o módulo de produtos
   {path: 'home', component: HomeComponent},
   {path: 'resumo', component: ResumoComponent},
   {path: 'portifolio', component: PortifolioComponent}
   
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
