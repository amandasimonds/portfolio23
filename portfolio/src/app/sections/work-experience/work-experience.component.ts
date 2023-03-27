import { Component } from '@angular/core';
import { Experience } from 'src/app/content/experience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {

  public experience = Experience;
  public getExperienceTitles = this.experience.map(i => i.company);
  public activatedTab = 0;
  public activatedExperience = this.experience[this.activatedTab];

  public tabChangeEvent(tabIndex: number) {
    this.activatedTab = tabIndex;
    this.activatedExperience = this.experience[tabIndex];
  }
}
