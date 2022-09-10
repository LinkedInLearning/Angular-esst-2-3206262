import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import {UserAuthGuard} from "../user/user-auth.guard";

const routes: Routes = [
  { path: ''
    , component: ProductComponent, canActivate: [UserAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
