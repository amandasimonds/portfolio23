import { Component } from '@angular/core'

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
    public showMoreAboutMeIsOpen = false

    public toggleShowMoreAboutMe() {
        this.showMoreAboutMeIsOpen = !this.showMoreAboutMeIsOpen
    }

    public techSkills = [
        'Angular',
        'TypeScript',
        'HTML',
        'SCSS',
        'JavaScript',
        'React',
        'AWS',
        'TailwindCSS',
        'Figma',
        'Storybook',
        'Git',
        'Azure',
    ]
}
