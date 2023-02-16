import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjdirectivastykeComponent } from './ejdirectivastyke.component';

describe('EjdirectivastykeComponent', () => {
  let component: EjdirectivastykeComponent;
  let fixture: ComponentFixture<EjdirectivastykeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjdirectivastykeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjdirectivastykeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
