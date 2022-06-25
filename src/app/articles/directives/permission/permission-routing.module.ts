import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PermissionComponent } from "./use-case/permission.component";

const routes: Routes = [
  {
    path: "",
    component: PermissionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class PermissionRoutingModule {}
