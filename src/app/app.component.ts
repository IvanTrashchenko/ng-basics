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
    {title: 'Card 1', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, incidunt?'},
    {title: 'Card 2', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, incidunt?'},
    {title: 'Card 3', text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, incidunt?'}
  ]

  toggleCards(){
    this.toggle = !this.toggle
  }
}
