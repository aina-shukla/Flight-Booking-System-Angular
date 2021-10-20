import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinesregisterComponent } from './airlinesregister.component';

describe('AirlinesregisterComponent', () => {
  let component: AirlinesregisterComponent;
  let fixture: ComponentFixture<AirlinesregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlinesregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinesregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
