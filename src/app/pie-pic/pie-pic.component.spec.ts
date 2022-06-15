import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiePicComponent } from './pie-pic.component';

describe('PiePicComponent', () => {
  let component: PiePicComponent;
  let fixture: ComponentFixture<PiePicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiePicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
