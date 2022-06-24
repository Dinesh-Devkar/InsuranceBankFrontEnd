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


  RegisterCustomer(customer:any){
    return this.http.post(`http://localhost:5137/api/Customer/Register`,customer)
  }
  UpdateCustomer(customerId:any,customer:any){
      return this.http.put(`http://localhost:5137/api/Customer/${customerId}/UpdateCustomer`,customer);
  }
  PostQuery(query:any){
    return this.http.post(`http://localhost:5137/api/Customer/AddQuery`,query)
  }
  GetQueriesByCustomerId(){
    return this.http.get(`http://localhost:5137/api/Customer/${sessionStorage.getItem('loggedInUser')}/GetAllQueriesByCustomerId`);
  }

  AddDocument(document:any){
    return this.http.post(`http://localhost:5137/api/Customer/${sessionStorage.getItem('loggedInUser')}/AddDocument`,document)
  }

  GetDocuments(customerId:any){
    return this.http.get(`http://localhost:5137/api/Customer/${customerId}/GetDocuments`)
  }
}
