import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceDetails } from './ambulance-details';

describe('AmbulanceDetails', () => {
  let component: AmbulanceDetails;
  let fixture: ComponentFixture<AmbulanceDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmbulanceDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbulanceDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
