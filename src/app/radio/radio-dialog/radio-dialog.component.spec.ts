import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RadioDialogComponent} from './radio-dialog.component';

describe('RadioDialogComponent', () => {
  let component: RadioDialogComponent;
  let fixture: ComponentFixture<RadioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadioDialogComponent]
    })
        .compileComponents();

    fixture = TestBed.createComponent(RadioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
