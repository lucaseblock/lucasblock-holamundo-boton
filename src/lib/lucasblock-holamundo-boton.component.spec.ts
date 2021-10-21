import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucasblockHolamundoBotonComponent } from './lucasblock-holamundo-boton.component';

describe('LucasblockHolamundoBotonComponent', () => {
  let component: LucasblockHolamundoBotonComponent;
  let fixture: ComponentFixture<LucasblockHolamundoBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LucasblockHolamundoBotonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LucasblockHolamundoBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
