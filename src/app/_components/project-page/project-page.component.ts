import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { JcloudDataService } from '../../_services/jcloud-data.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../_models/projects.model';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectPageComponent implements OnInit {

  public isLightboxOpen:boolean = false;
  public project:Project = null;
  public screenshots:string[];

  private _objKeys = Object.keys;
  private _isArray = Array.isArray;


  //gallery
  private lightboxIndex:number = 0;

  constructor(public jcloudData:JcloudDataService, private _route:ActivatedRoute) { }

  ngOnInit() {

    //get project details
    this._route.params.subscribe(
      data => {
        const name = data.name;

        //wait for project data to load
        this.jcloudData.wait()
        .then(() => {
          this.project = this.jcloudData.Projects.filter(p => p.name == name)[0];
        });
      },
      error => {

      }
    )

    
    
  }


  /*--------------------------------- LIFECYCLE HOOKS ----------------------*/
  /*--------------------------------- METHODS ------------------------------*/
  public showLightbox() {
    this.isLightboxOpen = true;
  }
  public hideLightbox() {
    this.isLightboxOpen = false;
  }
  public getLightboxIndex(src:string) {
    const index = this.project.screenshots.indexOf(src);
    return index;
  }
  /*--------------------------------- ABSTRACTS ----------------------------*/
  /*--------------------------------- EVENTS -------------------------------*/
  public showImage(src:string) {
    //find the index
    this.lightboxIndex = this.getLightboxIndex(src);
    if(this.lightboxIndex == -1) this.lightboxIndex = 0;

    this.lightboxIndex = this.lightboxIndex;

    this.showLightbox();
  }


  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if(this.isLightboxOpen && this.project.screenshots) {
      if(event.key == "ArrowLeft") 
      {
        this.lightboxIndex = (this.lightboxIndex - 1 >= 0) ? this.lightboxIndex - 1 : this.project.screenshots.length - 1;
        this.showImage(this.project.screenshots[this.lightboxIndex]);
      }
      if(event.key == "ArrowRight") 
      {
        this.lightboxIndex = (this.lightboxIndex + 1 <= this.project.screenshots.length - 1) ? this.lightboxIndex + 1 : 0;
        this.showImage(this.project.screenshots[this.lightboxIndex]);
      }

      
      // console.log("INDEX: " + this._index);

      // //this.key = event.key;
      // console.log(event.key);
    }

    
  }
  
  /*--------------------------------- OVERRIDES ----------------------------*/
  /*--------------------------------- GETS & SETS --------------------------*/
  /*--------------------------------- METHODS ------------------------------*/

}
