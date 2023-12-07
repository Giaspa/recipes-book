import { Component } from '@angular/core';
import { goldHoveringBtn } from 'src/app/constants/buttons';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  goldHoveringBtn = goldHoveringBtn;
  protected actived: boolean = false

  close(){
    this.actived = false
  }

  open(){
    this.actived = true
  }
}
