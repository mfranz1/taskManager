import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) { 
    this.ROOT_URL=environment.apiUrl;
  }

  get(url: string){
      return this.http.get(`${this.ROOT_URL}/${url}`);
  }
  post(url: string, payload: Object, responsetype: string){
    console.log(payload);
    return this.http.post(`${this.ROOT_URL}/${url}`,payload,{responseType:'text'});
  }
  delete(url: string){
    return this.http.delete(`${this.ROOT_URL}/${url}`);
  }
}
