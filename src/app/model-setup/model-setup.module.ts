import { NgModule, Inject, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ModelSetupModule {
  constructor(@Inject(String) public triviaAmount: string, @Inject(String) public triviaCategory: string,
              @Inject(String)public triviaDifficulty: string, @Inject(String) public triviaType: string) { }
}
