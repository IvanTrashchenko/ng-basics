import {Component} from '@angular/core'

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent{

    title = "Title variable"

    obj = {name: "Ivan", info: {age: 21, job: 'Fullstack'}}

    getJob(){
        return this.obj.info.job;
    }

    imgUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png'
}