import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
    @Input() cardStyle: '' | 'primary' | 'glow' = '';

    public get getCardStyle(): string {
        return `card-${this.cardStyle}`
    }
}
