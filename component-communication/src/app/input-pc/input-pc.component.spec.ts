import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPCComponent } from './input-pc.component';

describe('InputPCComponent', () => {
  let component: InputPCComponent;
  let fixture: ComponentFixture<InputPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
