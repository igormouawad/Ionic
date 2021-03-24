import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaService } from 'src/services/categoria.service';
import { ErrorInterceptorProvider } from 'src/interceptors/error-interceptors';
import { AuthService } from 'src/services/auth.service';
import { StorageService } from 'src/services/storage.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
     CategoriaService,
     AuthService,
     StorageService,
     ErrorInterceptorProvider
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
