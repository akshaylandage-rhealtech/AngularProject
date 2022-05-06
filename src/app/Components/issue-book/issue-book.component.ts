import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel, IssueBookList, RemovedBooks, SelectedBooks } from '../books/BookModel';
import { BooksService } from '../books/books.service';
import { IssueBookPopupComponent } from '../issue-book-popup/issue-book-popup.component';

import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DatePipe } from '@angular/common';

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
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class IssueBookComponent implements OnInit {
  IssueId: number
  book: BookModel = new BookModel()
  issueList: IssueBookList = new IssueBookList()
  minDate: Date;
  maxDate: Date;
  date:any
  displayedColumns: any
  isShown: boolean
  pipe = new DatePipe('en-US')

  // list:SelectedBooks[]

  SelectedList: SelectedBooks[] = [];

  RemovedList: RemovedBooks[] = [];

  constructor(private route: ActivatedRoute, public BooksService: BooksService, public Router: Router, public matDialogModule: MatDialog) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.book.IssueId = +params['id']
    });

    this.displayedColumns = ['BookId', 'Book Name', 'Book Category', 'Book Publisher', 'Book Quantity'];
    if (this.book.IssueId>0) {
      this.BooksService.IssueLoadBook(this.book.IssueId).subscribe((data: any) => {
      debugger;
      for (let index = 0; index < data.GetIssueBookList.length; index++) {
        this.SelectedList.push({
          BookId: data.GetIssueBookList[index].BookId, BookName: data.GetIssueBookList[index].BookName, BookCategoryName: data.GetIssueBookList[index].BookCategoryName,
          BookPublisherName: data.GetIssueBookList[index].BookPublisherName, BookCount: data.GetIssueBookList[index].BookCount,status:0
        })

      }
      this.book.StudentId=data.StudentId
      this.date=data.IssueDate
      this.book.IssueId=data.IssueId
      console.log(this.SelectedList)
      this.checkTableLength()
    });
    }
  }


  issueAddBtn() {
    const check = this.matDialogModule.open(IssueBookPopupComponent, {})
    debugger;
    check.afterClosed().subscribe(result => {
      try {
        if (result.BookId != null) {
          this.SelectedList.push({
            BookId: result.BookId, BookName: result.BookName, BookCategoryName: result.BookCategoryName,
            BookPublisherName: result.BookPublisherName, BookCount: 1,status:1
          })
          console.log(this.SelectedList)
        }

      } catch (error) {

      }
      this.checkTableLength()
    });
    
  }

  deleteRow(index: any) {
    // alert(this.rows[index].name)
    this.RemovedList.push({BookId:this.SelectedList[index].BookId})
    this.SelectedList.splice(index, 1);

    this.checkTableLength()
    // alert(this.book.IssueDate)
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
  checkTableLength(){
    if (this.SelectedList.length>0) {
      this.isShown = true;
    } else {
      this.isShown = false;
    }
  }
  cancelBtn(){
    this.SelectedList=[]
    this.checkTableLength()
  }
  issueBook(){
    debugger;
    // this.book.SelectedBooks=this.SelectedList
    // this.book.RemovedList=this.RemovedList
    this.book.IssueDate = this.pipe.transform(this.date, 'yyyy/MM/dd HH:mm:ss');
    alert(this.book.IssueDate)
    this.BooksService.IssueBook(this.SelectedList,this.RemovedList,this.book.IssueId,this.book.StudentId,this.book.IssueDate).subscribe((getData: any) => {
      debugger;
      this.book = getData;
    });
  }
}