import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-view-insurance-scheme',
  templateUrl: './view-insurance-scheme.component.html',
  styleUrls: ['./view-insurance-scheme.component.css']
})
export class ViewInsuranceSchemeComponent implements OnInit {

  insuranceSchemesList:any
  constructor(private dataService:DataServiceService,private router:Router) { }

  GoToEditInsuranceScheme(insuranceScheme:string,insuranceType:string){
    sessionStorage.setItem("insuranceScheme",insuranceScheme)
    sessionStorage.setItem('insuranceType',insuranceType)
    this.router.navigate(['/editinsuranescheme'])
  }
  ngOnInit(): void {
    this.dataService.GetAllInsuranceSchemes().subscribe((data:any)=>{
      console.log(data.$values)
      this.insuranceSchemesList=data.$values
    },(error:any)=>{
      console.log(error)
    })

  }

}
