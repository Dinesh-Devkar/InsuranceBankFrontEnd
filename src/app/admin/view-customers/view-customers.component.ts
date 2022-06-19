import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {

  customers:any
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.dataService.GetAllCustomers().subscribe((data:any)=>{
      
      this.customers=data.$values
      
    })
  }


}
