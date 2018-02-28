import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  GetStudentData():Observable<any>{
    return this.http.get("https://www.jsonblob.com/api/jsonblob/cdc44e82-1c91-11e8-8434-5127fa167598")
    .map(obs => obs.json());
  }
  

    GetWeatherData():Observable<any>{
      return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=f5a1f50cc0ed38719ec7f1b36f63a5e0")
      .map(obs => obs.json());
    

  }
}
