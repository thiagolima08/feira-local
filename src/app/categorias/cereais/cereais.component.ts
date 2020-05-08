import { Component, OnInit } from '@angular/core';

import { ProdutoFeiranteService } from '../../produto-feirante.service';

@Component({
  selector: 'app-cereais',
  templateUrl: './cereais.component.html',
  styleUrls: ['./cereais.component.css']
})
export class CereaisComponent implements OnInit {

  categoria = "Cereais";
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
