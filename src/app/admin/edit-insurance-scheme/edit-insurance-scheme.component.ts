import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-edit-insurance-scheme',
  templateUrl: './edit-insurance-scheme.component.html',
  styleUrls: ['./edit-insurance-scheme.component.css']
})
export class EditInsuranceSchemeComponent implements OnInit {

  img:any
  insuranceTypesList:any
  scheme=new FormGroup({
    id:new FormControl('',Validators.required),
    insuranceTypeName:new FormControl('kkkkk',Validators.required),
    insuranceSchemeName:new FormControl('',Validators.required),
    image:new FormControl('',Validators.required),
    newRegComission:new FormControl('',Validators.required),
    installmentComission:new FormControl('',Validators.required),
    note:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required)
  })
  constructor(private dataService:DataServiceService,private router:Router) { }
  ngOnInit(): void {
    this.dataService.GetAllInsuranceTypes().subscribe((data:any)=>{
      console.log(data.$values)
     
      this.insuranceTypesList=data.$values
    })
    this.dataService.GetInsuranceSchemeDetails(sessionStorage.getItem('insuranceScheme')).subscribe((data:any)=>{
        alert(data.id)
        this.scheme.setValue({
          insuranceTypeName:data.insuranceTypeName,
          insuranceSchemeName:data. insuranceSchemeName,
          newRegComission:data.newRegComission,
          installmentComission:data.installmentComission,
          note:data.note,
          status:data.status,
          image:data.image,
          id:data.id
        })
    },(error:any)=>{
      alert(error.message)
    })
  }
  get InsuranceType(){
    return this.scheme.get('insuranceTypeName');
  }
  get InsuranceScheme(){
    return this.scheme.get('insuranceSchemeName');
  }
  get Image(){
    return this.scheme.get('image');
  }
  get CommisionNew(){
    return this.scheme.get('newRegComission');
  }
   get CommisionInstallment(){
    return this.scheme.get('installmentComission');
  }
  get Note(){
    return this.scheme.get('note');
  }
  get Status(){
    return this.scheme.get('status');
  }

}
