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
  ViewChildren
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BaseComponent } from "@app/core/base/base.component";
import { TranslationService } from "@app/core/services/translation/translation.service";
import { TranslateService } from "@ngx-translate/core";
import { ZoomButtonComponent } from "@zoomui/button";
import { NotificationModes } from "@zoomui/notification";
import { SubSink } from "subsink";

@Component({
  selector: 'hrcb-<%= name %>',
  templateUrl: './<%= name %>.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Add<%= classify(name) %>Component extends BaseComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(ZoomButtonComponent) buttons: QueryList<ZoomButtonComponent>;
  @Input() raetId: string;
  @Output() close = new EventEmitter();
  @Output() success = new EventEmitter<string>();

  dialogConfirmButton: ZoomButtonComponent;
  addForm: FormGroup;
  showConfirmationDialog: boolean = false;
  notificationMode: string;
  errorMessage: string;

  private subs = new SubSink();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public translationService: TranslationService,
    public translate: TranslateService
  ) {
    super(translationService, translate);
  }

  getTranslatedTexts() {}

  onAddConfirm() {}

  showButtonProcess() {
    this.dialogConfirmButton.isLoading = true;
  }

  hideButtonProcess() {
    this.dialogConfirmButton.isLoading = false;
  }

  isFormValid() {
    return this.addForm.valid;
  }

  onAddCancel() {
    this.close.emit(null);
  }

  onAddClose() {
    if (this.hasFormChanged()) {
      this.showConfirmationDialog = true;
    } else {
      this.onAddCancel();
    }
  }

  onCloseConfirmationDialog(discardChange: boolean) {
    if (discardChange) {
      this.resetForm();
      this.onAddCancel();
    } else {
      this.showConfirmationDialog = false;
    }
  }

  resetForm() {
    this.addForm.reset();
    this.addForm.controls.Active.setValue(true);
  }

  hasFormChanged(): boolean {
    if (
      this.addForm.dirty &&
      !!this.addForm.controls.FullName.value &&
      !!this.addForm.controls.ShortName.value &&
      (!!this.addForm.controls.Active.value as boolean)
    ) {
      return true;
    } else {
      return false;
    }
  }

  areFieldsEmpty(): boolean {
    if (
      !!this.addForm.controls.FullName.value &&
      !!this.addForm.controls.ShortName.value
    ) {
      if (
        this.addForm.valid &&
        !!this.addForm.controls.FullName.value.trim() &&
        !!this.addForm.controls.ShortName.value.trim()
      ) {
        return true;
      }
    }
    return false;
  }

  detectNewChanges() {
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit() {
    this.notificationMode = NotificationModes.alert;
    this.initForm();
    this.getTranslatedTexts();
  }

  ngAfterViewInit() {}

  ngOnDestroy() {
    this.errorMessage = "";
    this.subs.unsubscribe();
  }

  private initForm() {}
}
