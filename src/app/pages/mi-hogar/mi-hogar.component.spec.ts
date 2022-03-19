import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiHogarComponent } from './mi-hogar.component';

describe('MiHogarComponent', () => {
  let component: MiHogarComponent;
  let fixture: ComponentFixture<MiHogarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiHogarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiHogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
