import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeitrittForm } from './beitritt-form';

describe('BeitrittForm', () => {
  let component: BeitrittForm;
  let fixture: ComponentFixture<BeitrittForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeitrittForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeitrittForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
