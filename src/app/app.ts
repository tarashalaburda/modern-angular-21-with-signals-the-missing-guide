import { Component, signal } from '@angular/core';
import { Progress } from './components/progress/progress';
import { Done } from './components/done/done';
import { QuestionPresenter } from './components/question-presenter/question-presenter';
import { Question } from './models/question.model';

@Component({
  selector: 'app-root',
  imports: [Progress, Done, QuestionPresenter, Progress],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly question = signal<Question>({
    caption: 'How much is 4 + 4?',
    answers: ['4', '6', '8', '12'],
    correctAnswerIndex: 2,
  });
}
