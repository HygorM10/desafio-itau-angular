import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Pulls } from 'src/app/Pulls/pulls';

import { PullsService } from 'src/app/pulls.service';

import { faStar, faShareAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'Pulls',
  templateUrl: './pulls.component.html',
  styleUrls: ['./pulls.component.css']
})

export class PullsComponent implements OnInit {

  pulls: Pulls[] = [];
  errors: boolean = false;
  name: string = '';
  login: string = '';

  constructor(private route: ActivatedRoute, private service: PullsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((objeto: any) => { this.name = objeto.name; this.login = objeto.login });
    this.service.getPulls(this.name, this.login)
      .subscribe(resposta => { this.pulls = resposta }, error => { this.errors = true });
  }
}
