import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NettrekComponent } from './nettrek.component';

describe('NettrekComponent', () => {
  let component: NettrekComponent;
  let fixture: ComponentFixture<NettrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NettrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NettrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
