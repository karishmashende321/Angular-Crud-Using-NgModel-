import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
// Post Api Link
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=67f99876904442389abb2458f2b740f2"


  // News Api link
  ApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=67f99876904442389abb2458f2b740f2"
  heading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  headingNews():Observable<any>
  {
    return this._http.get(this.ApiUrl)
  }
}
