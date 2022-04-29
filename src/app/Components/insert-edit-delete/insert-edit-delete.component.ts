import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from '../books/BookModel';
import { BooksService } from '../books/books.service';
import { Location } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-insert-edit-delete',
  templateUrl: './insert-edit-delete.component.html',
  styleUrls: ['./insert-edit-delete.component.css']
})
export class InsertEditDeleteComponent implements OnInit {

  BookId: any
  BookName: any
  BookCategoryId: any
  BookPublisherId: any
  BookQuantity: any
  pageType: any
  PageLength: number
  PageNumber: number
  BookDetails: any
  BookCategoryList: any
  BookPublisherList: any

  book: BookModel = new BookModel()

  constructor(private route: ActivatedRoute, public BookService: BooksService, private _location: Location,
    @Inject(MAT_DIALOG_DATA) public InsertEditDeleteData: any) {
    this.BookService.GetCategoryAndPublisherList().subscribe((data: any) => {
      this.BookCategoryList = data.list;
      this.BookPublisherList = data.list1;

      this.book.BookId = +InsertEditDeleteData.BookId
      this.pageType = InsertEditDeleteData.pageType

      this.BookService.LoadBook(this.book.BookId).subscribe((getData: any) => {
        this.book = getData;
      });
    });

  }

  ngOnInit(): void { }

  InsertEditDelete() {

    if (this.pageType === "Edit" || this.pageType === "Insert") {
      this.BookService.InsertEditBook(this.book).subscribe((data: any) => {
        this.book = data;
      });
    }

    if (this.pageType === "Delete") {
      this.BookService.DeleteBook(this.book.BookId).subscribe((data: any) => {
        this.book = data;
      });
    }
  }
}
