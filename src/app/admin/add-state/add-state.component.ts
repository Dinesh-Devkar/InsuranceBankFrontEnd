import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.css']
})
export class AddStateComponent implements OnInit {

  state=new FormGroup({
    stateName:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required)
  })
  constructor(private dataService:DataServiceService) { }

  AddState(){
    this.dataService.AddState(this.state.value).subscribe((data:any)=>{
      console.log(data)
      alert(data.message)
      this.state.reset()
    },(error:any)=>{
      alert(error.error.message)
    }) 

  }
  ngOnInit(): void {
  }

  get StateName(){
    return this.state.get('stateName');
  }
  get Status(){
    return this.state.get('status');
  }
}
