import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemoveComponent } from './pokemove.component';

describe('PokemoveComponent', () => {
  let component: PokemoveComponent;
  let fixture: ComponentFixture<PokemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
