import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-view-insurance-plan',
  templateUrl: './view-insurance-plan.component.html',
  styleUrls: ['./view-insurance-plan.component.css']
})
export class ViewInsurancePlanComponent implements OnInit {

  insurancePlansList:any
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.dataService.GetAllInsurancePlans().subscribe((data:any)=>{
      console.log(data)
      this.insurancePlansList=data.$values
    })
  }

}
