import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {

  customers:any
  constructor(private dataService:DataServiceService,private router:Router) { }

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


}
