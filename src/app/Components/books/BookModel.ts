export class BookModel{
    BookId:number
    BookName:string
    BookCategory:string
    BookPublisher: boolean
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
}
