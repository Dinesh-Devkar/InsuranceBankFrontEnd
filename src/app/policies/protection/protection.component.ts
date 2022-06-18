import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-protection',
  templateUrl: './protection.component.html',
  styleUrls: ['./protection.component.css']
})
export class ProtectionComponent implements OnInit {

  insuranceType:string=''
  insuranceSchemes:any
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.dataService.currentInsuranceType.subscribe((data:any)=>{
      this.insuranceType=data
      this.dataService.GetAllInsuranceSchemesByInsuranceType(data).subscribe((data:any)=>{
        this.insuranceSchemes=data.$values
        console.log(this.insuranceSchemes)
      },(error:any)=>{
        alert(error.error.message)
      })

    })
    
  }

}
