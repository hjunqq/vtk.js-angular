import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullVtkComponent } from './full-vtk.component';

describe('FullVtkComponent', () => {
  let component: FullVtkComponent;
  let fixture: ComponentFixture<FullVtkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullVtkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullVtkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
