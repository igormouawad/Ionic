import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Categorias', url: '/categorias', icon: 'start' }
  ];

  constructor(private router: Router) {
    
  }

  login() {
    this.router.navigate(['/home']);
  }
}
