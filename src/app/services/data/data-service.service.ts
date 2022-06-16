import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }

  GetAllStates(){
    return this.http.get(`http://localhost:5137/api/State/GetAllStates`)
  }
  AddState(state:any){
    return this.http.post(`http://localhost:5137/api/State/AddState`,state)
  }

  AddCity(city:any){
    return this.http.post(`http://localhost:5137/api/City/AddCity`,city)
  }
  GetAllCities(){
    return this.http.get(`http://localhost:5137/api/City/GetAllCities`)
  }

  AddInsuranceType(insuranceType:any){
    return this.http.post(`http://localhost:5137/api/InsuranceType/AddInsuranceType`,insuranceType)
  }

  GetAllInsuranceTypes(){
    return this.http.get(`http://localhost:5137/api/InsuranceType/GetAllInsuranceTypes`);
  }

  
}
