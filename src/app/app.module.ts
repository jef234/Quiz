import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TestComponent } from './test/test.component';
import { SetupComponent } from './setup/setup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedService } from './services/shared.service';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { QuizGuardService } from './services/quizGuard.service';
import { TestService } from './services/test.service';
import { ReviewComponent } from './review/review.component';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import { ScrollSpyDirective } from './directives/scroll-spy.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    TestComponent,
    SetupComponent,
    PageNotFoundComponent,
    ProgressBarComponent,
    ReviewComponent,
    SafeHtmlPipe,
    ScrollSpyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SharedService, QuizGuardService, TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
