import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService } from '../service/newsapiservices.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor( private _services:NewsapiservicesService) { }

  headingDisplay:any =[];
  ngOnInit(): void {
    this._services.heading().subscribe((result) => {
      this.headingDisplay=result.articles;
    })
  }


}
