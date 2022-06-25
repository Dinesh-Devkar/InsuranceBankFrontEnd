import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/services/customer/customer-service.service';

@Component({
  selector: 'app-admin-view-documents',
  templateUrl: './admin-view-documents.component.html',
  styleUrls: ['./admin-view-documents.component.css']
})
export class AdminViewDocumentsComponent implements OnInit {
documents:any
  constructor(private customerService:CustomerServiceService,private router:Router) { }

  GoToDashBoard(){
    sessionStorage.removeItem('customerId')
    if(sessionStorage.getItem('loggedInuserRoll')=="Admin"){
      this.router.navigate(['/dashboard'])
    }
    else if(sessionStorage.getItem('loggedInuserRoll')=="Employee"){
      this.router.navigate(['/empdashboard'])
    }
  }
  ngOnInit(): void {
    this.customerService.GetDocuments(sessionStorage.getItem('customerId')).subscribe((data:any)=>{
      this.documents=data.$values
      console.log(data)
    },(error:any)=>{
      alert(error.error.message)
    })
  }

}
