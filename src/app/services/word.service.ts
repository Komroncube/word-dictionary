import { Injectable } from '@angular/core';
import { IWordCard } from '../iword-card';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor() { }
  url:string = "http://localhost:3000/words"

  async getAllWords() : Promise<IWordCard[]> {
    const data = await fetch(this.url)
    return (await data.json()) ?? []
  }
  async getWordById(id:number): Promise<IWordCard> {
    const data = await fetch(`${this.url}/${id}`)
    return (await data.json())
  }
  sendData(fio:string, comment:string){
    alert(`${fio}: ${comment}`)
  }
}
