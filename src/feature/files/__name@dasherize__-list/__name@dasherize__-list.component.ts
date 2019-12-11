import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BaseComponent } from "@app/core/base/base.component";
import { HeaderService } from "@app/core/layout/header/header.service";
import { TranslationService } from "@app/core/services/translation/translation.service";
import { PermissionService } from "@core/services/permission/permission.service";
import { TranslateService } from "@ngx-translate/core";
import { NotificationModes } from "@zoomui/notification";
import { ZoomDataSource } from "@zoomui/table";
import { SubSink } from "subsink";

@Component({
    selector: 'hrcb-<%= dasherize(name) %>-list',
    templateUrl: './<%= dasherize(name) %>-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= classify(name) %>ListComponent extends BaseComponent implements OnInit, OnDestroy {
    showAddDialog = false;
    successMessage: string;
    notificationMode: string;
    translatedAddButtonText: string;

    private subs = new SubSink();

    constructor(
        private router: Router,
        private header: HeaderService,
        private permissionService: PermissionService,
        public translationService: TranslationService,
        public translate: TranslateService,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        super(translationService, translate);
    }

    getTranslatedTexts() {}

    setPageHeader() {}

    setNotifications() {
        this.notificationMode = NotificationModes.success;
        this.successMessage = window.history.state.data;
    }

    getAll<%= classify(name) %>Items() {}

    populateList(items: any[]) {
        this.detectNewChanges();
    }

    goToView(row: ZoomDataSource) {}

    add() {
        this.showAddDialog = true;
        this.successMessage = "";
    }

    onAddSuccess($event) {
        this.showAddDialog = false;
        this.successMessage = $event;
    }

    onAddDialogClose() {
        this.showAddDialog = false;
    }

    detectNewChanges() {
        this.changeDetectorRef.detectChanges();
    }

    ngOnInit() {
        this.getTranslatedTexts();
        this.setPageHeader();
        this.setNotifications();
        this.setListDetails();
        this.setTableHeader();
        this.getAll<%= classify(name) %>Items();
        this.checkPermission();
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }

    private setListDetails(): void {
    }

    private setTableHeader() {}

    private checkPermission() {}
}
