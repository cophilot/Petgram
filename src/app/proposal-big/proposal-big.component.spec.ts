import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalBigComponent } from './proposal-big.component';

describe('ProposalBigComponent', () => {
  let component: ProposalBigComponent;
  let fixture: ComponentFixture<ProposalBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalBigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposalBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
