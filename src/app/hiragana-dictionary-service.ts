import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HiraganaDictionaryService {
  public hiraganaToRomajiMapping: Map<string, string> = new Map<string, string>([
    // Vowels
    ['あ', 'a'],
    ['い', 'i'],
    ['う', 'u'],
    ['え', 'e'],
    ['お', 'o'],

    // K-row
    ['か', 'ka'],
    ['き', 'ki'],
    ['く', 'ku'],
    ['け', 'ke'],
    ['こ', 'ko'],

    // S-row
    ['さ', 'sa'],
    ['し', 'shi'],
    ['す', 'su'],
    ['せ', 'se'],
    ['そ', 'so'],

    // T-row
    ['た', 'ta'],
    ['ち', 'chi'],
    ['つ', 'tsu'],
    ['て', 'te'],
    ['と', 'to'],

    // N-row
    ['な', 'na'],
    ['に', 'ni'],
    ['ぬ', 'nu'],
    ['ね', 'ne'],
    ['の', 'no'],

    // H-row
    ['は', 'ha'],
    ['ひ', 'hi'],
    ['ふ', 'fu'],
    ['へ', 'he'],
    ['ほ', 'ho'],

    // M-row
    ['ま', 'ma'],
    ['み', 'mi'],
    ['む', 'mu'],
    ['め', 'me'],
    ['も', 'mo'],

    // Y-row
    ['や', 'ya'],
    ['ゆ', 'yu'],
    ['よ', 'yo'],

    // R-row
    ['ら', 'ra'],
    ['り', 'ri'],
    ['る', 'ru'],
    ['れ', 're'],
    ['ろ', 'ro'],

    // W-row
    ['わ', 'wa'],
    ['を', 'wo'],

    // N
    ['ん', 'n'],

    // Dakuten (voiced)
    ['が', 'ga'],
    ['ぎ', 'gi'],
    ['ぐ', 'gu'],
    ['げ', 'ge'],
    ['ご', 'go'],
    ['ざ', 'za'],
    ['じ', 'ji'],
    ['ず', 'zu'],
    ['ぜ', 'ze'],
    ['ぞ', 'zo'],
    ['だ', 'da'],
    ['ぢ', 'ji'],
    ['づ', 'zu'],
    ['で', 'de'],
    ['ど', 'do'],
    ['ば', 'ba'],
    ['び', 'bi'],
    ['ぶ', 'bu'],
    ['べ', 'be'],
    ['ぼ', 'bo'],

    // Handakuten (p-sounds)
    ['ぱ', 'pa'],
    ['ぴ', 'pi'],
    ['ぷ', 'pu'],
    ['ぺ', 'pe'],
    ['ぽ', 'po'],

    // Combination characters (youon)
    ['きゃ', 'kya'],
    ['きゅ', 'kyu'],
    ['きょ', 'kyo'],
    ['しゃ', 'sha'],
    ['しゅ', 'shu'],
    ['しょ', 'sho'],
    ['ちゃ', 'cha'],
    ['ちゅ', 'chu'],
    ['ちょ', 'cho'],
    ['にゃ', 'nya'],
    ['にゅ', 'nyu'],
    ['にょ', 'nyo'],
    ['ひゃ', 'hya'],
    ['ひゅ', 'hyu'],
    ['ひょ', 'hyo'],
    ['みゃ', 'mya'],
    ['みゅ', 'myu'],
    ['みょ', 'myo'],
    ['りゃ', 'rya'],
    ['りゅ', 'ryu'],
    ['りょ', 'ryo'],
    ['ぎゃ', 'gya'],
    ['ぎゅ', 'gyu'],
    ['ぎょ', 'gyo'],
    ['じゃ', 'ja'],
    ['じゅ', 'ju'],
    ['じょ', 'jo'],
    ['びゃ', 'bya'],
    ['びゅ', 'byu'],
    ['びょ', 'byo'],
    ['ぴゃ', 'pya'],
    ['ぴゅ', 'pyu'],
    ['ぴょ', 'pyo'],
  ]);

  public getRandomHiraganaEntry(): string {
    return Array.from(this.hiraganaToRomajiMapping.keys())[
      Math.floor(Math.random() * this.hiraganaToRomajiMapping.size)
    ];
  }

  public getRandomRomajiEntry(): string {
    return Array.from(this.hiraganaToRomajiMapping.values())[
      Math.floor(Math.random() * this.hiraganaToRomajiMapping.size)
    ];
  }

  public getMultipleRandomHiragana(amount:number): [string,string][]
  {
    let hiraganaRomajiPairs:Set<[string,string]> = new Set();
    let hiraganaToRomajiMappingArray = Array.from(this.hiraganaToRomajiMapping);

    while (hiraganaRomajiPairs.size !== amount && hiraganaRomajiPairs.size !== hiraganaToRomajiMappingArray.length) {
      hiraganaRomajiPairs.add(hiraganaToRomajiMappingArray[Math.floor(Math.random() * hiraganaToRomajiMappingArray.length)],);
    }

    return Array.from(hiraganaRomajiPairs);
  }
}
