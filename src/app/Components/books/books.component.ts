import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service'

import { BookModel } from './BookModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { InsertEditDeleteComponent } from '../insert-edit-delete/insert-edit-delete.component';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'books-list',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']

})
export class BooksComponent implements OnInit {

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
  private modalService: NgbModal
  displayedColumns: string[] = ['BookId', 'BookName', 'BookCategoryName', 'BookPublisherName', 'BookQuantity', 'actions'];
  SelectedCategoryList = new FormControl();
  SelectedPublisherList = new FormControl();
  
  constructor(public BooksService: BooksService, public Router: Router, public matDialogModule: MatDialog) {

  }

  ngOnInit(): void {

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
      debugger;
      this.BookList = data.list
      this.book.TotalPages = data.booksModel.TotalPages
      this.book.TotalCount = data.booksModel.TotalCount
      // alert(this.book.TotalCount)
    });
  }
  insertBtn() {
    // this.Router.navigate(['/insert'],{queryParams:{BookId:0,pageType:"Insert"}})
    const check = this.matDialogModule.open(InsertEditDeleteComponent, {
      data: { BookId: 0, pageType: "Insert" }
    })
    check.afterClosed().subscribe(result => {
      this.setData()
    });
  }
  editBtn(BookId: any) {
    const check = this.matDialogModule.open(InsertEditDeleteComponent, {
      data: { BookId: BookId, pageType: "Edit" }
    })
    check.afterClosed().subscribe(result => {
      this.setData()
    });
    // this.Router.navigate(['/insert'],{queryParams:{BookId:BookId,pageType:"Edit"}})
  }
  deleteBtn(BookId: any) {
    const check = this.matDialogModule.open(InsertEditDeleteComponent, {
      data: { BookId: BookId, pageType: "Delete" }
    })
    check.afterClosed().subscribe(result => {
      this.setData()
    });
    // this.Router.navigate(['/insert'],{queryParams:{BookId:BookId,pageType:"Delete"}})
  }

}

