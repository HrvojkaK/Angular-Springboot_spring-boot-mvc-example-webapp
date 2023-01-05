import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { UpdateMemberComponent } from './components/update-member/update-member.component';

const routes: Routes = [
  {path:"member-list",
   component: MemberListComponent},
   {path:"add-member",
   component: AddMemberComponent},
   {path:"update-member/:id",
   component: UpdateMemberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
