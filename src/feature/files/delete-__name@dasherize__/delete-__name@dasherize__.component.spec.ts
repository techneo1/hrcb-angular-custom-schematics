import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from "@ngx-translate/core";
import { ZoomFormModule } from "@zoomui/form";
import { MockComponents } from "ng-mocks";
import { Delete<%= classify(name) %>Component } from './delete-<%= dasherize(name) %>.component';
import { <%= classify(name) %>Service } from '../<%= dasherize(name) %>.service';

describe("Delete<%= classify(name) %>Component", () => {
    let component: Delete<%= classify(name) %>Component;
    let fixture: ComponentFixture<Delete<%= classify(name) %>Component>;

    const zoomDependencies = [];
    const componentDependencies = [];

    const router = {
        navigate: jasmine.createSpy("navigate")
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
                HttpClientTestingModule,
                RouterTestingModule,
                ReactiveFormsModule,
                ZoomFormModule
            ],
            declarations: [Delete<%= classify(name) %>Component, MockComponents(...componentDependencies, ...zoomDependencies)],
            providers: [<%= classify(name) %>Service, { provide: Router, useValue: router }]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Delete<%= classify(name) %>Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
