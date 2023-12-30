import { Injectable } from '@angular/core';
import { IWordCard } from '../iword-card';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor() { }
  words: IWordCard[] = [
      
    {
      id: 1,
      word: "apple",
      translation: "olma",
      example: "I enjoy eating a juicy apple.",
      photo: "../assets/apple.jpg"
    },
      {
      id: 2,
      word: 'car',
      translation: 'avtomobil',
      example: 'He drives a fast and sleek car.',
      photo: '../assets/car.jpg'
      },
      {
      id: 3,
      word: 'house',
      translation: 'uy',
      example: 'Our family lives in a beautiful house.',
      photo: '../assets/house.jpg'
      },
      {
      id: 4,
      word: 'cat',
      translation: 'mushuk',
      example: 'The cat is sleeping on the windowsill.',
      photo: '../assets/cat.jpg'
      },
      {
      id: 5,
      word: 'dog',
      translation: 'it',
      example: 'A loyal dog is a wonderful companion.',
      photo: '../assets/dog.jpg'
      },
      {
      id: 6,
      word: 'sun',
      translation: 'quyosh',
      example: 'The sun rises in the east.',
      photo: '../assets/sun.jpg'
      },
      {
      id: 7,
      word: 'moon',
      translation: 'oy',
      example: 'The moon shines brightly in the night sky.',
      photo: '../assets/moon.jpg'
      },
      {
      id: 8,
      word: 'book',
      translation: 'kitob',
      example: 'I am reading an interesting book.',
      photo: '../assets/book.png'
      },
      {
      id: 9,
      word: 'computer',
      translation: 'kompyuter',
      example: 'I use a computer for work and entertainment.',
      photo: '../assets/computer.jpg'
      },
      {
      id: 10,
      word: 'tree',
      translation: 'daraxt',
      example: 'The birds are singing in the tree.',
      photo: '../assets/tree.jpg'
      }
  ];

  getAllWords(){
    return this.words;
  }
  getWordById(id:number) {
    return this.words.find(x => x.id===id)
  }
}
