import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from '../books/BookModel';
import { BooksService } from '../books/books.service';
import {Location} from '@angular/common';
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
  // BookCategoryList = [{BookCategory:'Select Category',BookCategoryId:0,isSelected:false}]
  // BookPublisherList= [{BookPublisher:'Select Publisher',BookPublisherId:0,isSelected:false}]
  BookCategoryList: any
  BookPublisherList: any
  book: BookModel = new BookModel()



  constructor(private route: ActivatedRoute, public BookService: BooksService,private _location: Location) {
    this.BookService.GetCategoryAndPublisherList().subscribe((data: any) => {
      this.BookCategoryList = data.list;
      this.BookPublisherList = data.list1;
    });

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      // this.book=params
      this.book.BookId = +params.BookId
      // this.book.BookName = params.BookName
      // // this.book.BookCategoryId = params.BookCategoryId
      // this.book.BookPublisherId = params.BookPublisherId
      // this.book.BookQuantity = params.BookQuantity
      this.pageType = params.pageType;
      this.BookService.LoadBook(this.book.BookId).subscribe((data: any) => {
        this.book = data;

      });
    })
    

    // this.BookService.GetCategoryAndPublisherList().subscribe((data: any) => {
    //   this.BookCategoryList = data.list;
    //   this.BookPublisherList=data.list1;
    // alert(this.book.BookCategoryId)
    // for (let index = 0; index < data.list.length; index++) {
    //   if (data.list[index].BookCategoryId==this.book.BookCategoryId) {
    //     this.BookCategoryList.push({ BookCategory: data.list[index].BookCategory,BookCategoryId: data.list[index].BookCategoryId, isSelected:true })
    //   } else {
    //     this.BookCategoryList.push({ BookCategory: data.list[index].BookCategory,BookCategoryId: data.list[index].BookCategoryId, isSelected:false })
    //   }
    // }
    // for (let index = 0; index < data.list1.length; index++) {
    //   if (data.list[index].BookPublisherId==this.book.BookPublisherId) {
    //     this.BookPublisherList.push({ BookPublisher: data.list1[index].BookPublisher,BookPublisherId: data.list1[index].BookPublisherId, isSelected:true })
    //   } else {
    //     this.BookPublisherList.push({ BookPublisher: data.list1[index].BookPublisher,BookPublisherId: data.list1[index].BookPublisherId, isSelected:false })
    //   }
    // }


    // });
    // debugger;
    // this.elementId=this.route.snapshot.paramMap.get('elementId')
  }
  InsertEditDelete(){
    if (this.pageType==="Edit" || this.pageType==="Insert") {
  
      this.BookService.InsertEditBook(this.book).subscribe((data: any) => {
        this.book = data;
        this.backClicked()
      });
    }
    if (this.pageType==="Delete") {
     
      this.BookService.DeleteBook(this.book.BookId).subscribe((data: any) => {
        this.book = data;
        this.backClicked()
      });
    }
    
  }
  backClicked() {
    this._location.back();
  }

}
