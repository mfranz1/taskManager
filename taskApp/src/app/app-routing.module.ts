import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewCatComponent } from './pages/new-cat/new-cat.component';
import { ListTasksComponent } from './pages/list-tasks/list-tasks.component';


const routes: Routes = [
  { path: '', redirectTo: '/cats', pathMatch:'full'},
  { path: 'new-cat', component: NewCatComponent},
  { path: 'cats', component: TaskViewComponent },
  { path: 'list-tasks',component: ListTasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
