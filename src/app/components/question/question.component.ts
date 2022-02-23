import { Component, OnInit } from '@angular/core';
import { WordType } from 'src/app/data/models';
import { WordsService } from 'src/app/services/words.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  word: WordType = null;
  constructor(private wordService: WordsService) { }

  ngOnInit(): void {
    this.fetchWord();
  }

  addToNouns(word: WordType) {
    this.wordService.addNoun(word);
    this.fetchWord();
  }

  addToVerbs(word: WordType) {
    this.wordService.addVerb(word);
    this.fetchWord();
  }
  check() {
    this.wordService.check();
  }

  private fetchWord() {
    this.word = this.wordService.getWords().shift();
  }

}
