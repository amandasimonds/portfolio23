import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
    @Input() tabsArray = [''];
    @Output() onTabChange = new EventEmitter<number>();
    public activatedTab = 0;

    public setTab(tabIndex: number) {
        this.activatedTab = tabIndex;
        this.onTabChange.emit(tabIndex);
    }
}
