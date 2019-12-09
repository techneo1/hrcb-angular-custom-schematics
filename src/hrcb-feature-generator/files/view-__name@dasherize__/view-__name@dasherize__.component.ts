import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from "@angular/core";
import { BaseComponent } from "@app/core/base/base.component";
import { CustomerSettingsService } from "@app/core/services/customersettings/customer-settings.service";
import { SystemListService } from "@app/core/services/systemlist/system-list.service";
import { PermissionService } from "@core/services/permission/permission.service";
import { TranslationService } from "@core/services/translation/translation.service";
import { EditFieldTranslationComponent } from "@feeditems/system-settings/language-translation/edit-field-translation/edit-field-translation.component";
import { TranslateService } from "@ngx-translate/core";
import { ZoomOutputComponent } from "@zoomui/output";
import { Observable } from "rxjs";
import { SubSink } from "subsink";
import { ZoomSelectOption } from "../../language-translation/language-translation.model";

@Component({
  selector: 'hrcb-<%= name %>',
  templateUrl: './<%= name %>.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class View<%= classify(name) %>Component extends BaseComponent
  implements OnInit, OnDestroy {
  @ViewChild("editTranslationComponent", { static: false })
  editTranslation: EditFieldTranslationComponent;
  @ViewChildren(ZoomOutputComponent) outputs: QueryList<ZoomOutputComponent>;

  private subs = new SubSink();
  showEditDialog = false;
  showDeleteDialog = false;

  successMessage: string;
  errorMessage: string;

  languages: ZoomSelectOption[];
  defaultLanguage: string;

  constructor(
    private permissionService: PermissionService,
    public translationService: TranslationService,
    public translate: TranslateService,
    private changeDetectorRef: ChangeDetectorRef,
    private systemListService: SystemListService,
    private customerSettingsService: CustomerSettingsService
  ) {
    super(translationService, translate);
  }

  getTranslatedTexts() {}

  edit() {
    this.clearNotifications();
    this.showEditDialog = true;
  }

  onEditSuccess($event) {
    this.showEditDialog = false;
    this.successMessage = $event;
  }

  onEditDialogClose() {
    this.showEditDialog = false;
    this.clearNotifications();
  }

  delete() {
    this.clearNotifications();
    this.showDeleteDialog = true;
  }

  onDeleteDialogClose() {
    this.showDeleteDialog = false;
    this.clearNotifications();
  }

  clearNotifications() {
    this.successMessage = "";
    this.errorMessage = "";
  }

  detectNewChanges() {
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.clearNotifications();
    this.subs.unsubscribe();
  }

  private setLanguages() {
    this.subs.add(
      this.customerSettingsService
        .getLanguageByCulture()
        .subscribe(allCultures => {
          this.translateLanguages(allCultures);
          this.detectNewChanges();
        })
    );
  }

  private translateLanguages(allCultures) {
    for (const item of allCultures) {
      item.name = this.translationService.getInstantTranslation(item.name);
    }
    this.languages = allCultures;
  }

  private setNotifications(): void {}

  private setDefaultLanguage() {
    this.subs.add(
      this.systemListService.getDefaultLanguage().subscribe((language: any) => {
        this.defaultLanguage = language;
        this.detectNewChanges();
      })
    );
  }

  private checkPermission() {}

  private userHasPermission(permissionName: string): Observable<boolean> {
    return this.permissionService.hasPermission([permissionName]);
  }
}
