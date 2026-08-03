import { Component, inject } from '@angular/core';
import { Progress } from './components/progress/progress';
import { Done } from './components/done/done';
import { QuestionPresenter } from './components/question-presenter/question-presenter';
import { ExamService } from './services/exam.service';

@Component({
  selector: 'app-root',
  imports: [Progress, Done, QuestionPresenter, Progress],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly store = inject(ExamService);

}
