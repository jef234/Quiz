import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable()
export class QuizGuardService implements CanActivate {
    quizApiUrl: string;

    constructor(private router: Router, private sharedService: SharedService) {
    this.sharedService.sharedQuizApiUrl.subscribe(value => this.quizApiUrl = value);
    }

    canActivate(): boolean {
        if (this.quizApiUrl === '') {
            // alert('Quiz not started');
            this.router.navigate(['/welcome']);
            return false;
        }
        return true;
    }

}
