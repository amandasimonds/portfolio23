import { Component } from '@angular/core';
import { Projects } from 'src/app/content/projects';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

  public projects = Projects;


}
