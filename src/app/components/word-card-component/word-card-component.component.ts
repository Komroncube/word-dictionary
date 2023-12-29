import { Component } from '@angular/core';

@Component({
  selector: 'app-word-card-component',
  standalone: true,
  imports: [],
  templateUrl: './word-card-component.component.html',
  styleUrl: './word-card-component.component.less'
})
export class WordCardComponentComponent {
  word_card!: {
    word: string;
    translation: string;
    example: string;
    photo: string;
  };
}
