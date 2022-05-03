import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './Components/books/books.component';
import { InsertEditDeleteComponent } from './Components/insert-edit-delete/insert-edit-delete.component';
import { IssueBookPopupComponent } from './Components/issue-book-popup/issue-book-popup.component';
import { IssueBookComponent } from './Components/issue-book/issue-book.component';

const routes: Routes = [
  { path: 'booklist', component: BooksComponent },
  { path: 'insert', component: InsertEditDeleteComponent },
  { path: 'edit', component: InsertEditDeleteComponent },
  { path: 'delete', component: InsertEditDeleteComponent },
  { path: 'issuebook/:id', component: IssueBookComponent },
  { path: 'issuepopup', component: IssueBookPopupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
