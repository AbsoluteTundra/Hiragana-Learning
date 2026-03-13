import { ChangeDetectorRef, Component } from '@angular/core';
import { HiraganaDictionaryService } from '../hiragana-dictionary-service';

@Component({
  selector: 'app-quiz-component',
  imports: [],
  templateUrl: './quiz-component.html',
  styleUrl: './quiz-component.css',
})
export class QuizComponent {
  public pickedHiraganaSet?: [string, string][];
  public correctHiragana?: [string, string];
  public correctPairClicked: boolean = false;
  public answerClicked: boolean = false;

  constructor(
    public hiraganaDictionaryService: HiraganaDictionaryService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.setQuizAnswers();
  }

  public quizElementClicked(clickedPair: [string, string]) {
    if (this.correctHiragana == clickedPair) {
      this.correctPairClicked = true;
    }
    this.answerClicked = true;

    setTimeout(() => {
      this.setQuizAnswers()
      this.changeDetectorRef.detectChanges();
    }, 1000);
  }

  public setQuizAnswers() {
    this.pickedHiraganaSet = this.hiraganaDictionaryService.getMultipleRandomHiragana(4);
    this.correctHiragana =
      this.pickedHiraganaSet[Math.floor(Math.random() * this.pickedHiraganaSet.length)];

    this.answerClicked = false;
    this.correctPairClicked = false;
  }

  //TODO convert to class
  public getQuizElementColor(romajiPair: [string, string]): string {
    if (!this.answerClicked) {
      return '';
    } else if (romajiPair[0] === this.correctHiragana![0]) {
      return 'green';
    } else if (romajiPair[0] !== this.correctHiragana![0]) {
      return 'red';
    }

    return '';
  }
}
