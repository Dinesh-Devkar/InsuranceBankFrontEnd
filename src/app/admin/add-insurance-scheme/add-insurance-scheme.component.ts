import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-add-insurance-scheme',
  templateUrl: './add-insurance-scheme.component.html',
  styleUrls: ['./add-insurance-scheme.component.css']
})
export class AddInsuranceSchemeComponent implements OnInit {

  img:any
  insuranceTypesList:any
  scheme=new FormGroup({
    insuranceTypeName:new FormControl('',Validators.required),
    insuranceSchemeName:new FormControl('',Validators.required),
    image:new FormControl('',Validators.required),
    newRegComission:new FormControl('',Validators.required),
    installmentComission:new FormControl('',Validators.required),
    note:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required)
  })
  constructor(private dataService:DataServiceService) { }

  AddInsuranceScheme(){
    this.dataService.AddInsuranceScheme(this.scheme.value).subscribe((data:any)=>{
      console.log(data)
      alert(data)
    },(error:any)=>{
      alert(error.error.message)
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
      this.scheme.get('image')?.setValue(d)
      alert(this.scheme.get('image')?.value)
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
    this.dataService.GetAllInsuranceTypes().subscribe((data:any)=>{
      console.log(data.$values)
      this.insuranceTypesList=data.$values
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
