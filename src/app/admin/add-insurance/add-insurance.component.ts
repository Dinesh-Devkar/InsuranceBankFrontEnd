import { HttpClient, HttpEventType } from '@angular/common/http';
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
  uploadedFiles: any[] = [];


  selectedFile: any;
  img: any;
  insuranceType=new FormGroup({
    insuranceName:new FormControl('',Validators.required),
    image:new FormControl(''),
    status:new FormControl('',Validators.required)
  })
  myimg:any
  fileToUpload: any = null;
  imageUrl:string=''
  constructor(private dataService:DataServiceService,private router:Router,private alertService:AlertsService,private http: HttpClient) { }

  handleFileInput(file: any) {
    this.fileToUpload = <File>file.target.files[0];

    //Show image preview
    var reader = new FileReader();
    
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  OnSubmit(Caption:any,Image:any){
    this.dataService.postFile(Caption.value,this.fileToUpload).subscribe(
      data =>{
        console.log('done');
        Caption.value = null;
        Image.value = null;
        //this.imageUrl = "/assets/img/default-image.png";
      }
    );
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
    }
AddInsuranceType(){

  // console.log(this.insuranceType.value)
  // let formData = new FormData(); 
  // formData.append('image',this.myimg)
  // formData.append('insuranceName',this.InsuranceType?.value)
  // formData.append('status',"Active")
  console.log(this.insuranceType.value)
  this.dataService.AddInsuranceType(this.insuranceType.value).subscribe((data:any)=>{
          console.log(data)
         this.alertService.Success(data.message)
          this.router.navigate(['/dashboard'])
        },(error:any)=>{
          this.alertService.Failed(error.error.message)
          console.log(error)
        })
}
DK(){
  console.log("jjjjjjjjjjjjj")
}
onChange(event: any) {
  
  for(let file of event.files) {
    this.uploadedFiles.push(file);
    
    console.log(file)
    this.insuranceType.get('image')?.setValue(file)
}

//this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  // const file = event.target.files[0];
  // this.myimg=file
  // // formData.append('insuranceName',"DDDDDd")
  // // formData.append('image',file)

  // // formData.append('status',"Active")

  // this.insuranceType.get('image')?.setValue(file)
  //console.log(file.value)
  // this.convertToBase64(file);
  // console.log(this.img)
  // console.log()
  // this.dataService.AddInsuranceType(formData).subscribe((data:any)=>{
  //   console.log(data)
  //  this.alertService.Success(data.message)
  //   this.router.navigate(['/dashboard'])
  // },(error:any)=>{
  //   this.alertService.Failed(error.error.message)
  //   console.log(error)
  // })

  
}

// convertToBase64(file: File) {
//    const observable= new Observable((subscriber: Subscriber<any>) => {
//     this.readFile(file, subscriber);
    
//   });
//   observable.subscribe(d=>{
//     console.log("pppppppp")
//     //console.log(d)
//     this.img=d;
//     this.insuranceType.get('image')?.setValue(d)
//     alert(this.insuranceType.get('image')?.value)
//   })
// }

// readFile(file: File, subscriber: Subscriber<any>) {
//   const filereader = new FileReader();
//   filereader.readAsDataURL(file);

//   filereader.onload = () => {
//     subscriber.next(filereader.result);
//     subscriber.complete();
//   };
//   filereader.onerror = (error) => {
//     subscriber.error(error);
//     subscriber.complete();
//   };
// }
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

  uploadFile = (files:any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    console.log(formData)
    
    // this.http.post('https://localhost:5001/api/upload', formData, {reportProgress: true, observe: 'events'})
    //   .subscribe({
    //     next: (event) => {
    //     if (event.type === HttpEventType.UploadProgress)
    //       this.progress = Math.round(100 * event.loaded / event.total);
    //     else if (event.type === HttpEventType.Response) {
    //       this.message = 'Upload success.';
    //       this.onUploadFinished.emit(event.body);
    //     }
    //   },
    //   error: (err: HttpErrorResponse) => console.log(err)
    // });
}
}
