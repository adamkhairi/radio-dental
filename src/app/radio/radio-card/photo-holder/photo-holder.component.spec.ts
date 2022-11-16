import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoHolderComponent } from './photo-holder.component';

describe('PhotoHolderComponent', () => {
  let component: PhotoHolderComponent;
  let fixture: ComponentFixture<PhotoHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
