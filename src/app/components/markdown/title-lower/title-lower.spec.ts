import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleLower } from './title-lower';

describe('TitleLower', () => {
  let component: TitleLower;
  let fixture: ComponentFixture<TitleLower>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleLower]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleLower);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
