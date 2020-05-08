import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProdutoFeiranteService } from './../produto-feirante.service';

@Component({
  selector: 'app-card-produto-feirante',
  templateUrl: './card-produto-feirante.component.html',
  styleUrls: ['./card-produto-feirante.component.css']
})
export class CardProdutoFeiranteComponent {

  produtos;
  feirantes=[];
  categoria: String;

  constructor (private ProdutoFeiranteService: ProdutoFeiranteService, private route: ActivatedRoute,) { }

  ngDoCheck(): void {
    this.categoria = this.route.snapshot.params['categoria'];

    this.produtos = this.ProdutoFeiranteService.getProdutos().filter(p => p.categoria == this.categoria);
    this.feiranteComProduto();

  }

  feiranteComProduto(){
    let fe=[];
    let feirantes = this.ProdutoFeiranteService.getFeirantes();
    let nomeProduto = this.produtos.map(i => i.nome);
    for(let i=0; i < feirantes.length;i++){
      for(let j=0; j < nomeProduto.length;j++){
        if(feirantes[i].produtos.includes(nomeProduto[j])){
          fe.push(feirantes[i]);
        }
      }
    }
    this.feirantes = fe;
  }







}
