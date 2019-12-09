import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from "@angular/core";
import { BaseComponent } from "@app/core/base/base.component";
import { TranslationService } from "@app/core/services/translation/translation.service";
import { EditFieldTranslationComponent } from "@feeditems/system-settings/language-translation/edit-field-translation/edit-field-translation.component";
import { Culture, ZoomSelectOption } from "@feeditems/system-settings/language-translation/language-translation.model";
import { LanguageTranslationService } from "@feeditems/system-settings/language-translation/language-translation.service";
import { TranslateService } from "@ngx-translate/core";
import { ZoomButtonComponent } from "@zoomui/button";
import { NotificationModes } from "@zoomui/notification";
import { SubSink } from "subsink";

@Component({
    selector: 'hrcb-<%= name %>',
    templateUrl: './<%= name %>.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Edit<%= classify(name) %>Component extends BaseComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("editTranslationComponent", { static: false })
  editTranslation: EditFieldTranslationComponent;
  @ViewChildren(ZoomButtonComponent) buttons: QueryList<ZoomButtonComponent>;
  @Output() close = new EventEmitter();
  @Output() success = new EventEmitter<string>();
  // @Input() <%= classify(name) %>: SystemSetting;
  @Input() translations: Culture[];
  @Input() languages: ZoomSelectOption[];
  @Input() raetId: string;

  private subs = new SubSink();

  constructor(
      private languageTranslationService: LanguageTranslationService,
      private changeDetectorRef: ChangeDetectorRef,
      public translationService: TranslationService,
      public translate: TranslateService
  ) {
      super(translationService, translate);
  }

  getTranslatedTexts() {}

  onEditConfirm() {}

  showButtonProcess() {
      this.dialogConfirmButton.isLoading = true;
  }

  hideButtonProcess() {
      this.dialogConfirmButton.isLoading = false;
  }

  onEditCancel() {
      this.close.emit(null);
  }

  onEditClose() {
      if (this.hasFormChanged() || this.hasTranslationsChanged) {
          this.showConfirmationDialog = true;
      } else {
          this.onEditCancel();
      }
  }

  onCloseConfirmationDialog(discardChange: boolean) {
      if (discardChange) {
          this.onEditCancel();
      } else {
          this.showConfirmationDialog = false;
      }
  }

  addLocalizations() {}

  updateLocalizations() {}

  deleteLocalizations() {}

  handleLocalizations() {
      this.addLocalizations();
      this.updateLocalizations();
      this.deleteLocalizations();
  }

  updateTranslationChange(translationChanged: Culture) {}

  detectNewChanges() {
      this.changeDetectorRef.detectChanges();
  }

  hasFormChanged() {
      return this.editForm.dirty;
  }

  ngOnInit() {
      this.notificationMode = NotificationModes.alert;
      this.initForm();
      this.getTranslatedTexts();
  }

  ngAfterViewInit() {
      const allButtonsInTheTemplate: ZoomButtonComponent[] = this.buttons.toArray();
      this.dialogConfirmButton = this.<%= classify(name) %>Service.getComponentByRaetId(
          allButtonsInTheTemplate,
          "EditDialogConfirmButton"
      );
  }

  areFieldsEmpty(): boolean {
      if (!!this.editForm.controls.FullName.value.trim() && this.editForm.valid) {
          return true;
      }
      return false;
  }

  ngOnDestroy() {
      this.errorMessage = "";
      this.subs.unsubscribe();
  }

  private initForm() {}
}
