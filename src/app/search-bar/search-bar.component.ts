import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { ProdutoFeiranteService } from './../produto-feirante.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {


  @ViewChild('search') campoSearch: ElementRef;

  router: Router;
  input:String;
  history=[];


  constructor(router: Router, private ProdutoFeiranteService: ProdutoFeiranteService) {
    this.router = router;
   }

  ngOnInit(): void {
  }

  ProdutoSearch(){
    this.input = this.campoSearch.nativeElement.value;
    let categoria = this.ProdutoFeiranteService.getCategoria(this.input.toLowerCase());
    this.history.push(this.input);
    if(this.history.length > 2){
      this.history.shift()
    }
    if((this.input) && (this.input != this.history[this.history.length-2])){
      this.router.navigate(['/categorias',categoria]);
      this.campoSearch.nativeElement.value = "";
    }
  }

}
