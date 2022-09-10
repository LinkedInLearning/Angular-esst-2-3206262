import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list.component';
import { UserTypeDirective } from './user-type.directive';
import { UserRolePipe } from './user-role.pipe';



@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserTypeDirective,
    UserRolePipe
  ],
  exports: [
    UserComponent,
    UserTypeDirective,
    UserRolePipe
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
