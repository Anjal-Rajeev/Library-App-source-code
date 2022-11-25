import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books:any;  // for storing all books

  constructor(private book: BookService, private router:Router) { }

  ngOnInit(): void {


    this.book.getBooks().subscribe(res=>{          // for getting all books
      this.books = res
      
      console.log(this.books)
    })

  }

  editFunction(id:any){
    this.router.navigateByUrl(`edit/${id}`)
    console.log(id)
  }

  deleteFunction(id:any){
    this.book.deleteBook(id).subscribe(res=>{
      console.log(res)
      this.ngOnInit()
    })
  }

  


 

}
