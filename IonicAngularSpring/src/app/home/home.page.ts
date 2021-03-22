import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Iniciou a pagina Home");

  }
  ionViewWillEnter() {
    console.log("Ira entrar na pagina Home");
  }
  ionViewDidEnter() {
    console.log("Entrou na pagina Home");
  }
  ionViewWillLeave() {
    console.log("Ira sair da pagina Home");
  }
  ionViewDidLeave() {
    console.log("Saiu da pagina Home");
  }
  ngOnDestroy() {
    console.log("Destruiu a pagina Home");

  }

}
