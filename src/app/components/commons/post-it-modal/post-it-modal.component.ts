import { Component } from '@angular/core';
import { goldHoveringBtn } from 'src/app/constants/buttons';

@Component({
  selector: 'post-it-modal',
  templateUrl: './post-it-modal.component.html',
  styleUrls: ['./post-it-modal.component.scss']
})
export class PostItModalComponent {
  goldHoveringBtn = goldHoveringBtn;
  protected actived: boolean = false

  close(){
    this.actived = false
  }

  open(){
    this.actived = true
  }
}
