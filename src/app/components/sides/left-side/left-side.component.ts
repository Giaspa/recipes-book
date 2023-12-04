import { Component } from '@angular/core';
import { goldHoveringBtn, outlineButton } from 'src/app/constants/buttons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss']
})
export class LeftSideComponent {
  outlineButton = outlineButton;
  goldHoveringBtn = goldHoveringBtn;
  
  constructor(readonly authService: AuthService){

  }

}
