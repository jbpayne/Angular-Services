import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewerComponentComponent } from './newer-component.component';

describe('NewerComponentComponent', () => {
  let component: NewerComponentComponent;
  let fixture: ComponentFixture<NewerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
