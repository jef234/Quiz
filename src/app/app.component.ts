import { Component } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quick Quiz';
  reg = 0;
  regPercentage = 0;
  game = 0;
  gamePercentage = 0;
  result = 0;
  resultPercentage = 0;

  public timeout() {
    setTimeout(() => {
      if (this.reg < 100) {
        this.reg = this.reg + 1;
        this.regPercentage = this.reg / 3;
      } else if (this.game < 100) {
        this.game = this.game + 1;
        this.gamePercentage = this.game / 3;
      } else if (this.result < 100) {
        this.result = this.result + 1;
        this.resultPercentage = this.result / 3;
      }

      if (this.reg < 100 || this.game < 100 || this.result < 100) {
        this.timeout();
      }
    }, 100);
  }

  constructor() {
    // this.timeout();
  }

  onRegPercentageChange(value: number) {
    this.regPercentage = value;
  }
}
