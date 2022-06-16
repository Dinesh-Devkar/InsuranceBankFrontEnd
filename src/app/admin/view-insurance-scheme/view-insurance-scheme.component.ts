import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-view-insurance-scheme',
  templateUrl: './view-insurance-scheme.component.html',
  styleUrls: ['./view-insurance-scheme.component.css']
})
export class ViewInsuranceSchemeComponent implements OnInit {

  insuranceSchemesList:any
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.dataService.GetAllInsuranceSchemes().subscribe((data:any)=>{
      console.log(data.$values)
      this.insuranceSchemesList=data.$values
    },(error:any)=>{
      console.log(error)
    })

  }

}
