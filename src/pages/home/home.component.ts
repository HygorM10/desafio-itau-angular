import { Component, OnInit } from '@angular/core';

import { Repository } from 'src/app/Repositories/repositories';

import { RepositoriesService } from 'src/app/repositories.service';

import { faStar, faShareAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  repositorys: Repository[] = [];
  errors: boolean = false;

  faStar = faStar;
  faShareAlt = faShareAlt;

  constructor(private service: RepositoriesService) {
  }

  ngOnInit(): void {
    this.service
      .getRepositories()
      .subscribe(resposta => { this.repositorys = resposta }, error => { this.errors = true });
  }

}
