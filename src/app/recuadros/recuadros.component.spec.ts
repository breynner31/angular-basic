import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuadrosComponent } from './recuadros.component';

describe('RecuadrosComponent', () => {
  let component: RecuadrosComponent;
  let fixture: ComponentFixture<RecuadrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuadrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuadrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
