import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { HeaderComponent } from 'src/common/header/header.component';
import { FooterComponent } from 'src/common/footer/footer.component';
import { PullsComponent } from 'src/pages/pulls/pulls.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RepositoriesService } from './repositories.service';
import { PullsService } from './pulls.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PullsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [
    RepositoriesService,
    PullsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
