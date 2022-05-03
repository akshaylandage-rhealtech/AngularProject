import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel, IssueBookList, SelectedBooks } from '../books/BookModel';
import { BooksService } from '../books/books.service';
import { InsertEditDeleteComponent } from '../insert-edit-delete/insert-edit-delete.component';
import { IssueBookPopupComponent } from '../issue-book-popup/issue-book-popup.component';



@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {
  issueId: number
  book: BookModel = new BookModel()
  issueList: IssueBookList = new IssueBookList()
  minDate: Date;
  maxDate: Date;
  displayedColumns: any

  // list:SelectedBooks[]

  list: SelectedBooks[] = [];

  constructor(private route: ActivatedRoute, public BooksService: BooksService, public Router: Router, public matDialogModule: MatDialog) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);

  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.issueId = +params['id']
    });
    this.displayedColumns = ['BookId', 'Book Name', 'Book Category', 'Book Publisher', 'Book Quantity'];
  }
  issueAddBtn() {
    const check = this.matDialogModule.open(IssueBookPopupComponent, {})
    check.afterClosed().subscribe(result => {
      try {

        this.list.push({
          BookId: result.BookId, BookName: result.BookName, BookCategoryName: result.BookCategoryName,
          BookPublisherName: result.BookPublisherName, BookCount: 1
        })
        console.log(this.list)
      } catch (error) {

      }
    });
  }

  deleteRow(index: any) {
    // alert(this.rows[index].name)
    this.list.splice(index, 1);
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
    this.book.BookCount = this.list[i].BookCount - 1
    this.list[i].BookCount = this.list[i].BookCount - 1
  }
  plus(e: any, BookID: any, i: any) {
    
    var bCount = e.getAttribute('data-bCount');
    this.book.BookCount = this.list[i].BookCount + 1
    this.list[i].BookCount = this.list[i].BookCount + 1
  }

}