import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'in-user-list',
  template: `
    <p>
      user-list works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
