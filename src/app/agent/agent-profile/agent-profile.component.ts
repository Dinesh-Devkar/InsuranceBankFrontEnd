import { Component, OnInit } from '@angular/core';
import { AgentServiceService } from 'src/app/services/agent/agent-service.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css']
})
export class AgentProfileComponent implements OnInit {

  agentForm=new FormGroup({
    name:new FormControl(''),
    loginId:new FormControl(''),
    email:new FormControl(''),
    agentCode:new FormControl(''),
    qualification:new FormControl(''),
    address:new FormControl(''),
    userRoll:new FormControl(''),
    status:new FormControl('')
  })
  constructor(private agentService:AgentServiceService) { }

  ngOnInit(): void {
    this.agentService.GetAgentDetails().subscribe((data:any)=>{
      console.log(data)
      
      this.agentForm.setValue({
        name:data.name,
        loginId:data.loginId,
        email:data.email,
        agentCode:data.agentCode,
        qualification:data.qualification,
        address:data.address,
        userRoll:data.userRoll,
        status:data.status
      })
    },(error:any)=>{
      alert(error.error.message)
    })

  }
  get Name(){
    return this.agentForm.get('name')
  }

}
