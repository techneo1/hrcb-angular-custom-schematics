import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { ZoomFormModule } from "@zoomui/form";
import { MockComponents } from "ng-mocks";

describe("Edit<%= classify(name) %>Component", () => {
    let component: Edit<%= classify(name) %>Component;
    let fixture: ComponentFixture<Edit<%= classify(name) %>Component>;

    const zoomDependencies = [];
    const componentDependencies = [];

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
