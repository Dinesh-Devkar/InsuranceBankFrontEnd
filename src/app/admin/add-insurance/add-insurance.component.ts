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
    image:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required)
  })
  myimg:any
  fileToUpload !: File;
  imageUrl:string|any='/assets/account.png'
  binaryImage:any
  constructor(private dataService:DataServiceService,private router:Router,private alertService:AlertsService,private http: HttpClient) { }
  // UploadImage(){
  //     this.dataService.postFile(this.binaryImage).subscribe((data:any)=>{
  //       alert("Image Uploaded")
  //     },(error:any)=>{
  //       alert(error)
  //       console.log(error)
  //     })
  // }
  
  // ngOnInit(): void {
  //   // throw new Error('Method not implemented.');
  // }

  // myimage!: Observable<any>;

  // onChange($event: any) {
  //   //const file = ($event.target as HTMLInputElement).files[0];
  //   let file=$event.target.files[0];
  //   this.convertToBase64(file);
    
  // }

  // convertToBase64(file: File) {
  //   this.myimage = new Observable((subscriber: Subscriber<any>) => {
  //     this.readFile(file, subscriber);
  //     alert(file)
  //   });
  //   this.myimage.subscribe((data:any)=>{
  //     alert(data)
  //     this.binaryImage=data
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
  handleFileInput(file: any) {
   
    console.log("My File")
    //console.log(file.files[0])
    //this.fileToUpload = <File>file[0];
    //this.fileToUpload=(file.target as HTMLInputElement).files[0];
    this.fileToUpload=file.files[0]

    //this.insuranceType.get('image')?.setValue(this.fileToUpload)
    //Show image preview
    var reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);
    reader.onload = (event:any) => {
      this.imageUrl = reader.result;
    }
    
  }
  // AddInsurance(caption:any,image:any){
  //   alert("Call Done")
  //   alert(image)
  //   alert(this.binaryImage)
  //   this.insuranceType.setValue({
  //     insuranceName:caption,
  //     image:this.binaryImage
  //   })
  //   console.log(this.insuranceType.value)
  //   this.dataService.postFile(this.insuranceType.value).subscribe(
  //     data =>{
  //       console.log('done');
  //       alert("Done")
       
  //       //this.imageUrl = "/assets/img/default-image.png";
  //     },(error:any)=>{
  //       console.log(error)
  //     }
  //   );
  // }
  AddInsurance(){
    alert("Call Done")
    
    alert(this.binaryImage)
    console.log(this.insuranceType.value)
    this.dataService.postFile(this.insuranceType.value).subscribe(
      data =>{
        console.log('done');
        alert("Done")
       
        //this.imageUrl = "/assets/img/default-image.png";
      },(error:any)=>{
        console.log(error)
      }
    );
  }
  OnSubmit(Caption:any,Image:any){
    // console.log("My Caption : "+Caption)
    // console.log("My Image : "+Image)
    this.dataService.postFile(this.fileToUpload).subscribe(
      data =>{
        console.log('done');
        alert("Done")
        Caption.value = null;
        Image.value = null;
        //this.imageUrl = "/assets/img/default-image.png";
      },(error:any)=>{
        console.log(error)
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
  myimage!: Observable<any>;

  OnChange($event: any) {
    alert("My Image Bro 1")
    //const file = ($event.target as HTMLInputElement).files[0];
    let file=$event.files[0]
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    
    let observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
      
    });
    
    observable.subscribe((data:any)=>{
      alert(data)
      this.binaryImage=data
      this.imageUrl=data
      this.img=data
      // this.insuranceType.setValue({
      //   image:this.binaryImage
      // })
      this.Image?.setValue(this.binaryImage)
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
// DK(){
//   console.log("jjjjjjjjjjjjj")
// }
// onChange(event: any) {
  
//   for(let file of event.files) {
//     this.uploadedFiles.push(file);
    
//     console.log(file)
//     this.insuranceType.get('image')?.setValue(file)
// }

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

  
// }

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
