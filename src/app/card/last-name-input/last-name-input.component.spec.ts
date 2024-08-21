import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNameInputComponent } from './last-name-input.component';

describe('LastNameInputComponent', () => {
  let component: LastNameInputComponent;
  let fixture: ComponentFixture<LastNameInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastNameInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastNameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
