import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerComponent } from './jobseeker.component';

describe('JobseekerComponent', () => {
  let component: JobseekerComponent;
  let fixture: ComponentFixture<JobseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobseekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
