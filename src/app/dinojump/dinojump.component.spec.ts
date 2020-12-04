import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinojumpComponent } from './dinojump.component';

describe('DinojumpComponent', () => {
  let component: DinojumpComponent;
  let fixture: ComponentFixture<DinojumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinojumpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinojumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
