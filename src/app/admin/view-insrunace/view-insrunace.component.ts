import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-view-insrunace',
  templateUrl: './view-insrunace.component.html',
  styleUrls: ['./view-insrunace.component.css']
})
export class ViewInsrunaceComponent implements OnInit {

  insuranceTypesList:any
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.dataService.GetAllInsuranceTypes().subscribe((data:any)=>{
      console.log(data)
      this.insuranceTypesList=data.$values
      console.log(this.insuranceTypesList)
    })
  }

}
