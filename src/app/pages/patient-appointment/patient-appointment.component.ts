import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.scss']
})
export class PatientAppointmentComponent implements OnInit {

  public patientRegister!: FormGroup;
  submitted = false;
  error = '';
  regObj: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.patientRegister = this.formBuilder.group({
      id: [null],
      doctorId: [null, Validators.required],
      doctorName: [null, Validators.required],
      doctorSloat: [null, Validators.required],
      tokenNumber: [null,Validators.required],
      PatientNumber: [null,Validators.required],
      phoneNo: [null, Validators.required],
      alternateNo:[null],
      newPatient: [null, Validators.required],
      oldPatient: [null, Validators.required],
      consultFees: [null, Validators.required],
      payamenttype: [null, Validators.required],
      doctorNo: [null, Validators.required],
      bookingDate: [null, Validators.required],
      addressline1: [null, Validators.required],
      addressline2: [null],
      description: [null, Validators.required],
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.patientRegister.controls;
  }

  onSubmit() {
    this.submitted = true;
  }

}
