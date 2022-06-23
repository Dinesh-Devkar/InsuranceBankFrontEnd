import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { CustomerServiceService } from 'src/app/services/customer/customer-service.service';

@Component({
  selector: 'app-cust-documents',
  templateUrl: './cust-documents.component.html',
  styleUrls: ['./cust-documents.component.css']
})
export class CustDocumentsComponent implements OnInit {

  // img:any
  // documentForm=new FormGroup({
  //   documentName:new FormControl('',Validators.required),
  //   documentFile:new FormControl('',Validators.required)

  // })
  documents:any
  constructor(private customerService:CustomerServiceService,private router:Router) { }

  
  ngOnInit(): void {
      this.customerService.GetDocuments(sessionStorage.getItem('loggedInUser')).subscribe((data:any)=>{
        this.documents=data.$values
        console.log(data)
      },(error:any)=>{
        alert(error.error.message)
      })
  }

}
