import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentServiceService {

  constructor(private http:HttpClient) { }
  GetAllAgents(){
    return this.http.get(`http://localhost:5137/api/Agent/GetAllAgents`)
  }
  AddAgent(agent:any){
    return this.http.post(`http://localhost:5137/api/Agent/Register`,agent)
  }
  GetCustomers(){
    return this.http.get(`http://localhost:5137/api/Agent/${sessionStorage.getItem('loggedInUser')}/GetAllCustomersByAgentId`)
  }
  GetInsuranceAccounts(){
    return this.http.get(`http://localhost:5137/api/Agent/${sessionStorage.getItem('loggedInUser')}/GetInsuranceAccountsByAgentId`)
  }
}
