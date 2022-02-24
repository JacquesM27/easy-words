import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WordType } from 'src/app/data/models';
import { WordsService } from 'src/app/services/words.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {

  word: WordType = null;
  private words: WordType[] = [];
  private subscription: Subscription;

  constructor(private wordService: WordsService) { }

  ngOnInit(): void {
    ///można też zrobić this.subscription = ...
    const sub = this.wordService.getWords().subscribe((words: WordType[]) => {
      this.words = words;
      this.fetchWord();
    })
    this.subscription.add(sub);
  }

  addToNouns(word: WordType) {
    this.wordService.addNoun(word);
    this.fetchWord();
  }

  addToVerbs(word: WordType) {
    this.wordService.addVerb(word);
    this.fetchWord();
  }

  private fetchWord() {
    this.word = this.words.shift();
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
