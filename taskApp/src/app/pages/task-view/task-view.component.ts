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

  /* A two-way binding performed which 
    pushes text on division */
  public newTask; 

  public newCat;


  /* When input is empty, it will 
    not create a new division */
  public addToList() { 
      if (this.newTask == '') { 
      } 
      else { 
          this.items.push(this.newTask); 
          this.newTask = ''; 
      } 
  } 

  /* This function takes to input the 
    task, that has to be deleted*/
  public deleteTask(index) { 
      this.items.splice(index, 1); 
  }

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
