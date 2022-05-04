export class BookModel{
    BookId:number
    BookName:string
    BookCategory:string
    BookPublisher: string
    BookPublisherId:number
    BookCategoryId:number
    BookQuantity:number
    PageLength:number=10
    PageNumber:number=1
    TotalPages:number
    IsActive:boolean=true
    TotalCount:number
    multiCategoryStr:string=""
    multiPublisherStr:string=""
    StudentId:number
    BookCount:number=1
    IssueDate:Date
}

export class IssueBookList{
    rows:any=[]
}
export class SelectedBooks {
    BookId:number
    BookName:string
    BookCategoryName:string
    BookPublisherName: string
    BookCount:number
}