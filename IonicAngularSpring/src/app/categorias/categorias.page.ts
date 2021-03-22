import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(public categoriaService: CategoriaService) { }

  ngOnInit() {
    console.log("Iniciou a pagina Categorias");

  }
  ionViewWillEnter() {
    console.log("Ira entrar na pagina Categorias");
  }
  ionViewDidEnter() {
    this.categoriaService.findAll()
    .subscribe(response => {
      console.log(response)
    },
    error => {
      console.log(error)
    })
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
