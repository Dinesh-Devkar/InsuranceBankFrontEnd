import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  //selectedInsuranceType:string=''
  selectedAgentCode: any
  selectedCity: any
  selectedState: any
  public insuranceAccountDetails: any
  private selectedInsuranceType = new BehaviorSubject('');
  public currentInsuranceType = this.selectedInsuranceType.asObservable();
  private selectedInsurancePlan = new BehaviorSubject('');
  public currentInsurancePlan = this.selectedInsuranceType.asObservable();
  private selectedInsuranceScheme = new BehaviorSubject('');
  public currentInsuranceScheme = this.selectedInsuranceType.asObservable();
  private selectedEmployee = new BehaviorSubject('');
  public currentEmployee = this.selectedEmployee.asObservable();

  constructor(private http: HttpClient) { }
  // SetSelectedInsuranceType(insuranceType:string):void{
  //   //this.selectedInsuranceType=insuranceType;
  // }
  // SetSelectedAgentCode(agentCode:any){
  //   this.selectedAgentCode=agentCode
  // }
  // GetSelectedAgentCode(){
  //   return this.selectedAgentCode;
  // }
  SetSelectedState(state: any) {
    this.selectedState = state
  }
  GetSelectedState() {
    return this.selectedState
  }
  SetSelectedCity(city: any) {
    this.selectedCity = city
  }
  GetSelectedCity() {
    return this.selectedCity;
  }
  SetInsuranceAccountDetails(account: any) {
    this.insuranceAccountDetails = account
  }
  GetInsuranceAccountDetails() {
    return this.insuranceAccountDetails;
  }
  SetSelectedInsuranceType(insuranceType: string) {
    this.selectedInsuranceType.next(insuranceType)
  }
  GetSelectedInsuranceType() {
    return this.selectedInsuranceType;
  }
  SetSelectedInsurancePlan(insurancePlan: string) {
    this.selectedInsurancePlan.next(insurancePlan)
  }
  GetSelectedInsurancePlan() {
    return this.selectedInsurancePlan;
  }
  SetSelectedInsuranceScheme(insurancePlan: string) {
    this.selectedInsuranceScheme.next(insurancePlan)
  }
  GetSelectedInsuranceScheme() {
    return this.selectedInsuranceScheme;
  }
  SetSelectedEmployee(employee: any) {
    this.selectedEmployee.next(employee)
  }
  GetSelectedEmployee() {
    return this.selectedEmployee;
  }


  GetAllStates() {
    return this.http.get(`http://localhost:5137/api/State/GetAllStates`)
  }
  AddState(state: any) {
    return this.http.post(`http://localhost:5137/api/State/AddState`, state)
  }
  UpdateState(state: any) {
    return this.http.put(`http://localhost:5137/api/State/UpdateState`, state)
  }

  AddCity(city: any) {
    return this.http.post(`http://localhost:5137/api/City/AddCity`, city)
  }
  UpdateCity(city: any) {
    return this.http.put(`http://localhost:5137/api/City/UpdateCity`, city)
  }
  GetAllCities() {
    return this.http.get(`http://localhost:5137/api/City/GetAllCities`)
  }
  GetAllActiveStates(){
    return this.http.get(`http://localhost:5137/api/State/GetAllActiveStates`)
  }
  GetCitiesByState(state: string) {
    return this.http.get(`http://localhost:5137/api/City/${state}/GetCitiesByState`)
  }

  AddInsuranceType(insuranceType: any) {
    return this.http.post(`http://localhost:5137/api/InsuranceType/AddInsuranceType`, insuranceType)
  }

  GetInsuranceType(insuranceTypeId:any){
    return this.http.get(`http://localhost:5137/api/InsuranceType/${insuranceTypeId}/GetInsuranceType`);
  }
  GetAllInsuranceTypes() {
    return this.http.get(`http://localhost:5137/api/InsuranceType/GetAllInsuranceTypes`);
  }

  UpdateInsuranceType(insuranceTypeId:any,insuranceType:any){
    return this.http.put(`http://localhost:5137/api/InsuranceType/${insuranceTypeId}/UpdateInsuranceType`,insuranceType);
  }
  AddInsuranceScheme(insuranceSheme: any) {
    return this.http.post(`http://localhost:5137/api/InsuranceScheme/AddInsuranceScheme`, insuranceSheme)
  }

  GetAllInsuranceSchemes() {
    return this.http.get(`http://localhost:5137/api/InsuranceScheme/GetAllInsuranceSchemes`);
  }

  AddInsurancePlan(insurancePlan: any) {
    return this.http.post(`http://localhost:5137/api/InsurancePlan/AddInsurancePlan`, insurancePlan)
  }
  GetAllInsuranceSchemesByInsuranceType(insuranceType: any) {
    return this.http.get(`http://localhost:5137/api/InsuranceScheme/${insuranceType}/GetInsuranceSchemesByInsuranceType`)
  }
  UpdateInsuranceScheme(insuranceSchemeId:any,insuranceScheme:any){
    return this.http.put(`http://localhost:5137/api/InsuranceScheme/${insuranceSchemeId}/UpdateInsuranceScheme`,insuranceScheme)
  }

  UpdateInsurancePlan(insurancePlanId:any,insurancePlan:any){
    return this.http.put(`http://localhost:5137/api/InsurancePlan/${insurancePlanId}/UpdateInsurancePlan`,insurancePlan)
  }
  GetAllInsurancePlans() {
    return this.http.get(`http://localhost:5137/api/InsurancePlan/GetAllInsurancePlans`)
  }
  GetInsurancePlansByInsuranceType(insuranceType: string) {
    return this.http.get(`http://localhost:5137/api/InsurancePlan/${insuranceType}/GetInsurancePlansByInsuranceType`)
  }
  GetInsurancePlan(insurancePlan: string|null) {
    return this.http.get(`http://localhost:5137/api/InsurancePlan/${insurancePlan}/GetInsurancePlan`)
  }
  GetInsuranceSchemeDetails(insuranceSchemeName: any) {
    return this.http.get(`http://localhost:5137/api/InsuranceScheme/${insuranceSchemeName}/GetInsuranceSchemeDetails`)
  }
  GetAllCustomers() {
    return this.http.get(`http://localhost:5137/api/Customer/GetAllCustomers`)
  }
  GetInsuranceAccountsByCustomerId() {
    return this.http.get(`http://localhost:5137/api/InsuranceAccount/${sessionStorage.getItem('loggedInUser')}/GetInsuranceAccountsByCustomerId`)
  }
  GetAllInsuranceAccounts() {
    return this.http.get(`http://localhost:5137/api/InsuranceAccount/GetAllInsuranceAccounts`)
  }
  GetInsuranceAccountDetailsByAccountId() {

    return this.http.get(`http://localhost:5137/api/InsuranceAccount/${sessionStorage.getItem('insuranceAccountId')}/GetInsuranceAccountByAccountId`)

  }

  GetAgentDetailsByAgentCode() {
    return this.http.get(`http://localhost:5137/api/Agent/${sessionStorage.getItem('agentCode')}/GetAgentByCode`)
  }
  GetAllCommissionRecords() {
    return this.http.get(`http://localhost:5137/api/Agent/GetAllCommissionRecords`)
  }
  GetAllQueries() {
    return this.http.get(`http://localhost:5137/api/Customer/GetAllQueries`);
  }

  SolveQuery(query: any) {
    return this.http.post(`http://localhost:5137/api/Customer/SolveQuery`, query);
  }
  GetPaymentDetails() {
    return this.http.get(`http://localhost:5137/api/Payment/${sessionStorage.getItem('insuranceAccountId')}/GetPAymentDetails`)
  }

  GetCustomerDetails(customerId:any){
    return this.http.get(`http://localhost:5137/api/Customer/${customerId}/GetCustomerById`)
  }

  // postFile(caption: string, fileToUpload: File) {
  //   const endpoint = 'http://localhost:5137/api/InsuranceType/UploadImage';
  //   alert(caption)
  //   alert(fileToUpload)
  //   console.log(fileToUpload)
  //   const formData: FormData = new FormData();
  //   formData.append('Image', fileToUpload, fileToUpload.name);
  //   formData.append('ImageCaption', caption);
  //   console.log(formData.get('Image'))
  //   return this.http
  //     .post(endpoint, formData);
  // }
  // postFile(fileToUpload: File) {
  //   const endpoint = 'http://localhost:5137/api/InsuranceType/UploadImage';
  //   // const formData: FormData = new FormData();
  //   // formData.append('Image', fileToUpload, fileToUpload.name);
  //   // formData.append('ImageCaption', caption);
  //   return this.http
  //     .post(endpoint, fileToUpload);
  // }
   postFile(fileToUpload: any) {
    const endpoint = 'http://localhost:5137/api/InsuranceType/UploadImage';
    //alert(caption)
    // alert(fileToUpload)
    // console.log(fileToUpload)
    // let formData: FormData = new FormData();
    // alert(fileToUpload.name)
    // formData.append('Image', fileToUpload, fileToUpload.name);
    //formData.append('ImageCaption', caption);
    console.log(fileToUpload)
    return this.http
      .post(endpoint,fileToUpload);
  }
}
export interface insurance{
  id:number,
  image:string
}
