import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Iniciou a pagina Categorias");

  }
  ionViewWillEnter() {
    console.log("Ira entrar na pagina Categorias");
  }
  ionViewDidEnter() {
    console.log("Entrou na pagina Categorias");
  }
  ionViewWillLeave() {
    console.log("Ira sair da pagina Categorias");
  }
  ionViewDidLeave() {
    console.log("Saiu da pagina Categorias");
  }
  ngOnDestroy() {
    console.log("Destruiu a pagina Home");
  }

}
