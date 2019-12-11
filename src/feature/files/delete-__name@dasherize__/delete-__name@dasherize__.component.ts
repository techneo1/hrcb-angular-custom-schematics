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
import { Router } from "@angular/router";
import { BaseComponent } from "@app/core/base/base.component";
import { TranslationService } from "@app/core/services/translation/translation.service";
import { NotificationService } from "@core/services/notification/notification.service";
import { SystemSetting } from "@feeditems/system-settings/system-settings.model";
import { TranslateService } from "@ngx-translate/core";
import { ZoomButtonComponent } from "@zoomui/button";
import { NotificationModes } from "@zoomui/notification";
import { SubSink } from "subsink";

@Component({
    selector: 'hrcb-delete-<%= dasherize(name) %>',
    templateUrl: './delete-<%= dasherize(name) %>.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Delete<%= classify(name) %>Component extends BaseComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChildren(ZoomButtonComponent) buttons: QueryList<ZoomButtonComponent>;
    @Output() close = new EventEmitter();
    @Input() <%= classify(name) %>: SystemSetting;
    @Input() raetId: string;

    isOpened = true;
    notificationMode: string;
    errorMessage = "";
    deleteForm: FormGroup;
    dialogConfirmButton: ZoomButtonComponent;

    private subs = new SubSink();

    constructor(
        private notificationService: NotificationService,
        private router: Router,
        private changeDetectorRef: ChangeDetectorRef,
        public translationService: TranslationService,
        public translate: TranslateService
    ) {
        super(translationService, translate);
    }

    getTranslatedTexts() {}

    onDeleteConfirm() {}

    onDeleteCancel() {
        this.close.emit(null);
        this.errorMessage = "";
    }

    showButtonProcess() {
        this.dialogConfirmButton.isLoading = true;
    }

    hideButtonProcess() {
        this.dialogConfirmButton.isLoading = false;
    }

    detectNewChanges() {
        this.changeDetectorRef.detectChanges();
    }

    ngOnInit() {
        this.deleteForm = new FormGroup({});

        this.setNotifications();
        this.getTranslatedTexts();
    }

    ngAfterViewInit() {
        const allButtonsInTheTemplate: ZoomButtonComponent[] = this.buttons.toArray();
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }

    private setNotifications(): void {
        this.notificationMode = NotificationModes.alert;

        this.subs.add(
            this.notificationService.errorMessage.subscribe((message) => {
                this.errorMessage = message;
            })
        );
    }
}
