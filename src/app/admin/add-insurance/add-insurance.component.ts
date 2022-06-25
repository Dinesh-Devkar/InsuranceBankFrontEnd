import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { AlertsService } from 'src/app/services/alert/alerts.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.css']
})
export class AddInsuranceComponent implements OnInit {

  selectedFile: any;
  img: any;
  insuranceType=new FormGroup({
    insuranceName:new FormControl('',Validators.required),
    image:new FormControl(''),
    status:new FormControl('',Validators.required)
  })
  constructor(private dataService:DataServiceService,private router:Router,private alertService:AlertsService) { }

  // onSelectFile(fileInput: any) {
  //   this.selectedFile = <File>fileInput.target.files[0];
    
  // }
  // onChange($event: Event) {
  //   const file = ($event.target as HTMLInputElement).files[0];
  //   this.convertToBase64(file);
  // }
  // AddInsuranceType(){
  //   this.insuranceType.get('image')?.setValue(this.selectedFile)
  //   const formData = new FormData();
  // formData.append('insuranceName',"Corona");
  // formData.append('image', this.selectedFile);
  // formData.append('status',"Active")

  //   console.log(this.insuranceType.value)
  //   console.log(formData.get('image'))
  //     this.dataService.AddInsuranceType(this.insuranceType.value).subscribe((data:any)=>{
  //       console.log(data)
  //       alert(data)
  //     },(error:any)=>{
  //       console.log(error)
  //       alert(error.error.message)
  //     })
// }
AddInsuranceType(){
  console.log(this.insuranceType.value)
  this.dataService.AddInsuranceType(this.insuranceType.value).subscribe((data:any)=>{
          console.log(data)
         this.alertService.Success(data.message)
          this.router.navigate(['/dashboard'])
        },(error:any)=>{
          this.alertService.Failed(error.error.message)
        })
}
onChange(event: any) {
  const file = event.target.files[0];
  console.log(file)
  this.convertToBase64(file);
  console.log(this.img)
  //this.insuranceType.get('image')?.setValue(this.img)
}

convertToBase64(file: File) {
   const observable= new Observable((subscriber: Subscriber<any>) => {
    this.readFile(file, subscriber);
    
  });
  observable.subscribe(d=>{
    console.log("pppppppp")
    //console.log(d)
    this.img=d;
    this.insuranceType.get('image')?.setValue(d)
    alert(this.insuranceType.get('image')?.value)
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
