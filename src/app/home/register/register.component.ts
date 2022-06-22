import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder,FormArray } from '@angular/forms';
import { ConfirmValidator } from './confirmed.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // minimumAge: number = 2;
  result: string = ''
 
  form:FormGroup=new FormGroup({

   

  });
  constructor(private FB:FormBuilder){

    this.form=FB.group({
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      loginid: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      nominee: new FormControl('', Validators.required),
      nomineerelation: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),

      age: new FormControl('', [Validators.required, Validators.required]),
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]]
    },
    {
      validators:ConfirmValidator('password','confirmPassword')
    })
  }

  get f(){
    return this.form.controls;
  }

  // registerForm = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   age: new FormControl('', [Validators.required, Validators.min(this.minimumAge)]),
  //   password:new FormControl('', Validators.compose([Validators.required])),
  //   confirmPassword: new FormControl('', Validators.compose([Validators.required]))
    
  // });
  

  ngOnInit(): void {
  }
  
}

