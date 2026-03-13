import { Routes } from '@angular/router';
import { QuizComponent } from './quiz-component/quiz-component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: QuizComponent
  },
];
