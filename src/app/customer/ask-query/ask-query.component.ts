import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alert/alerts.service';
import { CustomerServiceService } from 'src/app/services/customer/customer-service.service';

@Component({
  selector: 'app-ask-query',
  templateUrl: './ask-query.component.html',
  styleUrls: ['./ask-query.component.css']
})
export class AskQueryComponent implements OnInit {

  queryForm=new FormGroup({
    customerId:new FormControl(''),
    title:new FormControl('',Validators.required),
    message:new FormControl('',Validators.required)
  })
  constructor(private customerService:CustomerServiceService,private router:Router,private alertService:AlertsService) { }

  PostQuery(){
    this.customerService.PostQuery(this.queryForm.value).subscribe((data:any)=>{
      //alert(data.message)
      this.alertService.Success(data.message)
      this.router.navigate(['/customerdashboard'])
    },(error:any)=>{
      console.log(error)
      //alert(error.message)
      this.alertService.Failed(error.message)
    })
  }
  ngOnInit(): void {
    this.queryForm.get('customerId')?.setValue(sessionStorage.getItem('loggedInUser'))
  }

}
