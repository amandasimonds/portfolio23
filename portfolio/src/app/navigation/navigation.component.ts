import { Component } from '@angular/core'
import { Icons } from '../components/icons/github-icon'
@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
    public githubIcon = Icons.github;
    public navMenuOpen = false;

    public toggleMobileNavMenu() {
        this.navMenuOpen = !this.navMenuOpen
    }
}
