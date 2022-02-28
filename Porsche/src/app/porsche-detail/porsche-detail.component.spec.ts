import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorscheDetailComponent } from './porsche-detail.component';

describe('PorscheDetailComponent', () => {
  let component: PorscheDetailComponent;
  let fixture: ComponentFixture<PorscheDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorscheDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorscheDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
