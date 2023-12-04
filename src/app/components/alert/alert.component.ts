import { Component, Input } from '@angular/core';

type AlertType = 'success' | 'danger'
@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() message: string = "This is a message";
  @Input() title: string = "Ops...";
  @Input() alertType: AlertType = 'danger';
  @Input() isAutoClosing: boolean = false;
  @Input() autoClosingTimingSec: number = 5;
  timer: number = 5;

  isOpen: boolean = false;

  constructor() { }

  typeAlertClass(): string {
    switch (this.alertType) {
      case 'danger':
        return "border-red-700 text-red-700";
      case 'success':
        return "border-green-700 text-green-700";

    }
  }

  handleToggle(isOpen: boolean) {
    this.isOpen = isOpen;

    if (this.isOpen && this.isAutoClosing && this.autoClosingTimingSec > 0) {
      this.timer = this.autoClosingTimingSec;

      let intervalId = setInterval(() => {
        this.timer--;

        if(this.timer <= 0){
          this.isOpen = false;

          clearInterval(intervalId)
        }
      }, 1 * 1000)
    }
  }
}
