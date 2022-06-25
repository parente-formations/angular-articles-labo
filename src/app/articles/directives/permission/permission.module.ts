import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CheckPermissionDirective } from "./check-permission.directive";
import { PermissionRoutingModule } from "./permission-routing.module";
import { PermissionService } from "./services/permission.service";
import { PermissionComponent } from "./use-case/permission.component";

@NgModule({
  imports: [PermissionRoutingModule, CommonModule],
  declarations: [PermissionComponent, CheckPermissionDirective],
  providers: [PermissionService],
})
export class PermissionModule {}
