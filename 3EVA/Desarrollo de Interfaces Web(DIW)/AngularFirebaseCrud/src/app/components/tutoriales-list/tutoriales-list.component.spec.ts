import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialesListComponent } from './tutoriales-list.component';

describe('TutorialesListComponent', () => {
  let component: TutorialesListComponent;
  let fixture: ComponentFixture<TutorialesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
