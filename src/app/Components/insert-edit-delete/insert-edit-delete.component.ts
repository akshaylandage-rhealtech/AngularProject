import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books/books.service';

@Component({
  selector: 'app-insert-edit-delete',
  templateUrl: './insert-edit-delete.component.html',
  styleUrls: ['./insert-edit-delete.component.css']
})
export class InsertEditDeleteComponent implements OnInit {

  elementId:any
  constructor(private route: ActivatedRoute,public BookService:BooksService) {
    debugger;
    this.abcd();
   }

  ngOnInit(): void {
    debugger;
    this.elementId=this.route.snapshot.paramMap.get('elementId')
    
  }
  

  abcd(){
    debugger;
    this.BookService.LoadData(this.elementId).subscribe((data:any)=>{
      debugger;
      alert(data.BookName)
    })
  }

}
