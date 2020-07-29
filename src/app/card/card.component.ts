import {Component, OnInit, Input} from '@angular/core'
import { Card } from '../app.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit{

    @Input() card: Card

    @Input() index: number

    cardDate: Date = new Date()

    obj = {name: "Ivan", info: {age: 21, job: 'Fullstack'}}

    getJob(){
        return this.obj.info.job;
    }

    imgUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png'

    ngOnInit() {
        setTimeout(()=>{
            this.imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9nrhIyRoO1jeci1MMFbs2ACP0uTW_6kNrlA&usqp=CAU'
        }, 3000)
    }

    changeTitle(){
        this.card.title = 'New Title'
    }

    inputHandler(value){
        //const value = event.target.value
        this.card.title = value
    }

    textColor: string

}