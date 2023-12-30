import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { IWordCard, WordCardComponentComponent } from "../word-card-component/word-card-component.component";

import { WordService } from '../../services/word.service';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.less',
    imports: [WordCardComponentComponent]
})
export class HomeComponent {
  /**
   *
   */
  constructor(private wordService:WordService, private router: Router) {
    this.filteredWords = wordService.getAllWords();
  }
    /**
     * 
     */
  filteredWords: IWordCard[] 
    /**
     * 
     * @param text searching text
     */
  search(text:string){
    this.filteredWords = this.wordService.getAllWords().filter( word => word.word
                                  .toLocaleLowerCase()
                                  .includes(text.toLocaleLowerCase()))
  }
  navigateToDetails(id:number){
    this.router.navigate(['details', id])
    
  }
}

