import { Component } from '@angular/core';
import { Experience } from 'src/app/content/experience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {

  public experience = Experience;

}
