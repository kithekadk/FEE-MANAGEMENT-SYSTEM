import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutbalanceComponent } from './withoutbalance.component';

describe('WithoutbalanceComponent', () => {
  let component: WithoutbalanceComponent;
  let fixture: ComponentFixture<WithoutbalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutbalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
