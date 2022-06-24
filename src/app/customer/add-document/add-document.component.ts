import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { CustomerServiceService } from 'src/app/services/customer/customer-service.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {

  img:any
  documentForm=new FormGroup({
    documentName:new FormControl('',Validators.required),
    documentFile:new FormControl('',Validators.required)

  })
  constructor(private customerService:CustomerServiceService,private router:Router) { }

  AddDocument(){
    console.log(this.documentForm.value)
    this.customerService.AddDocument(this.documentForm.value).subscribe((data:any)=>{
      alert(data.message)
      this.router.navigate(['/customerdashboard'])
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
      this.documentForm.get('documentFile')?.setValue(d)
      alert(this.documentForm.get('documentFile')?.value)
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

}
