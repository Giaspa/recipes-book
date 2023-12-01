import { Component, Input } from '@angular/core';

@Component({
  selector: 'book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent {
  @Input() isRight: boolean = false;

}
