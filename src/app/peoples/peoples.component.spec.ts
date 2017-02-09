import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { PeoplesComponent } from './peoples.component';

describe('Peoples', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      // provide a better mock
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'peoples test expression'
            })
          }
        }
      },
      PeoplesComponent
    ]
  }));

  it('should log ngOnInit', inject([PeoplesComponent], (peoples: PeoplesComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    peoples.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
