import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxNavDrawerModule } from '@ngx-lite/nav-drawer';

import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CardProdutoFeiranteComponent } from './card-produto-feirante/card-produto-feirante.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CereaisComponent } from './categorias/cereais/cereais.component';
import { LaticiniosComponent } from './categorias/laticinios/laticinios.component';
import { BebidasComponent } from './categorias/bebidas/bebidas.component';
import { OutrosComponent } from './categorias/outros/outros.component';
import { HortifrutisComponent } from './categorias/hortifrutis/hortifrutis.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SearchBarComponent,
    CardProdutoFeiranteComponent,
    HomepageComponent,
    CereaisComponent,
    LaticiniosComponent,
    BebidasComponent,
    OutrosComponent,
    HortifrutisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    ReactiveFormsModule,
    NgxNavDrawerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
