import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreWorkComponent } from './more-work.component';

describe('MoreWorkComponent', () => {
  let component: MoreWorkComponent;
  let fixture: ComponentFixture<MoreWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
