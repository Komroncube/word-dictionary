import { Component, Input } from '@angular/core';
import { IWordCard } from '../../iword-card';

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

export { IWordCard };

