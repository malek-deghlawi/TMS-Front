import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTaskFromComponent } from './sub-task-from.component';

describe('SubTaskFromComponent', () => {
  let component: SubTaskFromComponent;
  let fixture: ComponentFixture<SubTaskFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTaskFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTaskFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
