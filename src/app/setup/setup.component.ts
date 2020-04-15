import { Component, OnInit } from '@angular/core';
import { ModelSetupModule } from '../model/model-setup.module';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  regPct: number;
  reg = 0;
  ta = false;
  tc = false;
  td = false;
  tt = false;
  playTime = 20;
  quizApiUrl: string;

  model = new ModelSetupModule('10', 'any', 'any', 'any');

  constructor(private router: Router, private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.sharedService.sharedQuizApiUrl.subscribe(value => this.quizApiUrl = value);
    this.sharedService.sharedRegPct.subscribe(value => this.regPct = value);

    if (this.regPct === 0) {
      setTimeout(() => {
        (document.getElementById('btnSubmit') as HTMLInputElement).disabled = true;
      }, 1);
      setTimeout(() => {
        (document.getElementById('btnSubmit') as HTMLInputElement).disabled = false;
      }, 3500);
    }
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
    if (stepflag === 1) {
      this.reg = this.reg + 25;
      this.regPct = this.reg / 3;
      this.sharedService.onRegPctChange(this.regPct);
    }
  }

  submitForm(form: NgForm) {
    const { trivia_amount, trivia_category, trivia_difficulty, trivia_type } = form.value;

    this.quizApiUrl = `https://opentdb.com/api.php?amount=${trivia_amount}`;
    if (trivia_category !== 'any') {
      this.quizApiUrl += `&category=${trivia_category}`;
    }
    if (trivia_difficulty !== 'any') {
      this.quizApiUrl += `&difficulty=${trivia_difficulty}`;
    }
    if (trivia_type !== 'any') {
      this.quizApiUrl += `&type=${trivia_type}`;
    }

    this.sharedService.setQuizApiUrl(this.quizApiUrl);
    this.sharedService.onRegPctChange(100 / 3);
    this.sharedService.onGamePctChange(0);
    this.sharedService.onResultPctChange(0);
    this.router.navigate(['/play']);
  }

}
