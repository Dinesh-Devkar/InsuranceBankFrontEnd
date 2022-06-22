import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { CustomerServiceService } from 'src/app/services/customer/customer-service.service';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-insurance-account-details',
  templateUrl: './insurance-account-details.component.html',
  styleUrls: ['./insurance-account-details.component.css']
})
export class InsuranceAccountDetailsComponent implements OnInit {

  paymentsList:any
  customerDetails:any
  insuranceAccountDetails:any
  constructor(private dataService:DataServiceService,private customerService:CustomerServiceService) { }

  @ViewChild('pdfTable')
  pdfTable!:ElementRef;
  
  GoDashboard(){
    sessionStorage.removeItem('insuranceAccountId')
  }
  ngOnInit(): void {
    this.customerService.GetCustomerDetails().subscribe((data:any)=>{
      console.log(data)
      this.customerDetails=data
    })

    this.dataService.GetInsuranceAccountDetailsByAccountId().subscribe((data:any)=>{
      this.insuranceAccountDetails=data
      console.log(data)
    },(error:any)=>{
      console.log(error)
      alert(error.message)
    })
    this.dataService.GetPaymentDetails().subscribe((data:any)=>{
      console.log(data.$values)
      this.paymentsList=data.$values
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
