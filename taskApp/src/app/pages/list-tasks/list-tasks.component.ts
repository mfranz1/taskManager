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
  public newTask:string;

  constructor(private taskService:TaskService){}

  ngOnInit(){
    let test;
    this.taskService.getTasks().subscribe(variable=>{
      this.items=variable;
      console.log(variable);
    });
  }
  createTask(){
    this.taskService.addTask(this.newTask).toPromise().then(async()=>{
      this.items=await this.taskService.getTasks().toPromise();
    }).catch(async(error)=>{
      this.items=await this.taskService.getTasks().toPromise();
      console.log(error);
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