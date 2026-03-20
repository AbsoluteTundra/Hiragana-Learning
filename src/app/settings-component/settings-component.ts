import { Component } from '@angular/core';
import { HiraganaFamily } from '../hiragana-character-families';
import { HiraganaDictionaryService } from '../hiragana-dictionary-service';

@Component({
  selector: 'app-settings-component',
  imports: [],
  templateUrl: './settings-component.html',
  styleUrl: './settings-component.css'
})
export class SettingsComponent {
  public isOpen = false;

  constructor(public hiraganaDictionaryService: HiraganaDictionaryService) {
  }

  public toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  public IsVisible(): string {
    if (this.isOpen) {
      return 'flex';
    } else {
      return 'none';
    }
  }

  public isChecked(hiraganaFamily: HiraganaFamily) {
    return this.hiraganaDictionaryService.activeHiraganaFamily.includes(hiraganaFamily);
  }

  public toggle(state: boolean, hiraganaFamily: HiraganaFamily) {
    if (!state && this.hiraganaDictionaryService.activeHiraganaFamily.includes(hiraganaFamily)) {
      this.hiraganaDictionaryService.activeHiraganaFamily = this.hiraganaDictionaryService.activeHiraganaFamily.filter((hf: HiraganaFamily) => hf !== hiraganaFamily);
    } else if (state) {
      this.hiraganaDictionaryService.activeHiraganaFamily.push(hiraganaFamily);
    }
  }

  protected readonly Object = Object;
  protected readonly HiraganaFamily = HiraganaFamily;
}
