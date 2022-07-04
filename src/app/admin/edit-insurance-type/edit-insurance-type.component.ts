import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { AlertsService } from 'src/app/services/alert/alerts.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-edit-insurance-type',
  templateUrl: './edit-insurance-type.component.html',
  styleUrls: ['./edit-insurance-type.component.css']
})
export class EditInsuranceTypeComponent implements OnInit {

  selectedFile: any;
  imageUrl: any;
  insuranceType=new FormGroup({
    insuranceName:new FormControl('',Validators.required),
    image:new FormControl(''),
    status:new FormControl('',Validators.required)
  })
  
  constructor(private dataService:DataServiceService,private alertService:AlertsService,private router:Router) { }

  UpdateInsuranceType(){
    console.log(this.insuranceType.value)
    this.dataService.UpdateInsuranceType(sessionStorage.getItem('insuranceTypeId'),this.insuranceType.value).subscribe((data:any)=>{
      this.alertService.Success(data.message)
      sessionStorage.removeItem('insuranceTypeId');
      this.router.navigate(['/dashboard'])
    },(error:any)=>{
      this.alertService.Failed(error.error.message)
      console.log(error)
    })
  }
  OnChange($event: any) {
    //const file = ($event.target as HTMLInputElement).files[0];
    let file=$event.files[0]
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    
    let observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
      
    });
    
    observable.subscribe((data:any)=>{
      this.imageUrl=data
      // this.insuranceType.setValue({
      //   image:this.binaryImage
      // })
      this.Image?.setValue(data);
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
  ngOnInit(): void {
    this.dataService.GetInsuranceType(sessionStorage.getItem('insuranceTypeId')).subscribe((data:any)=>{
      this.insuranceType.setValue({
        insuranceName:data.insuranceName,
        image:data.image,
        status:data.status
      })
      console.log(data)
      this.imageUrl='http://localhost:5137/'+data.image
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
