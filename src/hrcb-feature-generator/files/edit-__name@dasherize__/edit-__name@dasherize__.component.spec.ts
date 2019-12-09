import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { EditFieldTranslationComponent } from "@feeditems/system-settings/language-translation/edit-field-translation/edit-field-translation.component";
import { TranslateModule } from "@ngx-translate/core";
import { ZoomButtonComponent } from "@zoomui/button";
import { ZoomConfirmationComponent } from "@zoomui/confirmation";
import { ZoomDialogComponent } from "@zoomui/dialog";
import { ZoomFormModule } from "@zoomui/form";
import { ZoomNotificationComponent } from "@zoomui/notification";
import { MockComponents } from "ng-mocks";

describe("Edit<%= classify(name) %>Component", () => {
    let component: Edit<%= classify(name) %>Component;
    let fixture: ComponentFixture<Edit<%= classify(name) %>Component>;

    const zoomDependencies = [
        ZoomNotificationComponent,
        ZoomButtonComponent,
        ZoomConfirmationComponent,
        ZoomDialogComponent
    ];
    const componentDependencies = [EditFieldTranslationComponent];

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TranslateModule.forRoot(), HttpClientTestingModule, ReactiveFormsModule, ZoomFormModule],
            declarations: [Edit<%= classify(name) %>Component, MockComponents(...componentDependencies, ...zoomDependencies)],
            providers: [<%= classify(name) %>Service]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(Edit<%= classify(name) %>Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
