import { Injectable } from '@nestjs/common';
import { Card } from 'src/interfaces/card.interface';

@Injectable()
export class CardsService {
    getCards():Promise<Card[]> {
        const cards = [
            {id: 1, question: 'What is the language of the web?', answer: 'JavaScript'},
            {id: 2, question: 'What is the the coolest job?', answer: 'Programmer'}
        ];
        return new Promise(resolve => {
            resolve(cards);
        })
    }
}
