import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { CustomerSettingsService } from "@app/core/services/customersettings/customer-settings.service";
import { PermissionService } from "@app/core/services/permission/permission.service";
import { TranslateModule } from "@ngx-translate/core";
import { OAuthModule } from "angular-oauth2-oidc";
import { MockComponents, MockPipes } from "ng-mocks";
import { LanguageTranslationService } from "../../language-translation/language-translation.service";

describe("View<%= classify(name) %>Component", () => {
    let fixture: ComponentFixture<View<%= classify(name) %>Component>;
    let component: View<%= classify(name) %>Component;

    const zoomDependencies = [];
    const componentDependencies = [];
    const dependentPipes = [];

    describe("Success scenarios", () => {
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [
                    View<%= classify(name) %>Component,
                    MockComponents(...componentDependencies, ...zoomDependencies),
                    MockPipes(...dependentPipes)
                ],
                imports: [
                    OAuthModule.forRoot(),
                    TranslateModule.forRoot(),
                    HttpClientTestingModule,
                    RouterTestingModule
                ],
                providers: [PermissionService, LanguageTranslationService, CustomerSettingsService]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(View<%= classify(name) %>Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it("should create component", () => {
            expect(component).toBeTruthy();
        });
    });
});
