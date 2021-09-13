import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { HeaderComponent } from 'src/common/header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RepositoriesService } from './repositories.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    RepositoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
