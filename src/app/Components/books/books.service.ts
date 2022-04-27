import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from './BookModel';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class BooksService {
    baseUrl: string = "https://localhost:44320/api/books/";



    constructor(private http: HttpClient)
    { }

    GetCategoryAndPublisherList() {
        debugger;
        return this.http.get(this.baseUrl + 'BooksGetList');
    }

    // bookdetails(id: number, name :string="" ) {
    //     debugger;
    //     return this.http.get(this.baseUrl + 'BooksGetList?bookid=' + id +"&name=" +name);
    // }

    BookGetList(BookModel: any) {
        debugger;
        return this.http.post(this.baseUrl + 'BooksGetList1', BookModel);
        
    }
}