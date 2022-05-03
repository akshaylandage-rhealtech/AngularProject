import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule}  from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';


import { HttpClientModule} from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BooksService } from './Components/books/books.service';
import { BooksComponent } from './Components/books/books.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InsertEditDeleteComponent } from './Components/insert-edit-delete/insert-edit-delete.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule  } from "@angular/forms";
import { IssueBookComponent } from './Components/issue-book/issue-book.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IssueBookPopupComponent } from './Components/issue-book-popup/issue-book-popup.component';
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    InsertEditDeleteComponent,
    IssueBookComponent,
    IssueBookPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatSidenavModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    NgbModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
    
  ],
  providers: [
    BooksService

  ],
  entryComponents:[
    InsertEditDeleteComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
