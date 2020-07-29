import { Component } from '@angular/core';

export interface Card{
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle = true

  cards: Card[] = [
    {title: 'Card 1', text: '1: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, incidunt?'},
    {title: 'Card 2', text: '2: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, incidunt?'},
    {title: 'Card 3', text: '3: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, incidunt?'}
  ]

  toggleCards(){
    this.toggle = !this.toggle
  }
}
