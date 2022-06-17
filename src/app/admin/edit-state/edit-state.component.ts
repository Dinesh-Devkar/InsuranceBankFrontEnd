import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-state',
  templateUrl: './edit-state.component.html',
  styleUrls: ['./edit-state.component.css']
})
export class EditStateComponent implements OnInit {

  state=new FormGroup({
    stateName:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }
  get StateName(){
    return this.state.get('stateName');
  }
  get Status(){
    return this.state.get('status');
  }
}
