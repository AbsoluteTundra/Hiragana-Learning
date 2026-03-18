import { Injectable } from '@angular/core';
import { HiraganaFamily } from './hiragana-character-families';

@Injectable({
  providedIn: 'root',
})
export class HiraganaDictionaryService {
  public hiraganaToRomajiMapping: [string, string, HiraganaFamily][] = [
    // Vowels
    ['あ', 'a', HiraganaFamily.Vowels],
    ['い', 'i', HiraganaFamily.Vowels],
    ['う', 'u', HiraganaFamily.Vowels],
    ['え', 'e', HiraganaFamily.Vowels],
    ['お', 'o', HiraganaFamily.Vowels],

    // K-row
    ['か', 'ka', HiraganaFamily.K],
    ['き', 'ki', HiraganaFamily.K],
    ['く', 'ku', HiraganaFamily.K],
    ['け', 'ke', HiraganaFamily.K],
    ['こ', 'ko', HiraganaFamily.K],

    // S-row
    ['さ', 'sa', HiraganaFamily.S],
    ['し', 'shi', HiraganaFamily.S],
    ['す', 'su', HiraganaFamily.S],
    ['せ', 'se', HiraganaFamily.S],
    ['そ', 'so', HiraganaFamily.S],

    // T-row
    ['た', 'ta', HiraganaFamily.T],
    ['ち', 'chi', HiraganaFamily.T],
    ['つ', 'tsu', HiraganaFamily.T],
    ['て', 'te', HiraganaFamily.T],
    ['と', 'to', HiraganaFamily.T],

    // N-row
    ['な', 'na', HiraganaFamily.N],
    ['に', 'ni', HiraganaFamily.N],
    ['ぬ', 'nu', HiraganaFamily.N],
    ['ね', 'ne', HiraganaFamily.N],
    ['の', 'no', HiraganaFamily.N],

    // H-row
    ['は', 'ha', HiraganaFamily.H],
    ['ひ', 'hi', HiraganaFamily.H],
    ['ふ', 'fu', HiraganaFamily.H],
    ['へ', 'he', HiraganaFamily.H],
    ['ほ', 'ho', HiraganaFamily.H],

    // M-row
    ['ま', 'ma', HiraganaFamily.M],
    ['み', 'mi', HiraganaFamily.M],
    ['む', 'mu', HiraganaFamily.M],
    ['め', 'me', HiraganaFamily.M],
    ['も', 'mo', HiraganaFamily.M],

    // Y-row
    ['や', 'ya', HiraganaFamily.Y],
    ['ゆ', 'yu', HiraganaFamily.Y],
    ['よ', 'yo', HiraganaFamily.Y],

    // R-row
    ['ら', 'ra', HiraganaFamily.R],
    ['り', 'ri', HiraganaFamily.R],
    ['る', 'ru', HiraganaFamily.R],
    ['れ', 're', HiraganaFamily.R],
    ['ろ', 'ro', HiraganaFamily.R],

    // W-row
    ['わ', 'wa', HiraganaFamily.W],
    ['を', 'wo', HiraganaFamily.W],

    // N
    ['ん', 'n', HiraganaFamily.N_standalone],

    // Dakuten (voiced)
    ['が', 'ga', HiraganaFamily.Dakuten],
    ['ぎ', 'gi', HiraganaFamily.Dakuten],
    ['ぐ', 'gu', HiraganaFamily.Dakuten],
    ['げ', 'ge', HiraganaFamily.Dakuten],
    ['ご', 'go', HiraganaFamily.Dakuten],
    ['ざ', 'za', HiraganaFamily.Dakuten],
    ['じ', 'ji', HiraganaFamily.Dakuten],
    ['ず', 'zu', HiraganaFamily.Dakuten],
    ['ぜ', 'ze', HiraganaFamily.Dakuten],
    ['ぞ', 'zo', HiraganaFamily.Dakuten],
    ['だ', 'da', HiraganaFamily.Dakuten],
    ['ぢ', 'ji', HiraganaFamily.Dakuten],
    ['づ', 'zu', HiraganaFamily.Dakuten],
    ['で', 'de', HiraganaFamily.Dakuten],
    ['ど', 'do', HiraganaFamily.Dakuten],
    ['ば', 'ba', HiraganaFamily.Dakuten],
    ['び', 'bi', HiraganaFamily.Dakuten],
    ['ぶ', 'bu', HiraganaFamily.Dakuten],
    ['べ', 'be', HiraganaFamily.Dakuten],
    ['ぼ', 'bo', HiraganaFamily.Dakuten],

    // Handakuten (p-sounds)
    ['ぱ', 'pa', HiraganaFamily.Handakuten],
    ['ぴ', 'pi', HiraganaFamily.Handakuten],
    ['ぷ', 'pu', HiraganaFamily.Handakuten],
    ['ぺ', 'pe', HiraganaFamily.Handakuten],
    ['ぽ', 'po', HiraganaFamily.Handakuten],

    // Combination characters (youon)
    ['きゃ', 'kya', HiraganaFamily.Youon],
    ['きゅ', 'kyu', HiraganaFamily.Youon],
    ['きょ', 'kyo', HiraganaFamily.Youon],
    ['しゃ', 'sha', HiraganaFamily.Youon],
    ['しゅ', 'shu', HiraganaFamily.Youon],
    ['しょ', 'sho', HiraganaFamily.Youon],
    ['ちゃ', 'cha', HiraganaFamily.Youon],
    ['ちゅ', 'chu', HiraganaFamily.Youon],
    ['ちょ', 'cho', HiraganaFamily.Youon],
    ['にゃ', 'nya', HiraganaFamily.Youon],
    ['にゅ', 'nyu', HiraganaFamily.Youon],
    ['にょ', 'nyo', HiraganaFamily.Youon],
    ['ひゃ', 'hya', HiraganaFamily.Youon],
    ['ひゅ', 'hyu', HiraganaFamily.Youon],
    ['ひょ', 'hyo', HiraganaFamily.Youon],
    ['みゃ', 'mya', HiraganaFamily.Youon],
    ['みゅ', 'myu', HiraganaFamily.Youon],
    ['みょ', 'myo', HiraganaFamily.Youon],
    ['りゃ', 'rya', HiraganaFamily.Youon],
    ['りゅ', 'ryu', HiraganaFamily.Youon],
    ['りょ', 'ryo', HiraganaFamily.Youon],
    ['ぎゃ', 'gya', HiraganaFamily.Youon],
    ['ぎゅ', 'gyu', HiraganaFamily.Youon],
    ['ぎょ', 'gyo', HiraganaFamily.Youon],
    ['じゃ', 'ja', HiraganaFamily.Youon],
    ['じゅ', 'ju', HiraganaFamily.Youon],
    ['じょ', 'jo', HiraganaFamily.Youon],
    ['びゃ', 'bya', HiraganaFamily.Youon],
    ['びゅ', 'byu', HiraganaFamily.Youon],
    ['びょ', 'byo', HiraganaFamily.Youon],
    ['ぴゃ', 'pya', HiraganaFamily.Youon],
    ['ぴゅ', 'pyu', HiraganaFamily.Youon],
    ['ぴょ', 'pyo', HiraganaFamily.Youon],
  ];

  public getRandomHiraganaEntry(): string {
    return this.hiraganaToRomajiMapping[Math.floor(Math.random() * this.hiraganaToRomajiMapping.length)][0];
  }

  public getRandomRomajiEntry(): string {
    return this.hiraganaToRomajiMapping[Math.floor(Math.random() * this.hiraganaToRomajiMapping.length)][1];
  }

  public getMultipleRandomHiragana(amount: number): [string, string, HiraganaFamily][] {
    let hiraganaRomajiPairs: Set<[string, string, HiraganaFamily]> = new Set();
    let hiraganaToRomajiMappingArray = Array.from(this.hiraganaToRomajiMapping);

    while (hiraganaRomajiPairs.size !== amount && hiraganaRomajiPairs.size !== hiraganaToRomajiMappingArray.length) {
      let selectedAnswer = hiraganaToRomajiMappingArray[Math.floor(Math.random() * hiraganaToRomajiMappingArray.length)];
      hiraganaRomajiPairs.add(selectedAnswer);
    }

    return Array.from(hiraganaRomajiPairs);
  }
}
