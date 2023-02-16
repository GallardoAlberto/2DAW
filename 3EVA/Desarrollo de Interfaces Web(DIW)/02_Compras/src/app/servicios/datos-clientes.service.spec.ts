import { TestBed } from '@angular/core/testing';

import { DatosClientesService } from './datos-clientes.service';

describe('DatosClientesService', () => {
  let service: DatosClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
