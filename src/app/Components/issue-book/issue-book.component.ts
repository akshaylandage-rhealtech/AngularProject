import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel, IssueBookList, SelectedBooks } from '../books/BookModel';
import { BooksService } from '../books/books.service';
import { IssueBookPopupComponent } from '../issue-book-popup/issue-book-popup.component';

import { MAT_DATE_FORMATS } from '@angular/material/core';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class IssueBookComponent implements OnInit {
  IssueId: number
  book: BookModel = new BookModel()
  issueList: IssueBookList = new IssueBookList()
  minDate: Date;
  maxDate: Date;
  displayedColumns: any

  // list:SelectedBooks[]

  SelectedList: SelectedBooks[] = [];

  RemovedList: SelectedBooks[] = [];

  constructor(private route: ActivatedRoute, public BooksService: BooksService, public Router: Router, public matDialogModule: MatDialog) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);

  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.IssueId = +params['id']
    });
    this.displayedColumns = ['BookId', 'Book Name', 'Book Category', 'Book Publisher', 'Book Quantity'];
  }


  issueAddBtn() {
    const check = this.matDialogModule.open(IssueBookPopupComponent, {})
    check.afterClosed().subscribe(result => {
      try {
        if (result.BookId != null) {
          this.SelectedList.push({
            BookId: result.BookId, BookName: result.BookName, BookCategoryName: result.BookCategoryName,
            BookPublisherName: result.BookPublisherName, BookCount: 1
          })
          console.log(this.SelectedList)
        }

      } catch (error) {

      }
    });
  }

  deleteRow(index: any) {
    // alert(this.rows[index].name)

    this.SelectedList.splice(index, 1);
    // alert(this.book.IssueDate)
  }
  submit() {

    console.log(this.issueList.rows)
  }
  validate(id: any, column: any, event: any) {
    column.checked = !column.checked;
    console.log(this.issueList.rows[id].name + " = " + this.issueList.rows[id].checked); // using this value, you can perform logic with tables array.

  }
  minus(e: any, BookID: any, i: any) {

    var bCount = e.getAttribute('data-bCount');
    if (bCount > 1) {
      this.book.BookCount = this.SelectedList[i].BookCount - 1
      this.SelectedList[i].BookCount = this.SelectedList[i].BookCount - 1
      console.log(this.book.BookCount)
    }

  }
  plus(e: any, BookID: any, i: any) {

    var bCount = e.getAttribute('data-bCount');
    if (bCount >= 1) {
      this.book.BookCount = this.SelectedList[i].BookCount + 1
      this.SelectedList[i].BookCount = this.SelectedList[i].BookCount + 1
      console.log(this.book.BookCount)
    }

  }

}