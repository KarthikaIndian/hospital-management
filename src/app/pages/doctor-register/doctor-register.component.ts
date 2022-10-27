import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.scss']
})
export class DoctorRegisterComponent implements OnInit {

  Country: string[] = [
    'India',
    'US'
  ];
  public registerFrom!: FormGroup;
  submitted = false;
  error = '';
  regObj: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.registerFrom = this.formBuilder.group({
      id: [null],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      doctorNo: [null],
      email: [null,[Validators.required, Validators.email]],
      designation: [null, Validators.required],
      qualification: [null, Validators.required],
      phoneNo: [null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.minLength(10), Validators.maxLength(10)]],
      certificatePhoto: [null],
      specialistIn: [null, Validators.required],
      clinicOrHospital: [null, Validators.required],
      photo: [null],
      gender: [null, Validators.required],
      age: [null, Validators.required],
      dateOfBirth: [null, Validators.required],
      maritalStatus: [null, Validators.required],
      address1: [null, Validators.required],
      address2: [null],
      cityId: [null, Validators.required],
      stateId: [null, Validators.required],
      countryId: [null, Validators.required],
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.registerFrom.controls;
  }
  onSubmit(){
    this.submitted = true;
  }
}
