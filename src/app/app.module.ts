import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { HeaderComponent } from 'src/common/header/header.component';
import { FooterComponent } from 'src/common/footer/footer.component'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RepositoriesService } from './repositories.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [
    RepositoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
