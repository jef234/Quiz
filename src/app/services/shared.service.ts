import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private quizApiUrl = new BehaviorSubject('');
  sharedQuizApiUrl = this.quizApiUrl.asObservable();

  private regPct = new BehaviorSubject(0);
  sharedRegPct = this.regPct.asObservable();

  constructor() { }

  setQuizApiUrl(message: string) {
    this.quizApiUrl.next(message);
  }

  onRegPctChange(value: number) {
    this.regPct.next(value);
  }
}
