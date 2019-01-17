import { Component, OnInit, EventEmitter } from '@angular/core';
import { SearchType, SearchData } from '../../_models/search.model';
import { JcloudDataService } from '../../_services/jcloud-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  
  private _searchData:SearchData;

  constructor(private jCloudData:JcloudDataService) { }

  /*----------------------- LIFECYCLE HOOKS --------------------*/
  ngOnInit() {

    this._searchData = {
      text: "",
      type: "",
    };

  }
  /*----------------------- METHODS ----------------------------*/
  /*----------------------- EVENTS -----------------------------*/
  public onChangeText(e:Event) {
    const text:string = (e.target as HTMLInputElement).value;
    this._searchData.text = text;

    this.jCloudData.emitSearchData(this._searchData);
  }

  public onChangeType(e:Event) {
    const type:string = (e.target as HTMLInputElement).value;
    this._searchData.type = type;

    this.jCloudData.emitSearchData(this._searchData);
  }
  /*----------------------- OVERRIDES --------------------------*/
  /*----------------------- GETS & SETS ------------------------*/
  public get SearchOptions() {
    return SearchType.OPTION;
  }
  public get SearchOptionKeys() {
    return Object.keys(SearchType.OPTION);
  }

}
