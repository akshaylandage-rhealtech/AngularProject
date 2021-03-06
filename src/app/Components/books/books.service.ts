import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from './BookModel';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class BooksService {
    baseUrl: string = "https://localhost:44320/api/books/";

    constructor(private http: HttpClient) { }

    GetCategoryAndPublisherList() {

        return this.http.get(this.baseUrl + 'BooksGetList');
    }

    BookGetList(BookModel: any) {
        debugger;
        return this.http.post(this.baseUrl + 'BooksGetList1', BookModel);
    }

    LoadBook(BookId: any) {

        return this.http.get(this.baseUrl + 'LoadBookDetails?ID=' + BookId);
    }

    InsertEditBook(bookModel: any) {

        return this.http.post(this.baseUrl + 'InsertEdit', bookModel);
    }

    DeleteBook(BookId: any) {
        return this.http.get(this.baseUrl + 'DeleteBook?ID=' + BookId);
    }

    IssueBook(SelectedBookList: any,RemovedList:any,IssueId:any,StudentId:any,IssueDate:any) {
        debugger;
       let  model ={
            IssueId:IssueId,
            StudentId:StudentId,
            IssueDate:IssueDate,
            SelectedBookList : SelectedBookList,
            IssueBookRemoveList:RemovedList
        }
        return this.http.post(this.baseUrl + 'IssueBookList', model);
    }
    IssueLoadBook(IssueId: any) {

        return this.http.get(this.baseUrl + 'IssueBookStudent?ID=' + IssueId);
    }
}

