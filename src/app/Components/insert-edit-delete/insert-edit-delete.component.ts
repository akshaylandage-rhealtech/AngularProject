import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from '../books/BookModel';
import { BooksService } from '../books/books.service';

@Component({
  selector: 'app-insert-edit-delete',
  templateUrl: './insert-edit-delete.component.html',
  styleUrls: ['./insert-edit-delete.component.css']
})
export class InsertEditDeleteComponent implements OnInit {

  BookId:any
  BookName:any
  BookCategoryId:any
  BookPublisherId:any
  BookQuantity:any
  pageType:any
  PageLength:number
  PageNumber: number
  BookList:any
  BookCategoryList:any
  BookPublisherList:any
  selectedLevel:number
  book:BookModel=new BookModel()
  constructor(private route: ActivatedRoute,public BookService:BooksService) {
   }

  ngOnInit(): void {
    // debugger;
    // this.elementId=this.route.snapshot.paramMap.get('elementId')
    this.route.queryParams.subscribe((params:any)=>{
      console.log(params)
      this.book.BookId=params.BookId
      this.book.BookName=params.BookName
      this.book.BookCategoryId=params.BookCategoryId
      this.book.BookPublisherId=params.BookPublisherId
      this.book.BookQuantity=params.BookQuantity
      this.BookCategoryList=params.BookCategoryList
      
      this.pageType=params.pageType
    })

  }
  
}
