import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {



  credenciais: CredenciaisDTO = {
    email: "",
    senha: ""
  }

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Categorias', url: '/categorias', icon: 'start' }
  ];

  constructor(private router: Router) {
    
  }

  login() {
    console.log(this.credenciais)
    this.router.navigate(['/home']);
  }
}
