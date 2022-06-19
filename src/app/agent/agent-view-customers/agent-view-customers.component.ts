import { Component, OnInit } from '@angular/core';
import { AgentServiceService } from 'src/app/services/agent/agent-service.service';

import {  ElementRef, ViewChild } from '@angular/core';



import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-agent-view-customers',
  templateUrl: './agent-view-customers.component.html',
  styleUrls: ['./agent-view-customers.component.css']
})
export class AgentViewCustomersComponent implements OnInit {

  customersList:any
  constructor(private agentService:AgentServiceService) { }

  ngOnInit(): void {
    this.agentService.GetCustomers().subscribe((data:any)=>{
      this.customersList=data.$values
      console.log(data.$values)
    },(error:any)=>{
      // alert(error.error.message)
    })
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
