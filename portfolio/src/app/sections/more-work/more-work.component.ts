import { Component } from '@angular/core';
import { Projects } from 'src/app/content/projects';

@Component({
  selector: 'app-more-work',
  templateUrl: './more-work.component.html',
  styleUrls: ['./more-work.component.scss']
})
export class MoreWorkComponent {

  public projects = Projects;

}
