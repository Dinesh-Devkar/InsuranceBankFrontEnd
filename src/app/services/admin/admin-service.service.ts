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
  GetInsuranceAccountDetailsByAccountId() {

    return this.http.get(`http://localhost:5137/api/InsuranceAccount/${sessionStorage.getItem('insuranceAccountId')}/GetInsuranceAccountByAccountId`)

  }

  GetCustomerDetails(customerId:any){
    return this.http.get(`http://localhost:5137/api/Customer/${customerId}/GetCustomerById`)
  }
  UpdateEmployee(employeeId:any,employee:any){
    return this.http.put(`http://localhost:5137/api/Employee/${employeeId}/UpdateEmployee`,employee)
  }

}
