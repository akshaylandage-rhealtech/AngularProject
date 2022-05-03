import { Component, OnInit, Output,EventEmitter, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookModel, IssueBookList } from '../books/BookModel';
import { BooksService } from '../books/books.service';
import { InsertEditDeleteComponent } from '../insert-edit-delete/insert-edit-delete.component';

@Component({
  selector: 'app-issue-book-popup',
  templateUrl: './issue-book-popup.component.html',
  styleUrls: ['./issue-book-popup.component.css']
})
export class IssueBookPopupComponent implements OnInit {
  title: string = "Angular session"
  BookName: string
  BookId: number
  BookCategoryId: number
  BookPublisherId: number
  BookQuantity: number
  PageLength: number
  PageNumber: number
  BookList: any
  BookCategoryList: any
  BookPublisherList: any
  selectedLevel: number
  book: BookModel = new BookModel()
  issueList: IssueBookList = new IssueBookList()
  private modalService: NgbModal
  SelectedCategoryList = new FormControl();
  SelectedPublisherList = new FormControl();
  displayedColumns: string[] = ['BookId', 'BookName', 'BookCategoryName', 'BookPublisherName', 'BookQuantity', 'actions'];

  @Output() bookid:EventEmitter<number>=new EventEmitter()

  // constructor(public BooksService: BooksService, public Router: Router, public matDialogModule: MatDialog) {

  // }
  constructor(public BooksService: BooksService,@Inject(MAT_DIALOG_DATA) public data: string,
  private dialogRef: MatDialogRef<IssueBookPopupComponent>) {

  }

  ngOnInit(): void {
    this.dialogRef.disableClose=true
    this.BooksService.GetCategoryAndPublisherList().subscribe((data: any) => {
      this.BookCategoryList = data.list;
      this.BookPublisherList = data.list1;
    });
    this.setData()



  }
  setData() {
    if (this.SelectedCategoryList.value != null) {
      this.book.multiCategoryStr = this.SelectedCategoryList.value.join(",");
      
    }

    if (this.SelectedPublisherList.value != null) {
      this.book.multiPublisherStr = this.SelectedPublisherList.value.join(",");
    }

    this.BooksService.BookGetList(this.book).subscribe((data: any) => {
      this.BookList = data.list
      this.book.TotalPages = data.booksModel.TotalPages
      this.book.TotalCount = data.booksModel.TotalCount
    });
  }

  selectBookBtn(element: any) {
    this.dialogRef.close(element)
  }
}

