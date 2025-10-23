import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceCard } from './ambulance-card';

describe('AmbulanceCard', () => {
  let component: AmbulanceCard;
  let fixture: ComponentFixture<AmbulanceCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmbulanceCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbulanceCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
