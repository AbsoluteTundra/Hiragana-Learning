# Hiragana Quiz — Angular Learning Project

_An interactive quiz app for learning the Hiragana alphabet, built with Angular as a hands-on project to explore core Angular concepts._

---

## About

This project is a flashcard-style quiz that presents a romaji pronunciation and asks the user to identify the correct hiragana character from four options. It was built to learn Angular by building something practical and engaging.

## Features

- Full hiragana coverage — vowels, consonant rows, dakuten, handakuten, and combination characters (youon)
- Randomised 4-option multiple choice for every question
- Instant visual feedback — correct answer highlighted green, wrong answers red
- Automatically advances to the next question after 1 second
- Fully reactive UI using Angular change detection

## Angular Concepts Explored

This project covers several core Angular topics:

### Components

`QuizComponent` is a standalone component defined with the `@Component` decorator. It owns its template (`quiz-component.html`) and styles (`quiz-component.css`).

### Services & Dependency Injection

`HiraganaDictionaryService` is a root-level injectable service that owns all hiragana data and selection logic. It is injected into the component via constructor injection.

### Template Syntax

- `@for` — iterates over the four answer options to render table cells
- `[style.background-color]` — property binding for dynamic colour feedback
- `(click)` — event binding to handle user selection
- `{{ }}` — interpolation for displaying the romaji prompt and hiragana options

### Change Detection

`ChangeDetectorRef` is injected and `detectChanges()` is called manually after the delayed question reset inside a `setTimeout` callback, ensuring the view updates outside Angular's default zone.

### Unit Testing

Both the component and the service have spec files using Jasmine and the Angular TestBed, providing a foundation for expanding test coverage.

## Project Structure

- `quiz-component.ts` — Component logic: answer selection, colour feedback, question cycling
- `quiz-component.html` — Template with prompt display and answer grid
- `quiz-component.css` — Layout and styling for the quiz cards
- `hiragana-dictionary-service.ts` — All hiragana/romaji data and random selection helpers
- `quiz-component.spec.ts` / `hiragana-dictionary-service.spec.ts` — Unit test scaffolding

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- Angular CLI: `npm install -g @angular/cli`

### Run locally

1. `git clone <your-repo-url>`
2. `cd <project-folder> && npm install`
3. `ng serve` — then open `http://localhost:4200`

### Run tests

```bash
ng test
```

## Possible Next Steps

- Score tracking and a results screen
- Difficulty filtering (e.g. basic kana only, or dakuten only)
- Reverse mode — show the hiragana, guess the romaji
- Spaced repetition to prioritise characters you get wrong
- Katakana support
- Refactor `getQuizElementColor()` to use CSS classes instead of inline styles

---

_Built to learn Angular — contributions and suggestions welcome!_
