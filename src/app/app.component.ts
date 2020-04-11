import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quiz';
  public Reg: number = 0;
  public Reg_Percentage: number = 0;
  public Game: number = 0;
  public Game_Percentage: number = 0;
  public Result: number = 0;
  public Result_Percentage: number = 0;
  public n: number = 1;

  public timeout() {
    setTimeout(() => {
      if (this.Reg < 100){
        this.Reg = this.Reg + 1;
        this.Reg_Percentage= this.Reg/3
      } else if(this.Game < 100){
        this.Game = this.Game + 1;
        this.Game_Percentage= this.Game/3
      } else if(this.Result < 100){
        this.Result = this.Result + 1;
        this.Result_Percentage= this.Result/3
      }
      
      if (this.Reg < 100 || this.Game < 100 || this.Result < 100){
        this.timeout();
      }
    }, 100);
  }

  constructor() {
    console.log(`Fun1 Jef`);
    let decimal: number=1000;

    this.timeout();

    console.log(`Fun1 Jef2`);
  }

}
