import { Component, OnInit } from '@angular/core';
import { JcloudDataService } from '../../_services/jcloud-data.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  constructor(public jcloudData:JcloudDataService) { }

  ngOnInit() {
  }

}
