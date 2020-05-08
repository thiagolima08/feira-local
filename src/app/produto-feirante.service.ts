import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoFeiranteService {

  constructor() { }

  produtos=[
    {
      "id":1,
      "nome":"banana",
      "categoria":"Hortifrútis",
    },
    {
      "id":2,
      "nome":"maçã",
      "categoria":"Hortifrútis",
    },
    {
      "id":3,
      "nome":"queijo de coalho",
      "categoria":"Laticínios",
    },
    {
      "id":4,
      "nome":"feijão verde",
      "categoria":"Cereais",
    },
    {
      "id":5,
      "nome":"bebida láctea",
      "categoria":"Bebidas",
    },
    {
      "id":6,
      "nome":"perfume",
      "categoria":"Outros",
    },
  ]

  feirantes=[
    {
      "id":1,
      "nome":"Fulano",
      "whatsapp":"83999889988",
      "produtos":["banana","queijo de coalho"]
    },
    {
      "id":2,
      "nome":"Cicrano",
      "whatsapp":"83999009988",
      "produtos":["feijão verde","queijo de coalho"]
    },
    {
      "id":3,
      "nome":"Beltrano",
      "whatsapp":"83988009988",
      "produtos":["maçã"]
    },
    {
      "id":4,
      "nome":"José",
      "whatsapp":"83993889988",
      "produtos":["banana"]
    },
    {
      "id":5,
      "nome":"Beltrano Jr.",
      "whatsapp":"83988009988",
      "produtos":["bebida láctea"]
    },
    {
      "id":6,
      "nome":"Maria",
      "whatsapp":"83993889988",
      "produtos":["perfume"]
    }
  ]

  getProdutos(){
    return this.produtos;
  }

  getProduto(nome){
    let produto = this.produtos.filter(p=>p.nome==nome);
    return produto;
  }

  getFeirantes(){
    return this.feirantes;
  }

  getCategoria(nome){
    let prod = this.getProduto(nome);
    let cat = prod[0].categoria;
    return cat;
  }
}
