import { Component, Input } from '@angular/core';

export interface IWordCard {
  id:number;
  word: string;
  translation: string;
  example: string;
  photo: string;
};

@Component({
  selector: 'app-word-card-component',
  standalone: true,
  imports: [],
  templateUrl: './word-card-component.component.html',
  styleUrl: './word-card-component.component.less'
})
export class WordCardComponentComponent {
  @Input()
  word_card!:IWordCard
}

