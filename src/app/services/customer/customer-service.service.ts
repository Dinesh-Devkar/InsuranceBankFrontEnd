import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http:HttpClient) { }

  GetCustomerDetails(){
    return this.http.get(`http://localhost:5137/api/Customer/${sessionStorage.getItem('loggedInUser')}/GetCustomerById`)
  }

  PurchaseInsurancePlan(insurancePlan:any){
    return this.http.post(`http://localhost:5137/api/Customer/AddInsuranceAccount`,insurancePlan)
  }

  GetCustomerNameAgentCode(){
    return this.http.get(`http://localhost:5137/api/Customer/${sessionStorage.getItem('loggedInUser')}/GetCustomerNameAndAgentCode`)
  }


  UpdateCustomer(customer:any){
      return this.http.post(`http://localhost:5137/api/Customer/${sessionStorage.getItem('loggedInUser')}/UpdateCustomer`,customer);
  }
}
