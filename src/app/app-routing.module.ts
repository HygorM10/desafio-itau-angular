import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { PullsComponent } from 'src/pages/pulls/pulls.component';

const routes: Routes = [
  { path: 'index', component: HomeComponent },
  { path: 'pulls/:name/:login', component: PullsComponent },
  { path: '', component: AppComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
