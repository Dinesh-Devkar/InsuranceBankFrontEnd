import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from 'src/app/services/customer/customer-service.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {

  queriesList:any
  constructor(private customerService:CustomerServiceService) { }

  ngOnInit(): void {
    this.customerService.GetQueriesByCustomerId().subscribe((data:any)=>{
      console.log(data)
      this.queriesList=data.$values
    })
  }

}
