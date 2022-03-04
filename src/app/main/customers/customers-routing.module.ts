import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsDetailComponent } from '../accounts/accounts-detail/accounts-detail.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { CustomersNewComponent } from './customers-new/customers-new.component';


const routes: Routes = [{
  path: '',
  component: CustomersHomeComponent
},
{
  path: "new",
  component: CustomersNewComponent
},
{
  path: ":CUSTOMERID",
  component: CustomersDetailComponent
},
{
  path: ":CUSTOMERID/:ACCOUNTID",
  component: AccountsDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
