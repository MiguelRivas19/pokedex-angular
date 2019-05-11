import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokespecieComponent } from './pokespecie.component';

describe('PokespecieComponent', () => {
  let component: PokespecieComponent;
  let fixture: ComponentFixture<PokespecieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokespecieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokespecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
