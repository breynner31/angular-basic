import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroMovimientoComponent } from './cuadro-movimiento.component';

describe('CuadroMovimientoComponent', () => {
  let component: CuadroMovimientoComponent;
  let fixture: ComponentFixture<CuadroMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroMovimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadroMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
