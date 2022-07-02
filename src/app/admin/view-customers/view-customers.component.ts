import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data/data-service.service';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {

  customers:any
  constructor(private dataService:DataServiceService,private router:Router) { }

  GoToViewCustomerDocuments(customerId:string){
    sessionStorage.setItem('customerId',customerId)
    this.router.navigate(['/adminviewdocuments'])
  }
  GoToEditCustomerPage(customerId:string){
    sessionStorage.setItem('customerId',customerId)
    this.router.navigate(['/editcustomer'])

  }
  ngOnInit(): void {
    this.dataService.GetAllCustomers().subscribe((data:any)=>{
      
      this.customers=data.$values
      console.log(data.$values)
      
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
