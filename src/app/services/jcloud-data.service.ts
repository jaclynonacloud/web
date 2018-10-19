import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projects } from '../models/projects.model';

@Injectable()
export class JcloudDataService {
  private static DATA_URL:string = "/assets/data/projects.json";

  private _projects:Projects;
  private _isLoaded:boolean;

  constructor(private _http:HttpClient) { }

  /*----------------------- LIFECYCLE HOOKS --------------------*/
  /*----------------------- METHODS ----------------------------*/
  public load():void {
    this._isLoaded = false;

    this._http.get<Projects>(JcloudDataService.DATA_URL).subscribe(
      data => {
        console.log("DATA!");
        console.log(data);
        this._projects = data;
        this._isLoaded = true;
      },
      error => {
        console.log("Could not load!\n" + error);
      }
    );
  }
  /*----------------------- EVENTS -----------------------------*/
  /*----------------------- OVERRIDES --------------------------*/
  /*----------------------- GETS & SETS ------------------------*/
  public get Projects():Projects { return this._projects; }
  public get IsLoaded():boolean { return this._isLoaded; }
}
