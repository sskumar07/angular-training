import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputCpComponent } from './output-cp.component';

describe('OutputCpComponent', () => {
  let component: OutputCpComponent;
  let fixture: ComponentFixture<OutputCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputCpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
