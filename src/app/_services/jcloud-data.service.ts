import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projects, Project } from '../_models/projects.model';

@Injectable()
export class JcloudDataService {
  private static DATA_URL:string = "/assets/data/projects.json";

  private _project:Projects;
  private _projects:Project[];
  private _showcases:Project[];
  private _isLoaded:boolean;

  private _activeProject:Project;

  private _onLoaded:EventEmitter<void> = new EventEmitter();

  constructor(private _http:HttpClient) { }

  /*----------------------- LIFECYCLE HOOKS --------------------*/
  /*----------------------- METHODS ----------------------------*/
  public load():void {
    this._isLoaded = false;
    console.log("LOADING");

    this._http.get<Projects>(JcloudDataService.DATA_URL).subscribe(
      data => {
        console.log("DATA!");
        console.log(data);
        this._project = data;
        this._isLoaded = true;

        //get exposed projects
        // this._projects = this._project.projects.filter(proj => (this._project.showcase.indexOf(proj.name) == -1));
        this._projects = data.projects;
        //get showcased projects
        this._showcases = data.projects;
        // this._showcases = this._project.projects.filter(proj => !this._projects.includes(proj));

        this._onLoaded.emit();
      },
      error => {
        console.log("Could not load!\n" + error);
      }
    );
  }

  public wait():Promise<void> {
    if(this._projects != null) return Promise.resolve();
    return new Promise(async(res, rej) => {
      this._onLoaded.subscribe(() => res(), error => rej(error));
    });
  }
  /*----------------------- EVENTS -----------------------------*/
  /*----------------------- OVERRIDES --------------------------*/
  /*----------------------- GETS & SETS ------------------------*/
  public get Projects():Project[] { return this._projects; }
  public get Showcases():Project[] { return this._showcases; }
  public get IsLoaded():boolean { return this._isLoaded; }
  public get ActiveProject():Project { return this._activeProject; }
}