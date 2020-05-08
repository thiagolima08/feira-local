import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardProdutoFeiranteComponent } from './card-produto-feirante/card-produto-feirante.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CereaisComponent } from './categorias/cereais/cereais.component';
import { BebidasComponent } from './categorias/bebidas/bebidas.component';
import { OutrosComponent } from './categorias/outros/outros.component';
import { HortifrutisComponent } from './categorias/hortifrutis/hortifrutis.component';
import { LaticiniosComponent } from './categorias/laticinios/laticinios.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'cereais', component: CereaisComponent},
  { path: 'bebidas', component: BebidasComponent},
  { path: 'laticinios', component: LaticiniosComponent},
  { path: 'outros', component: OutrosComponent},
  { path: 'hortifrutis', component: HortifrutisComponent},
  { path: 'categorias/:categoria', component: CardProdutoFeiranteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
