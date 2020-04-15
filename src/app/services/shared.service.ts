import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITest } from '../model/test';
import { IUserAns } from '../model/userAns';

@Injectable()
export class SharedService {

  private quizApiUrl = new BehaviorSubject('');
  sharedQuizApiUrl = this.quizApiUrl.asObservable();

  private regPct = new BehaviorSubject(0);
  sharedRegPct = this.regPct.asObservable();

  Itest: ITest;
  private test = new BehaviorSubject(this.Itest);
  sharedTest = this.test.asObservable();

  IuserAns: IUserAns;
  private userAns = new BehaviorSubject(this.IuserAns);
  sharedUserAns = this.userAns.asObservable();

  private gamePct = new BehaviorSubject(0);
  sharedGamePct = this.gamePct.asObservable();

  private resultPct = new BehaviorSubject(0);
  sharedResultPct = this.resultPct.asObservable();

  constructor() { }

  setQuizApiUrl(message: string) {
    this.quizApiUrl.next(message);
  }

  onRegPctChange(value: number) {
    this.regPct.next(value);
  }

  setTest(Test: ITest) {
    this.test.next(Test);
  }

  setUserAns(userAns: IUserAns) {
    this.userAns.next(userAns);
  }

  onGamePctChange(value: number) {
    this.gamePct.next(value);
  }

  onResultPctChange(value: number) {
    this.resultPct.next(value);
  }
}
