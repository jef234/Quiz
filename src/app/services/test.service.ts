import { Injectable } from '@angular/core';
import { ITest } from '../model/test';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class TestService {
    constructor(private http: HttpClient) { }

    getTests(quizApiUrl: string): Observable<ITest> {
        return this.http.get<ITest>(quizApiUrl);
    }
}
