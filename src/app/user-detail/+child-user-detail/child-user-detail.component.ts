import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child-user-detail',
  template: `
    <h1>Hello from Child User Detail</h1>    
  `,
})
export class ChildDetailComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `ChildUserDetail` component');
  }

}
