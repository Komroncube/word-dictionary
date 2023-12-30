import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordService } from '../../services/word.service';
import { IWordCard } from '../../iword-card';
import { WordCardComponentComponent } from "../word-card-component/word-card-component.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-details',
    standalone: true,
    templateUrl: './details.component.html',
    styleUrl: './details.component.less',
    imports: [WordCardComponentComponent, ReactiveFormsModule]
})
export class DetailsComponent {
/**
 *
 */
  word?: IWordCard;
  /**
   * 
   */
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    comment: new FormControl('')
  })
  /**
   * 
   * @param route 
   * @param wordService 
   */
  constructor(private route:ActivatedRoute, private wordService:WordService) {
    const wordId:string = this.route.snapshot.params['id']
    this.word = wordService.getWordById(+wordId)
  }

  send(){
    this.wordService.sendData(this.form.value.name, this.form.value.comment)

  }
}
