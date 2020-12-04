import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxObstracleComponent } from './box-obstracle.component';

describe('BoxObstracleComponent', () => {
  let component: BoxObstracleComponent;
  let fixture: ComponentFixture<BoxObstracleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxObstracleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxObstracleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
