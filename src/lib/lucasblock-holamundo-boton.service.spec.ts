import { TestBed } from '@angular/core/testing';

import { LucasblockHolamundoBotonService } from './lucasblock-holamundo-boton.service';

describe('LucasblockHolamundoBotonService', () => {
  let service: LucasblockHolamundoBotonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LucasblockHolamundoBotonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
