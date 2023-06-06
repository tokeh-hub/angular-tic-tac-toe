import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TieModalComponent } from './tie-modal.component';

describe('TieModalComponent', () => {
  let component: TieModalComponent;
  let fixture: ComponentFixture<TieModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TieModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
