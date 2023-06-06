import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseLetterComponent } from './choose-letter.component';

describe('ChooseLetterComponent', () => {
  let component: ChooseLetterComponent;
  let fixture: ComponentFixture<ChooseLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
