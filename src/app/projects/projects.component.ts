import { Component, OnInit } from '@angular/core';
import { JcloudDataService } from '../services/jcloud-data.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(public jcloudData:JcloudDataService) { }

  /*----------------------- LIFECYCLE HOOKS --------------------*/
  ngOnInit() {
  }
  /*----------------------- METHODS ----------------------------*/
  /*----------------------- EVENTS -----------------------------*/
  /*----------------------- OVERRIDES --------------------------*/
  /*----------------------- GETS & SETS ------------------------*/

}
