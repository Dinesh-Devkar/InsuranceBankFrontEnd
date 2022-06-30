import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alert/alerts.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-edit-insurance-type',
  templateUrl: './edit-insurance-type.component.html',
  styleUrls: ['./edit-insurance-type.component.css']
})
export class EditInsuranceTypeComponent implements OnInit {

  selectedFile: any;
  img: any;
  insuranceType=new FormGroup({
    insuranceName:new FormControl('',Validators.required),
    image:new FormControl(''),
    status:new FormControl('',Validators.required)
  })
  
  constructor(private dataService:DataServiceService,private alertService:AlertsService,private router:Router) { }

  UpdateInsuranceType(){
    this.dataService.UpdateInsuranceType(sessionStorage.getItem('insuranceTypeId'),this.insuranceType.value).subscribe((data:any)=>{
      this.alertService.Success(data.message)
      sessionStorage.removeItem('insuranceTypeId');
      this.router.navigate(['/dashboard'])
    },(error:any)=>{
      this.alertService.Failed(error.error.message)
      console.log(error)
    })
  }

  ngOnInit(): void {
    this.dataService.GetInsuranceType(sessionStorage.getItem('insuranceTypeId')).subscribe((data:any)=>{
      this.insuranceType.setValue({
        insuranceName:data.insuranceName,
        image:data.image,
        status:data.status
      })
    },(error:any)=>{
        console.log(error)
    })
  }
  get InsuranceType(){
    return this.insuranceType.get("insuranceName");
  }
  get Image(){
    return this.insuranceType.get("image");
  }
  get Status(){
    return this.insuranceType.get("status");
  }

}
