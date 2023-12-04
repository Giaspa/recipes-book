import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @ViewChild(AlertComponent) alert!: AlertComponent;
  formGroup!: FormGroup

  constructor(
    readonly authService: AuthService
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  login() {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value)
    } else {
      this.formGroup.markAllAsTouched()
    }
  }

  signUp() {
    this.alert.alertType = 'danger';
    this.alert.title = 'Ops...'
    this.alert.message = 'The registration block is still to be implemented...'
    this.alert.isAutoClosing = true;

    this.alert.handleToggle(true)
  }
}
