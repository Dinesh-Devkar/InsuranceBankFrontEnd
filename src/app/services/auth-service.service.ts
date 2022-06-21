import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loggedInUser:any
  constructor(private http:HttpClient) { }
  private _refreshrequired=new Subject<void>();
  get RefreshRequired(){
    return this._refreshrequired;
  }

  SetLoggedInUser(user:any){
    this.loggedInUser=user;
  }
  GetLoggedInUser(){
    return this.loggedInUser;
  }

  IsLoggedIn(){
    return localStorage.getItem('token')!=null;
  }

  Login(user:{email:string,password:string}){
    
    //return this.http.get(`http://localhost:5137/api/v1/Admin/GetAllAdmins`);
    return this.http.post(`http://localhost:5137/api/InsuranceBank/Authentication/Login`,user).pipe(
      tap(()=>{
        
        this.RefreshRequired.next();
      })
    );
  }
  EmployeeRegister(employee:any){
    alert("Auth Service Cll")
    return this.http.post(`http://localhost:5137/api/Employee/Register`,employee)
  }
  AdminRegister(employee:any){
    
    return this.http.post(`http://localhost:5137/api/v1/Admin/Register`,employee)
  }
  GetAdminDetails(adminId:any){
    return this.http.get(`http://localhost:5137/api/v1/Admin/${adminId}/GetAdminDetails`)
  }
  UpdatePassword(passwordCredentials:any){
    return this.http.put(`http://localhost:5137/api/v1/Admin/${sessionStorage.getItem('loggedInUser')}/ChangePassword`,passwordCredentials)
  }
  HaveAccess(){
    let logginToken=sessionStorage.getItem('token') || '';
    alert("Token : "+sessionStorage.getItem('token'))
    let _extractedToken=logginToken.split('.')[1];
    alert("Extracted Token  : "+_extractedToken)
    let _atobData=atob(_extractedToken);
    alert("ATOB Token  : "+_atobData)
    let _finalData=JSON.parse(_atobData);
    console.log(_finalData)
    alert("Final Data : "+_finalData)
    //alert("Final Data : "+_atobData.name)
    let r='http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
   
    console.log(_finalData.r)
    alert("Final Data : "+_finalData.r)
    
    return sessionStorage.getItem('loggedInuserRoll');
  }
}
