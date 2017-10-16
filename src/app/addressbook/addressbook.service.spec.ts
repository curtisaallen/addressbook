import { TestBed, inject } from '@angular/core/testing';

import { AddressbookService } from './addressbook.service';

describe('AddressbookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressbookService]
    });
  });

  it('should be created', inject([AddressbookService], (service: AddressbookService) => {
    expect(service).toBeTruthy();
  }));
});
