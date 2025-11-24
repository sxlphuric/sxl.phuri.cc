import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkButtons } from './link-buttons';

describe('LinkButtons', () => {
  let component: LinkButtons;
  let fixture: ComponentFixture<LinkButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
