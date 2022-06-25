import { Component, VERSION } from "@angular/core";
import { PermissionService } from "../services/permission.service";

@Component({
  selector: "permission-article",
  templateUrl: "./permission.component.html",
  styleUrls: ["./permission.component.css"],
})
export class PermissionComponent {
  public title = `Angular ${VERSION.major} Custom Directive`;
  public showResult: boolean = false;

  constructor(private permissionService: PermissionService) {}

  public onAdminClick(): void {
    this.prepareUserPermission(["read", "write", "remove"]);
  }

  public onReadClick(): void {
    this.prepareUserPermission("read");
  }

  public onWriteClick(): void {
    this.prepareUserPermission("write");
  }

  public onRemoveClick(): void {
    this.prepareUserPermission("remove");
  }

  public onMultipleClick(): void {
    this.prepareUserPermission(["buy", "sell"]);
  }

  private prepareUserPermission(permissions: string | string[]): void {
    this.showResult = false;
    this.permissionService.setUserPermission(permissions);
    setTimeout(() => {
      this.showResult = true;
    }, 100);
  }
}
