import { Component } from '@angular/core';


@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html'
})

export class ListTasksComponent{

  /* An empty array that is responsible 
  to add a division */
  public items = []; 

  public newTask; 


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
}