import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsHomeComponent } from './accounts-home/accounts-home.component';

const routes: Routes = [{
  path: '',
  component: AccountsHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
