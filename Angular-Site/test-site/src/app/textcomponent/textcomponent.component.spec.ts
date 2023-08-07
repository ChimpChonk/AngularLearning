import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextcomponentComponent } from './textcomponent.component';

describe('TextcomponentComponent', () => {
  let component: TextcomponentComponent;
  let fixture: ComponentFixture<TextcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextcomponentComponent]
    });
    fixture = TestBed.createComponent(TextcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
