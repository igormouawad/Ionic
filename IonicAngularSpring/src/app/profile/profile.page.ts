import { Component, OnInit } from '@angular/core';
import { API_CONFIG } from 'src/config/api.config';
import { ClienteDTO } from 'src/models/cliente.dto';
import { ClienteService } from 'src/services/domain/cliente.service';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  cliente: ClienteDTO;

  constructor(private storage: StorageService, private clienteService: ClienteService) { }
  
  ngOnInit() {}
  
  ionViewDidEnter() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.clienteService.findByEmail(localUser.email)
      .subscribe(response => {
        this.cliente = response;
        this.getImageIfExistes();
        //this.cliente.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.cliente.id}.png`;
      },
      error => {});
    }
  }

  getImageIfExistes() {
    this.clienteService.getImageFromBucket(this.cliente.id)
    .subscribe(response =>{
      this.cliente.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.cliente.id}.png`
    })
  }



}
