import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithbalanceComponent } from './withbalance.component';

describe('WithbalanceComponent', () => {
  let component: WithbalanceComponent;
  let fixture: ComponentFixture<WithbalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithbalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
