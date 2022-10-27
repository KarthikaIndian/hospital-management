import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {
  private apiUrl = environment.API
  constructor() { }
}
