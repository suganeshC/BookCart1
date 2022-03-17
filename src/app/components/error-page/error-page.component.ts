import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  public urlName: string = "";

  constructor(private _router:Router) { }

  ngOnInit(): void {
    this.urlName = this._router.url
        
  }
 
}
