import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivVtkComponent } from './div-vtk.component';

describe('DivVtkComponent', () => {
  let component: DivVtkComponent;
  let fixture: ComponentFixture<DivVtkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivVtkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivVtkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
