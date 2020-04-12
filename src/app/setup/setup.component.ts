import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  @Input() regPercentage: number;
  reg = 0;
  ta = false;
  tc = false;
  td = false;
  tt = false;
  playTime = 20;

  @Output() regPercentageChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  updatePlayTime(value: number) {
    this.playTime = value * 2;
  }

  completeStep(name: string) {
    let stepflag = 0;
    if (name === 'trivia_amount' && this.ta === false) {
      stepflag = 1;
      this.ta = true;
    } else if (name === 'trivia_category' && this.tc === false) {
      stepflag = 1;
      this.tc = true;
    } else if (name === 'trivia_difficulty' && this.td === false) {
      stepflag = 1;
      this.td = true;
    } else if (name === 'trivia_type' && this.tt === false) {
      stepflag = 1;
      this.tt = true;
    }
    if (stepflag === 1){
      this.reg = this.reg + 25;
      this.regPercentage = this.reg / 3;
      this.regPercentageChange.emit(`${this.regPercentage}`);
    }
  }

}
