import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projects, Project } from '../models/projects.model';

@Injectable()
export class JcloudDataService {
  private static DATA_URL:string = "/assets/data/projects.json";

  private _project:Projects;
  private _projects:Project[];
  private _showcases:Project[];
  private _isLoaded:boolean;

  private _activeProject:Project;

  constructor(private _http:HttpClient) { }

  /*----------------------- LIFECYCLE HOOKS --------------------*/
  /*----------------------- METHODS ----------------------------*/
  public load():void {
    this._isLoaded = false;

    this._http.get<Projects>(JcloudDataService.DATA_URL).subscribe(
      data => {
        console.log("DATA!");
        console.log(data);
        this._project = data;
        this._isLoaded = true;

        //get exposed projects
        this._projects = this._project.projects.filter(proj => (this._project.showcase.indexOf(proj.name) == -1));
        //get showcased projects
        this._showcases = this._project.projects.filter(proj => !this._projects.includes(proj));
      },
      error => {
        console.log("Could not load!\n" + error);
      }
    );
  }
  /*----------------------- EVENTS -----------------------------*/
  /*----------------------- OVERRIDES --------------------------*/
  /*----------------------- GETS & SETS ------------------------*/
  public get Projects():Project[] { return this._projects; }
  public get Showcases():Project[] { return this._showcases; }
  public get IsLoaded():boolean { return this._isLoaded; }
  public get ActiveProject():Project { return this._activeProject; }
}
