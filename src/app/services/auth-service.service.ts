import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loggedInUser:any
  private loggedInUserName = new BehaviorSubject(sessionStorage.getItem('loggedInUserName'));
  public currentUserName= this.loggedInUserName.asObservable();

  constructor(private http:HttpClient) { }
  SetSelectedLoggedInUserName(name:any){
    this.loggedInUserName.next(name)
  }
  GetSelectedLoggedInUserName(){
    return  this.currentUserName;
  }
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
  GetEmployeeDetails(adminId:any){
    return this.http.get(`http://localhost:5137/api/v1/Admin/${adminId}/GetAdminDetails`)
  }
  UpdatePassword(passwordCredentials:any){
    return this.http.put(`http://localhost:5137/api/InsuranceBank/Authentication/${sessionStorage.getItem('loggedInUser')}/ChangePassword`,passwordCredentials)
  }
  HaveAccess(){
    let logginToken=sessionStorage.getItem('token') || '';
    let _extractedToken=logginToken.split('.')[1];
    let _atobData=atob(_extractedToken);
    let _finalData=JSON.parse(_atobData);
    return sessionStorage.getItem('loggedInuserRoll');
  }
}
