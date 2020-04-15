import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  reg = 0;
  regPct = 0;
  game = 0;
  gamePct = 0;
  result = 0;
  resultPct = 0;
  quizApiUrl: string;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.initialiseProgressBar();
    this.sharedService.sharedQuizApiUrl.subscribe(value => this.quizApiUrl = value);
    this.sharedService.sharedRegPct.subscribe(value => this.regPct = value);
    this.sharedService.sharedGamePct.subscribe(value => this.gamePct = value);
    this.sharedService.sharedResultPct.subscribe(value => this.resultPct = value);
  }

  public initialiseProgressBar() {
    setTimeout(() => {
      if (this.reg < 100) {
        this.reg = this.reg + 1;
        this.regPct = this.reg / 3;
      } else if (this.game < 100) {
        this.game = this.game + 1;
        this.gamePct = this.game / 3;
      } else if (this.result < 100) {
        this.result = this.result + 1;
        this.resultPct = this.result / 3;
      }

      if (this.reg < 100 || this.game < 100 || this.result < 100) {
        this.initialiseProgressBar();
      } else if (this.reg === 100 && this.game === 100 && this.result === 100) {
        setTimeout(() => {
          this.reg = 0;
          this.regPct = 0;
          this.game = 0;
          this.gamePct = 0;
          this.result = 0;
          this.resultPct = 0;
        }, 1000);
      }
    }, 2.5);
  }

  onRegPctChange(value: number) {
    this.regPct = value;
  }

}
