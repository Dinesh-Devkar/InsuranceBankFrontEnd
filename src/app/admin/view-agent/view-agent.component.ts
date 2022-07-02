import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AgentServiceService } from 'src/app/services/agent/agent-service.service';
import { CommonModule } from '@angular/common';
import { DataServiceService } from 'src/app/services/data/data-service.service';
import { Router } from '@angular/router';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-view-agent',
  templateUrl: './view-agent.component.html',
  styleUrls: ['./view-agent.component.css']
})
export class ViewAgentComponent implements OnInit {

  agentsList:any
  constructor(private agentService:AgentServiceService,private dataService:DataServiceService,private router:Router) { }

  SetSelectedAgentCode(agentId:any){
    //this.dataService.SetSelectedAgentCode(agentCode)
    sessionStorage.setItem('agentId',agentId)
    this.router.navigate(['/editagent'])
  }
  ngOnInit(): void {
    this.agentService.GetAllAgents().subscribe((data:any)=>{
      console.log(data)
      console.log(data.$values)
      let i=data.$values;
      this.agentsList=data.$values;
      
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
