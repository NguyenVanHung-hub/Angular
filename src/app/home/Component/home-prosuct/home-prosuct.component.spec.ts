import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProsuctComponent } from './home-prosuct.component';

describe('HomeProsuctComponent', () => {
  let component: HomeProsuctComponent;
  let fixture: ComponentFixture<HomeProsuctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProsuctComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProsuctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
