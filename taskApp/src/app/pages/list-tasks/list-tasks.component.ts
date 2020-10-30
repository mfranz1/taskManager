import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../task.service';


@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html'
})

export class ListTasksComponent implements OnInit{

  /* An empty array that is responsible 
  to add a division */
  public items; 
  public input:string;
  public newTask;

  constructor(private taskService:TaskService){}

  ngOnInit(){
    let test;
    this.taskService.getTasks().subscribe(variable=>{
      this.items=variable;
    });
  }
  createTask(){
    this.taskService.addTask(this.input).toPromise().then(async()=>{
      this.items=await this.taskService.getTasks();
    })
  } 
  removeTask(){
    this.taskService.deleteTask().toPromise().then(async()=>{
      this.items=await this.taskService.getTasks();
    })
  }
  /*this.taskService.deleteTask().subscribe(variable=>{
    this.items=variable;
  })*/

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