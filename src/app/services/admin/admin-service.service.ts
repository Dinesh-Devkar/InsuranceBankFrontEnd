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

  GetAllInsuranceTypesForAdmin(userId:any){
    return this.http.get(`http://localhost:5137/api/InsuranceType/${userId}/GetAllInsuranceTypesForAdmin`);

  }
  GetCustomerDetails(customerId:any){
    return this.http.get(`http://localhost:5137/api/Customer/${customerId}/GetCustomerById`)
  }
  UpdateEmployee(employeeId:any,employee:any){
    return this.http.put(`http://localhost:5137/api/Employee/${employeeId}/UpdateEmployee`,employee)
  }
  GetAllRequestedPolicyClaims(){
    return this.http.get(`http://localhost:5137/api/InsuranceAccount/GetAllRequestedPolicyClaims`)
  }

  ApprovePolicyClaim(insuranceAccount:any){
    return this.http.put(`http://localhost:5137/api/InsuranceAccount/ClaimRequestApprove`,insuranceAccount)
  }

  GetAllClaimedPolicies(){
    return this.http.get(`http://localhost:5137/api/InsuranceAccount/GetAllClaimedPolicies`)
  }
}
