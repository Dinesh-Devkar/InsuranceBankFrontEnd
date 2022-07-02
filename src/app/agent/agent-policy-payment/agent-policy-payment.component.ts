import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AgentServiceService } from 'src/app/services/agent/agent-service.service';


import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-agent-policy-payment',
  templateUrl: './agent-policy-payment.component.html',
  styleUrls: ['./agent-policy-payment.component.css']
})
export class AgentPolicyPaymentComponent implements OnInit {

  totalAmount:number=0
  commissionRecordsList:any
  constructor(private agentService:AgentServiceService) { }

  ngOnInit(): void {
    this.agentService.GetCommissionRecords().subscribe((data:any)=>{
      console.log(data)
      this.commissionRecordsList=data.$values
      this.CalCulaterTotalAmount()
      
    },(error:any)=>{
      console.log(error)
    })
  }
  CalCulaterTotalAmount(){
    this.commissionRecordsList.forEach((insuranceAccount:any)=>{{
      
      this.totalAmount+=insuranceAccount.commissionAmount
    }})
  }

  @ViewChild('pdfTable')
  pdfTable!:ElementRef;
 

  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }

}
