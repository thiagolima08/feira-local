import { Component, OnInit } from '@angular/core';

import { ProdutoFeiranteService } from '../../produto-feirante.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  categoria = "Bebidas";
  produtos=[];
  feirantes=[];

  constructor(private ProdutoFeiranteService: ProdutoFeiranteService) { }

  ngOnInit(): void {
    this.produtos = this.ProdutoFeiranteService.getProdutos().filter(p => p.categoria == this.categoria);
    this.feiranteComProduto();
  }

  feiranteComProduto(){
    let feirantes = this.ProdutoFeiranteService.getFeirantes();
    let nomeProduto = this.produtos.map(i => i.nome);
    for(let i=0; i < feirantes.length;i++){
      for(let j=0; j < nomeProduto.length;j++){
        if(feirantes[i].produtos.includes(nomeProduto[j])){
          this.feirantes.push(feirantes[i]);
        }
      }
    }
  }

}
