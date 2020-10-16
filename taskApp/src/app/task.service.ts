import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  createCat(title:string){
    //send request to create list
    return this.webReqService.post('cat',{title});
  }

  getCats(){
    return this.webReqService.get('cats');
  }
}
