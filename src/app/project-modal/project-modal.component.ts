import { Component, OnInit } from '@angular/core';
import { JcloudDataService } from '../services/jcloud-data.service';

@Component({
  selector: 'project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {

  constructor(public jcloudData:JcloudDataService) { }

  ngOnInit() {
  }

}
