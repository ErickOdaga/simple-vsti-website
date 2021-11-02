import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COURSESComponent } from './courses.component';

describe('COURSESComponent', () => {
  let component: COURSESComponent;
  let fixture: ComponentFixture<COURSESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COURSESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COURSESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
