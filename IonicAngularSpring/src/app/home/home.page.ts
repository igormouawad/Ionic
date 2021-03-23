import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController) { 
  
  }



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
