import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroPrincipalComponent } from './cuadro-principal.component';

describe('CuadroPrincipalComponent', () => {
  let component: CuadroPrincipalComponent;
  let fixture: ComponentFixture<CuadroPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadroPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
