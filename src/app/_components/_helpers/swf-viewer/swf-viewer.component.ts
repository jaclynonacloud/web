import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-swf-viewer',
  templateUrl: './swf-viewer.component.html',
  styleUrls: ['./swf-viewer.component.scss']
})
export class SwfViewerComponent implements OnInit {

  public swfLocation:string = "";

  constructor(public sanitizer: DomSanitizer, private _route:ActivatedRoute) { }  
  
  /*--------------------------------- LIFECYCLE HOOKS ----------------------*/
  ngOnInit() {
    //get swf location
    this._route.params.subscribe(
      data => {
        this.swfLocation = data.file;
        console.log("FILE NAME: " + this.swfLocation);
      },
      error => {

      }
    )

  }
  /*--------------------------------- METHODS ------------------------------*/
  /*--------------------------------- ABSTRACTS ----------------------------*/
  /*--------------------------------- EVENTS -------------------------------*/  
  /*--------------------------------- OVERRIDES ----------------------------*/
  /*--------------------------------- GETS & SETS --------------------------*/
  /*--------------------------------- METHODS ------------------------------*/

}
