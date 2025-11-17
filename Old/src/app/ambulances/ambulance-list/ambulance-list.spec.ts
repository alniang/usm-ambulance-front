import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceList } from './ambulance-list';

describe('AmbulanceList', () => {
  let component: AmbulanceList;
  let fixture: ComponentFixture<AmbulanceList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmbulanceList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbulanceList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
