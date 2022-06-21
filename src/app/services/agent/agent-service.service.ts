import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentServiceService {

  constructor(private http:HttpClient) { }
  GetAgentDetails(){
    return this.http.get(`http://localhost:5137/api/Agent/${sessionStorage.getItem('loggedInUser')}/GetAgentById`)
  }
  GetAllAgents(){
    return this.http.get(`http://localhost:5137/api/Agent/GetAllAgents`)
  }
  AddAgent(agent:any){
    return this.http.post(`http://localhost:5137/api/Agent/Register`,agent)
  }
  AddCustomer(customer:any){
    return this.http.post(`http://localhost:5137/api/Agent/${sessionStorage.getItem('loggedInUser')}/AddCustomer`,customer);
  }
  GetCustomers(){
    return this.http.get(`http://localhost:5137/api/Agent/${sessionStorage.getItem('loggedInUser')}/GetAllCustomersByAgentId`)
  }
  GetInsuranceAccounts(){
    return this.http.get(`http://localhost:5137/api/Agent/${sessionStorage.getItem('loggedInUser')}/GetInsuranceAccountsByAgentId`)
  }

  GetCommissionRecords(){
    return this.http.get(`http://localhost:5137/api/Agent/${sessionStorage.getItem('loggedInUser')}/GetCommissionRecordsByAgentId`)
  }
  UpdateAgent(agentCode:any,agent:any){
    return this.http.put(`http://localhost:5137/api/Agent/${agentCode}/UpdateAgent`,agent)
  }

  
}
