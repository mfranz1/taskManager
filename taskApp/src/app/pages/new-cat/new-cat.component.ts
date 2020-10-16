import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-cat',
  templateUrl: './new-cat.component.html',
  styleUrls: ['./new-cat.component.css']
})
export class NewCatComponent implements OnInit {

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }
  createCat(title:string){
    this.taskService.createCat(title).subscribe((response:any) => {
      console.log(response);
      //navigate to/cat/response._id
    });
  }
}
