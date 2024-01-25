import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchesHomeComponent } from './branches-home/branches-home.component';

const routes: Routes = [{
  path: '',
  component: BranchesHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesRoutingModule { }
