import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupComponent } from './setup/setup.component';
import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuizGuardService } from './services/quizGuard.service';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: 'welcome', component: SetupComponent },
  { path: 'play', canActivate: [QuizGuardService], component: TestComponent },
  { path: 'review', canActivate: [QuizGuardService], component: ReviewComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
