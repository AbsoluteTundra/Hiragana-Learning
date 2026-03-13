import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProgressTrackerService {

  correctAnswered:number =0;
  wronglyAnswered:number =0;
  answered:number =0;

  constructor() {

  }
}
