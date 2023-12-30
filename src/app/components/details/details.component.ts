import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordService } from '../../services/word.service';
import { IWordCard } from '../../iword-card';
import { WordCardComponentComponent } from "../word-card-component/word-card-component.component";

@Component({
    selector: 'app-details',
    standalone: true,
    templateUrl: './details.component.html',
    styleUrl: './details.component.less',
    imports: [WordCardComponentComponent]
})
export class DetailsComponent {
/**
 *
 */
  word?: IWordCard;
  constructor(private route:ActivatedRoute, private wordService:WordService) {
    const wordId:string = this.route.snapshot.params['id']
    this.word = wordService.getWordById(+wordId)
  }
}
