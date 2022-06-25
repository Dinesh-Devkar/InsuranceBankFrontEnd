import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }
  GetAllEmployees(){
    return this.http.get(`http://localhost:5137/api/Employee/GetAllEmployees`)
  }
  GetEmployeeDetails(employeeId:any){
    return this.http.get(`http://localhost:5137/api/Employee/${employeeId}/GetEmployeeById`)
  }
  UpdateEmployee(employee:any){
    return this.http.put(`http://localhost:5137/api/Employee/${employee.id}/UpdateEmployee`,employee)
  }
  UpdateCustomer(customerId:any,customer:any){
    return this.http.put(`http://localhost:5137/api/Employee/${customerId}/UpdateCustomer`,customer);
}
}
