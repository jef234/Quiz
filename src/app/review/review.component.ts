import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { ITest } from '../model/test';
import { IUserAns } from '../model/userAns';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  test: ITest;
  userAns: IUserAns;
  reviewedTest = 0;

  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.sharedTest.subscribe(value => this.test = value);
    this.sharedService.sharedUserAns.subscribe(value => {
      this.userAns = value;
      if (!this.userAns || this.userAns.answers.length !== this.test.results.length) {
        this.router.navigate(['/play']);
      }
    });
  }

  highlightAns(userAns: string, correcrAns: string, answer: string) {
    if (userAns === answer) {
      if (answer === correcrAns) {
        return 'text-success border-success';
      } else {
        return 'text-danger border-danger';
      }
    }
    return '';
  }

  onSectionChange(element: any) {
    this.reviewedTest += 1;
    element.target.classList.remove('border');
    element.target.classList.remove('border-secondary');
    this.sharedService.onResultPctChange((this.reviewedTest * 100 / this.test.results.length) / 3);
  }
}
