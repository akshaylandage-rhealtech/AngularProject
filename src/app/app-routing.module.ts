import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './Components/books/books.component';
import { InsertEditDeleteComponent } from './Components/insert-edit-delete/insert-edit-delete.component';

const routes: Routes = [
  { path: 'booklist', component: BooksComponent },
  { path: 'insert/:elementId', component: InsertEditDeleteComponent },
  { path: 'edit', component: InsertEditDeleteComponent },
  { path: 'delete', component: InsertEditDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
