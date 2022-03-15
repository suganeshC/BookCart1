import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public bookcart: any;
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.service.getBookList()
    .subscribe(res=>{
      this.bookcart = res;
    })
  }

}
