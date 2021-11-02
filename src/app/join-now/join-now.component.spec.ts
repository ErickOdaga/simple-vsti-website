import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JOINNOWComponent } from './join-now.component';

describe('JOINNOWComponent', () => {
  let component: JOINNOWComponent;
  let fixture: ComponentFixture<JOINNOWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JOINNOWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JOINNOWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
