import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { AuthService } from 'src/services/auth.service';
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

  constructor(private router: Router,private auth: AuthService) {
    
  }

  login() {
    this.auth.authenticate(this.credenciais)
    .subscribe(response => {
      console.log(response.headers.get('Authorization'));
      this.router.navigate(['/categorias']);
    },
      error => {}
    );

    
  }
}
