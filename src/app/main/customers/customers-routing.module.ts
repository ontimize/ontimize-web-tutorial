import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersHomeComponent } from './customers-home/customers-home.component';

const routes: Routes = [{
  path: '',
  component: CustomersHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
