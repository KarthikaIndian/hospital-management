import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray,FormBuilder,Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.scss']
})
export class PatientRegisterComponent implements OnInit {
  patientForm !:FormGroup
  submitted = false;
  states: string[] = [
    'Tamil Nadu',
    'Kerala',
    'Andhra Pradesh',
    'Karnataka',
    'Goa']
    contries:string[]=[
      'India',
      'Australia'
    ]
    cities:string[]=[
      'Thanjavur',
      'Madurai',
      'Chennai'
    ]
    status:string[]=[
      'Married',
      'Unmarried',
      'Divorce',

    ]
  constructor( private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.patientForm = this.formbuilder.group({
      id: [null],
      email: [null, [Validators.required, Validators.email]],
      name:[null,Validators.required],
      lname:[null,Validators.required],
      fname:[null,Validators.required],
      sname:[null,Validators.required],
      mname:[null,Validators.required],
      patientNo:[null,Validators.required],
      phoneNo:[null,Validators.required],
      altPhoneNo:[null,],
      title:[null,Validators.required],
      marital:[null,Validators.required],
      age:[null,Validators.required],
      bloodGroup:[null,Validators.required],
      weight:[null,Validators.required],
      gender:[null,Validators.required],
      add1:[null,Validators.required],
      add2:[null,Validators.required],
      country:[null,Validators.required],
      state:[null,Validators.required],
      city:[null,Validators.required],
      pinCode:[null,Validators.required],
      note:[null,Validators.required],


    
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.patientForm.controls;
  }
  Submit(){
    this.submitted=true

  }
}
