import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewersComponent } from './reviewers.component';

describe('ReviewersComponent', () => {
  let component: ReviewersComponent;
  let fixture: ComponentFixture<ReviewersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewersComponent]
    });
    fixture = TestBed.createComponent(ReviewersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
