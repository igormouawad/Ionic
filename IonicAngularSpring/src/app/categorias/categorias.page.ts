import { Component, OnInit } from '@angular/core';
import { API_CONFIG } from 'src/config/api.config';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { CategoriaService } from 'src/services/domain/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;
  items: CategoriaDTO[];

  constructor(public categoriaService: CategoriaService) { }

  ngOnInit() {
    console.log("Iniciou a pagina Categorias");

  }
  ionViewWillEnter() {
    console.log("Ira entrar na pagina Categorias");
  }
  ionViewDidEnter() {
    console.log(this.bucketUrl);
    this.categoriaService.findAll()
    .subscribe(response => {
      this.items = response;
    },
    error => {});
    
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
