import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-protection',
  templateUrl: './protection.component.html',
  styleUrls: ['./protection.component.css']
})
export class ProtectionComponent implements OnInit {

  insuranceType:string=''
  insurancePlans:any
  imageUrl:any
  constructor(private dataService:DataServiceService,private router:Router) { }

  GoToInsurancePlanDetails(insurancePlan:string,insuranceScheme:string){
      this.dataService.SetSelectedInsurancePlan(insurancePlan);
      this.dataService.SetSelectedInsuranceScheme(insuranceScheme);
      this.router.navigate(['/arogyashield'])
  }
  ngOnInit(): void {
    this.dataService.GetInsuranceType(sessionStorage.getItem('insuranceTypeId')).subscribe((data:any)=>{
      console.log(data)
     
      this.imageUrl=data.image
    })
    this.dataService.currentInsuranceType.subscribe((data:any)=>{
      this.insuranceType=data
      console.log(data)
      // this.dataService.GetAllInsuranceSchemesByInsuranceType(data).subscribe((data:any)=>{
      //   this.insuranceSchemes=data.$values
      //   console.log(this.insuranceSchemes)
      //   console.log(this.insuranceSchemes[0].insuranceSchemeName)
      //   //this.dataService.GetInsurancePlansByInsuranceScheme()
      // },(error:any)=>{
      //   alert(error.error.message)
      // })
      this.dataService.GetInsurancePlansByInsuranceType(this.insuranceType).subscribe((data:any)=>{
        console.log(data.$values)
        this.insurancePlans=data.$values
        this.dataService.GetInsuranceType(sessionStorage.getItem('insuranceTypeId')).subscribe((data:any)=>{
          console.log(data)
         
          this.imageUrl=data.image
        })
        
        //this.imageUrl='http://localhost:5137/'+data
      })

    })
    
  }

}
