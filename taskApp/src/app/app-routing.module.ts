import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewCatComponent } from './pages/new-cat/new-cat.component';

const routes: Routes = [
  { path: '', redirectTo: '/cats', pathMatch:'full'},
  { path: 'new-cat', component: NewCatComponent},
  { path: 'cats', component: TaskViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
