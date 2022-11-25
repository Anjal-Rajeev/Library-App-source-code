import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  bookData:any = {
    title: '',
    author: '',
    summary: ''
  }

  constructor(private bookService: BookService, private router:Router, private activeId:ActivatedRoute) { }

  ngOnInit(): void {

    let id = this.activeId.snapshot.paramMap.get('id')
    // console.log('id is here')
    this.bookService.getSingleBook(id).subscribe(res =>{
      // console.log(res)
      this.bookData = res
      console.log(this.bookData)
          
    })
  }

  updateBook(id:any, data:any){
      // console.log("id",id)
      // console.log("datas", data)
      this.bookService.editBook(id, data).subscribe(res=>{
        console.log("response",res)
        this.router.navigateByUrl('home');
      })
  }

}
