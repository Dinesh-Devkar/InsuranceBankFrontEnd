import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  //selectedInsuranceType:string=''
  private selectedInsuranceType = new BehaviorSubject('');
 public currentInsuranceType = this.selectedInsuranceType.asObservable();

  constructor(private http:HttpClient) { }
  // SetSelectedInsuranceType(insuranceType:string):void{
  //   //this.selectedInsuranceType=insuranceType;
  // }
  SetSelectedInsuranceType(insuranceType:string) {
    this.selectedInsuranceType.next(insuranceType)
    }
  GetSelectedInsuranceType(){
    return this.selectedInsuranceType;
  }


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

  AddInsuranceScheme(insuranceSheme:any){
    return this.http.post(`http://localhost:5137/api/InsuranceScheme/AddInsuranceScheme`,insuranceSheme)
  }

  GetAllInsuranceSchemes(){
    return this.http.get(`http://localhost:5137/api/InsuranceScheme/GetAllInsuranceSchemes`);
  }

  AddInsurancePlan(insurancePlan:any){
    return this.http.post(`http://localhost:5137/api/InsurancePlan/AddInsurancePlan`,insurancePlan)
  }
  GetAllInsuranceSchemesByInsuranceType(insuranceType:any){
    return this.http.get(`http://localhost:5137/api/InsuranceScheme/${insuranceType}/GetInsuranceSchemesByInsuranceType`)
  }
  GetAllInsurancePlans(){
    return this.http.get(`http://localhost:5137/api/InsurancePlan/GetAllInsurancePlans`)
  }

  
}
