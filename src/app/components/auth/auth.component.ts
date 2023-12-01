import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  formGroup!: FormGroup

  constructor(
    readonly authService: AuthService
  ){}
  
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  login(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value)
    } else {
      this.formGroup.markAllAsTouched()
    }
  }
}
