import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-view-insurance-plan',
  templateUrl: './view-insurance-plan.component.html',
  styleUrls: ['./view-insurance-plan.component.css']
})
export class ViewInsurancePlanComponent implements OnInit {

  insurancePlansList:any
  constructor(private dataService:DataServiceService,private router:Router) { }

  GoToEditInsurancePlan(insurancePlan:string):void{
    sessionStorage.setItem('insurancePlanName',insurancePlan)
    this.router.navigate(['/editinsuraneplan'])
  }
  ngOnInit(): void {
    this.dataService.GetAllInsurancePlans().subscribe((data:any)=>{
      console.log(data)
      this.insurancePlansList=data.$values
    })
  }

}
