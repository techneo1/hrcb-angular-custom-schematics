import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslationService } from "@app/core/services/translation/translation.service";
import { TableWithPaginationComponent } from "@app/shared/table-with-pagination/table-with-pagination.component";
import { TranslateModule } from "@ngx-translate/core";
import { OAuthModule } from "angular-oauth2-oidc";
import { MockComponents } from "ng-mocks";
import { Add<%= classify(name) %>Component } from "../add-<%= name %>/add-<%= name %>.component";
import { <%= classify(name) %>Service } from "../<%= name %>.service";
import { <%= classify(name) %>ListComponent } from "./<%= name %>-list.component";

describe("<%= classify(name) %>ListComponent", () => {
    let component: <%= classify(name) %>ListComponent;
    let fixture: ComponentFixture<<%= classify(name) %>ListComponent>;

    const zoomDependencies = [];
    const componentDependencies = [Add<%= classify(name) %>Component, TableWithPaginationComponent];

    const router = {
        navigate: jasmine.createSpy("navigate")
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [OAuthModule.forRoot(), TranslateModule.forRoot(), HttpClientTestingModule, RouterTestingModule],
            declarations: [<%= classify(name) %>ListComponent, MockComponents(...componentDependencies, ...zoomDependencies)],
            providers: [{ provide: Router, useValue: router }, <%= classify(name) %>Service, TranslationService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(<%= classify(name) %>ListComponent);
        component = fixture.componentInstance;
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    describe("Add button scenarios", () => {
        it("should open the add dialog when add() is called", () => {
            expect(component.showAddDialog).toBe(false, "closed at first");

            component.add();

            expect(component.showAddDialog).toBe(true, "open after call");
        });

        it("should close the add dialog when onAddDialogClose() is called", () => {
            component.showAddDialog = true;

            component.onAddDialogClose();

            expect(component.showAddDialog).toBe(false, "close after call");
        });
    });

    describe("List scenarios", () => {
        beforeEach(() => {});

        it("should fetch the list of items on load", () => {});

        it("should re-render the list items when a new item is sucessfully added", () => {});

        it("should navigate to proper route when clicked on a list item", () => {});
    });

    it("should populate marital status items in the table on load", () => {});
});
