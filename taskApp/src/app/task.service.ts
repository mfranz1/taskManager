import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }


  getTasks(){
    return this.webReqService.get('tasks');
  }

  addTask(task:string){
    return this.webReqService.post('add',task);
  }

  deleteTask(){
    return this.webReqService.delete('deleteTask');
  }

  createCat(title:string){
    //send request to create list
    return this.webReqService.post('cat',title);
  }

  getCats(){
    return this.webReqService.get('cats');
  }
}
