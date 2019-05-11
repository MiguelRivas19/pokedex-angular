import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeabilityComponent } from './pokeability.component';

describe('PokeabilityComponent', () => {
  let component: PokeabilityComponent;
  let fixture: ComponentFixture<PokeabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
