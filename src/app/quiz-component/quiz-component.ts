import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { HiraganaDictionaryService } from '../hiragana-dictionary-service';
import { ProgressTrackerService } from '../progress-tracker-service';

@Component({
  selector: 'app-quiz-component',
  imports: [],
  templateUrl: './quiz-component.html',
  styleUrl: './quiz-component.css',
})
export class QuizComponent {
  pickedHiraganaSet = signal<[string, string][]>([]);
  correctHiragana = signal<[string, string] | undefined>(undefined);
  answerClicked = signal(false);
  correctPairClicked = signal(false);

  constructor(
    public hiraganaDictionaryService: HiraganaDictionaryService,
    public progressTrackerService: ProgressTrackerService,
  ) {
    this.setQuizAnswers();
  }

  public quizElementClicked(clickedPair: [string, string]) {
    if (this.correctHiragana() == clickedPair) {
      this.correctPairClicked.set(true);
      this.progressTrackerService.correctAnswered++;
    } else {
      this.progressTrackerService.wronglyAnswered++;
    }

    this.progressTrackerService.answered++;
    this.answerClicked.set(true);

    setTimeout(() => {
      this.setQuizAnswers();
    }, 1000);
  }

  public setQuizAnswers() {
    this.pickedHiraganaSet.set(this.hiraganaDictionaryService.getMultipleRandomHiragana(4));
    this.correctHiragana.set(this.pickedHiraganaSet()[Math.floor(Math.random() * this.pickedHiraganaSet().length)]);

    this.answerClicked.set(false);
    this.correctPairClicked.set(false);
  }

  public getQuizElementColor(romajiPair: [string, string]): string {
    if (!this.answerClicked()) {
      return 'answer';
    } else if (romajiPair[0] === this.correctHiragana()![0]) {
      return 'answer correct-answer';
    } else if (romajiPair[0] !== this.correctHiragana()![0]) {
      return 'answer wrong-answer';
    }

    return 'answer';
  }
}
