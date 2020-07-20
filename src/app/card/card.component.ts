import {Component, OnInit} from '@angular/core'

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit{

    title = "Title variable"

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
        this.title = 'New Title'
    }

    inputHandler(event: any){
        const value = event.target.value
        this.title = value
    }
}