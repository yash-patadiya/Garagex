import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private __http: HttpClient) { }
  apiUrl = 'http://localhost:3000/insertData';
  api = 'http://localhost:3000/Customer';

  createNewUser(data: any): Observable<any> {
    debugger;
    return this.__http.post(`${this.apiUrl}`, data);
  }
  createGarage(data:any):Observable<any>{
    return this.__http.post(`${this.api}`,data)
  }

}
