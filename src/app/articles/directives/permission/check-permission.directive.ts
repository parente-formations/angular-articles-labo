import {
  Directive,
  Input,
  SkipSelf,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { PermissionService } from "./services/permission.service";

@Directive({
  selector: "[checkPermission]",
})
export class CheckPermissionDirective {
  @Input()
  public set checkPermission(permissions: string | string[]) {
    this.check(permissions);
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    @SkipSelf() private permissionService: PermissionService
  ) {}

  private check(permissions: string | string[]): void {
    switch (typeof permissions) {
      case "string":
        this.updateView(this.permissionService.verify(permissions));
        break;

      case "object":
        this.updateView(this.checkIfHasPermission(permissions));
        break;
    }
  }

  private checkIfHasPermission(permissions: string[]) {
    return permissions.some((permission) =>
      this.permissionService.verify(permission)
    );
  }

  private updateView(hasPermission: boolean): void {
    if (hasPermission) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
