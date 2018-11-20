import { Component, OnInit } from '@angular/core';
import { JcloudDataService } from './_services/jcloud-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public jcloudData:JcloudDataService) { }

  ngOnInit() {
    this.jcloudData.load();
  }

}
