import { Component } from '@angular/core';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html', 
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent{

  /* An empty array that is responsible 
  to add a division */
  public items = []; 

  public newCat;

  public addCat(){
    if(this.newCat==' '){
    }
    else{
      this.items.push(this.newCat);
      this.newCat=' '
    }
  }

  public displayCat(){
    while(this.items!=null){
      this.items.pop();
    }
  }
}
