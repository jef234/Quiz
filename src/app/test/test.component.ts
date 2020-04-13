import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  message: string;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.sharedQuizApiUrl.subscribe(value => this.message = value);
  }




}
