import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service'
import { NormalData, Todo } from 'src/app/Todo';
import { BookModel } from './BookModel';

@Component({
  selector: 'books-list',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']

})
export class BooksComponent implements OnInit {

  title: string = "Angular session"
  todos:Todo[] = Array()
  BookName:string
  BookId:number
  BookCategoryId:number
  BookPublisherId:number
  BookQuantity:number
  PageLength:number
  PageNumber: number
  BookList:any
  BookCategoryList:any
  BookPublisherList:any
  selectedLevel:number
  book:BookModel=new BookModel()
  displayedColumns: string[] = ['BookId', 'BookName', 'BookCategoryName', 'BookPublisherName','BookQuantity'];
  
  constructor(public BooksService: BooksService) {

  }

  ngOnInit(): void {
 
    this.BooksService.GetCategoryAndPublisherList().subscribe((data: any) => {
      this.BookCategoryList = data.list;
      this.BookPublisherList=data.list1;
    });
    this.setData()

    
    
  }
  setData() {

      this.BooksService.BookGetList(this.book).subscribe((data: any) => {
        debugger;
        this.BookList = data;
      });
  }

}

