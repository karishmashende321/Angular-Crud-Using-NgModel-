import { Component, OnInit } from '@angular/core';

import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  
  headingDisplayNews: any = [];
  constructor(private _services: NewsapiservicesService) { }



  newsFunction() {

    return false

  }

  availableNews() {

    return true

  }

  ngOnInit(): void {
    this._services.headingNews().subscribe((result) => {
      this.headingDisplayNews = result.articles;
    })
    // Promises  for resolve------
    let newsPromise = new Promise((resolve, reject) => {
      // resolve('News is resolved');
      // reject('News is rejected');
      if (this.newsFunction()) {
        return setTimeout(() => {
          resolve("News Function return")
        }, 2000)

      } else if (this.availableNews()) {
        return setTimeout(() => {
          resolve("available news return")
        }, 2000)

      } else {
        return setTimeout(() => {
          reject("news is rejected")
        }, 2000)

      }
    })

    newsPromise.then(res=>{
      console.log("then code =>",res);
      
    }).catch(res=>{
      console.log("catch code =>",res);
      
    })



  }



}
