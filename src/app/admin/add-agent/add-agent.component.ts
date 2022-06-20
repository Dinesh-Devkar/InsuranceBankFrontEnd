import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentServiceService } from 'src/app/services/agent/agent-service.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent implements OnInit {

  agentForm=new FormGroup({
    name:new FormControl('',Validators.required),
    loginId:new FormControl('',Validators.required),
    qualification:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    agentCode:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    confirmPassword:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required)
  })
  constructor(private agentService:AgentServiceService,private router:Router) { }

  AddAgent(){
    console.log(this.agentForm.value)
    this.agentService.AddAgent(this.agentForm.value).subscribe((data:any)=>{
      console.log(data)
      alert(data.message)
      this.router.navigate(['/dashboard'])
    },(error:any)=>{
      console.log(error)
      alert(error.error.message)
    })
  }
  ngOnInit(): void {
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
