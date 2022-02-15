import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaInfoComponent } from './tea-info.component';

describe('TeaInfoComponent', () => {
  let component: TeaInfoComponent;
  let fixture: ComponentFixture<TeaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
