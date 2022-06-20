import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }
  GetAllEmployees(){
    return this.http.get(`http://localhost:5137/api/v1/Admin/GetAllEmployees`)
  }
}
