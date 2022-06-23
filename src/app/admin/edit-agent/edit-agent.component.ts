import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentServiceService } from 'src/app/services/agent/agent-service.service';
import { DataServiceService } from 'src/app/services/data/data-service.service';

@Component({
  selector: 'app-edit-agent',
  templateUrl: './edit-agent.component.html',
  styleUrls: ['./edit-agent.component.css']
})
export class EditAgentComponent implements OnInit {

  agentForm=new FormGroup({
    name:new FormControl('',Validators.required),
    loginId:new FormControl('',Validators.required),
    qualification:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    agentCode:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required)
  })
  
  constructor(private dataService:DataServiceService,private agentService:AgentServiceService,private router:Router) { }

  ngOnInit(): void {
    this.dataService.GetAgentDetailsByAgentCode().subscribe((data:any)=>{
      console.log(data)
      this.agentForm.setValue({
        name:data.name,
        loginId:data.loginId,
        qualification:data.qualification,
        address:data.address,
        agentCode:data.agentCode,
        email:data.email,
        status:data.status
      })
    })
  }

  UpdateAgent(){
    console.log(this.agentForm.value)
    this.agentService.UpdateAgent(this.AgentCode?.value,this.agentForm.value).subscribe((data:any)=>{
      alert(data.message)
      if(sessionStorage.getItem('loggedInuserRoll')=="Admin"){
        this.router.navigate(['/dashboard'])
      }
      else if(sessionStorage.getItem('loggedInuserRoll')=="Employee"){
        this.router.navigate(['/empdashboard'])
      }
      
    },(error:any)=>{
      console.log(error)
      alert(error.error.message)
    })
  }

  get Name(){
    return this.agentForm.get('name')
  }
  get LoginId(){
    return this.agentForm.get('loginId')
  }
  get Qualification(){
    return this.agentForm.get('qualification')
  }
  get Address(){
    return this.agentForm.get('address')
  }
  get AgentCode(){
    return this.agentForm.get('agentCode')
  }
  get Email(){
    return this.agentForm.get('email')
  }
  get Password(){
    return this.agentForm.get('password')
  }
  get ConfirmPassword(){
    return this.agentForm.get('confirmPassword')
  }
  get Status(){
    return this.agentForm.get('status')
  }
  
}
