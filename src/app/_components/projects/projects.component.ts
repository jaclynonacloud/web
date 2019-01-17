import { Component, OnInit, ViewChild, ElementRef, Input, ComponentRef } from '@angular/core';
import { JcloudDataService } from '../../_services/jcloud-data.service';
import { Project } from '../../_models/projects.model';
import { SearchData } from '../../_models/search.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public static LOAD_INCREMENT:number = 2;
  public static SEARCH_LOAD_INCREMENT:number = 8;


  public showcases:Project[] = [];
  public _leftovers:Project[] = []; //all leftover projects

  public projects:Project[] = []; //the leftover projects that were loaded

  public isLoadingMore:boolean = false;
  public hasLoadedAll:boolean = false;
  public isSearching:boolean = false;
  

  private _loadedIndex:number = 0;

  constructor(public jcloudData:JcloudDataService) { }

  /*----------------------- LIFECYCLE HOOKS --------------------*/
  ngOnInit() {
    //wait for project data to load
    this.jcloudData.wait()
    .then(() => {
      
      this.sortProjects();


      //listen for search data
      this.jcloudData.onSearchDataChange.subscribe((searchData:SearchData) => {
        //organize data by search data
        console.log("RECEIVED", searchData);
        if(searchData.text != "" || searchData.type != "") {
          this.isSearching = true;
          this.sortProjects(searchData);
          this.isLoadingMore = true;
          //get the projects
          this._loadedIndex = Math.min(ProjectsComponent.SEARCH_LOAD_INCREMENT, this._leftovers.length); //set the initial load index
          this.hasLoadedAll = this._loadedIndex == this._leftovers.length;
          this.projects = this._leftovers.filter((p, i) => i < this._loadedIndex);
        }
        else {
          this.isSearching = false;
          this.isLoadingMore = false;
          this.hasLoadedAll = false;
          this._loadedIndex = 0;
          this.sortProjects();
        }
        
      });

    });

  }
  /*----------------------- METHODS ----------------------------*/
  public loadMore() {

    this.isLoadingMore = true;
    this._loadedIndex += ProjectsComponent.LOAD_INCREMENT;
    if(this._loadedIndex > this._leftovers.length) this._loadedIndex = this._leftovers.length;

    this.projects = this._leftovers.filter((p, i) => i < this._loadedIndex);

    if(this._loadedIndex >= this._leftovers.length) {
      this.hasLoadedAll = true;
      this.isLoadingMore = false;
    }

  }


  public sortProjects(searchData:SearchData = null) {

    this.showcases = this.jcloudData.Projects
        .filter(p => this.jcloudData.ProjectRoot.showcase.includes(p.name))
        .sort((a, b) => this.jcloudData.ProjectRoot.showcase.indexOf(a.name) > this.jcloudData.ProjectRoot.showcase.indexOf(b.name) ? 1 : -1);
        
    this._leftovers = this.jcloudData.Projects
      .filter(p => !this.jcloudData.ProjectRoot.showcase.includes(p.name))
      .sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1);

    if(this.isSearching) {
      this._leftovers = this.jcloudData.Projects
        //search data if existing
        .filter(p => {
          if(searchData != null) {
            this.hasLoadedAll = false;
            this._loadedIndex = 0;
            return this._testProjectAgainstSearchData(p, searchData);
          }
          return true;
        })
        .sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1);
    }

    //test if we have leftovers
    if(this._leftovers.length <= 0) this.hasLoadedAll = true;

  }

  private _testProjectAgainstSearchData(project:Project, searchData:SearchData) {
    if(searchData.text == "" && searchData.type == "") return true;

    //test text
    if(searchData.text != "") {
      if(project.name.toLowerCase().indexOf(searchData.text.toLowerCase()) != -1) return true; //test name of project
      if(project.description.toLowerCase().indexOf(searchData.text.toLowerCase()) != -1) return true; //test description of project
    }

    //test categories
    for(let i = 0; i < project.categories.length; i++) {
      if(project.categories[i] == searchData.type) return true;
    }
    
    return false;
  }
  /*----------------------- EVENTS -----------------------------*/
  /*----------------------- OVERRIDES --------------------------*/
  /*----------------------- GETS & SETS ------------------------*/

}
