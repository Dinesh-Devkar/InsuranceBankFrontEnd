import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { CustomerServiceService } from 'src/app/services/customer/customer-service.service';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import * as moment from 'moment';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alert/alerts.service';
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-insurance-account-details',
  templateUrl: './insurance-account-details.component.html',
  styleUrls: ['./insurance-account-details.component.css']
})
export class InsuranceAccountDetailsComponent implements OnInit {

  isAllInstallmentsDone:boolean=false
  nextPayment:any
  installmentNumber:number=0
  installmentAmount:number=0
  paymentsList:any
  customerDetails:any
  insuranceAccountDetails:any
  isCustomerLogin=true
  nextPaymentDetails:any
  constructor(private dataService:DataServiceService,private customerService:CustomerServiceService,private router:Router,private alertService:AlertsService) { }

  @ViewChild('pdfTable')
  pdfTable!:ElementRef;
  
  GoDashboard(){
    sessionStorage.removeItem('insuranceAccountId')
  }
  GoToPaymentPage(){
    this.nextPaymentDetails={customerId:sessionStorage.getItem('loggedInUser'),accountNumber:this.insuranceAccountDetails.accountNumber,insuranceScheme:this.insuranceAccountDetails.insuranceScheme,installmentNumber:this.installmentNumber,installmentAmount:this.installmentAmount,installmentDate:this.nextPayment,paidDate:new Date(),customerName:this.insuranceAccountDetails.customerName}
    sessionStorage.setItem('pmt',JSON.stringify(this.nextPaymentDetails))
    this.router.navigate(['/policypayment'])
  }
  SendPolicyClaimRequest(customerId:string,insuranceAccountNumber:string){
    console.log("Customer Id : "+customerId)
    console.log("Insurance Account Number : "+insuranceAccountNumber)
    this.customerService.SendPolicyClaimeRequest(customerId,{customerId,insuranceAccountNumber}).subscribe((data:any)=>{
        this.alertService.Success(data.message)
    },(error:any)=>{
      this.alertService.Failed(error.error.message)
      console.log(error)
    })
  }
  ngOnInit(): void {
    if(sessionStorage.getItem('loggedInuserRoll')!="Customer"){
      this.isCustomerLogin=false
    }
    this.customerService.GetCustomerDetails().subscribe((data:any)=>{
      console.log(data)
      this.customerDetails=data
    })

    this.dataService.GetInsuranceAccountDetailsByAccountId().subscribe((data:any)=>{
      this.insuranceAccountDetails=data
      console.log(data)
      if(this.insuranceAccountDetails.pendingInstallments==0){
        this.isAllInstallmentsDone=true
        return
      }
    },(error:any)=>{
      console.log(error)
      alert(error.message)
    })
    this.dataService.GetPaymentDetails().subscribe((data:any)=>{
      console.log(data.$values)
      this.paymentsList=data.$values
      this.installmentNumber=this.paymentsList.length+1
      this.installmentAmount=this.paymentsList[0].installmentAmount
      let k=data.$values[data.$values.length-1]
      //alert("Last Pay : "+k.installmentDate)
      let lastPayment=moment(k.installmentDate)
      //alert("HH : "+lastPayment)
      let f=lastPayment.add(12, 'months');
      this.nextPayment = f.format('YYYY/MM/DD');
      //alert("Next Payment Data : "+this.nextPayment)
      for (let index = 0; index < data.$values.length; index++) {
        
       console.log(this.nextPayment)
        
      }
    },(error:any)=>{
      console.log(error)
      alert(error.message)
    })
  }

  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }

}
