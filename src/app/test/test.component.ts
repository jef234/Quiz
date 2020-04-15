import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { TestService } from '../services/test.service';
import { ITest } from '../model/test';
import { IUserAns } from '../model/userAns';
import { Router } from '@angular/router';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private quizApiUrl: string;
  test: ITest;
  userAns: IUserAns;
  currTest = 0;
  gamePct = 0;

  constructor(private router: Router, private sharedService: SharedService, private testService: TestService) { }

  ngOnInit(): void {
    this.sharedService.onGamePctChange(0);
    this.sharedService.sharedQuizApiUrl.subscribe(value => this.quizApiUrl = value);
    this.testService.getTests(this.quizApiUrl).subscribe((data: ITest) => {
      this.test = data;
      if (this.test.response_code !== 0) {
        this.router.navigate(['/welcome']);
      }
      for (const result of this.test.results) {
        result.incorrect_answers = this.suffleAnswers(result.correct_answer, result.incorrect_answers);
      }
    });
    this.userAns = {
      score: 0,
      answers: [],
    };
  }

  suffleAnswers(correctAns: string, incorrectAns: string[]) {
    const arr = incorrectAns;
    arr.push(correctAns);
    let m = arr.length;
    let temp = '';
    let i = 0;

    while (m) {
      i = Math.floor(Math.random() * m--);
      temp = arr[m];
      arr[m] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }

  validateAnswer(userAns) {
    this.userAns.answers.push(userAns);

    if (userAns === this.test.results[this.currTest].correct_answer) {
      this.userAns.score += 1;
    }

    if (this.currTest < this.test.results.length - 1) {
      this.currTest += 1;
      this.sharedService.onGamePctChange((this.currTest / this.test.results.length * 100) / 3);
    } else {
      this.sharedService.setTest(this.test);
      this.sharedService.setUserAns(this.userAns);
      this.sharedService.onGamePctChange(100 / 3);
      this.sharedService.onResultPctChange(0);
      this.router.navigate(['/review']);
    }
  }

}
