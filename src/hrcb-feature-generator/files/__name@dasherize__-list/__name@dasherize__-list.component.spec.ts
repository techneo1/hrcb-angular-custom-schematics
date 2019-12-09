import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from "@ngx-translate/core";
import { OAuthModule } from "angular-oauth2-oidc";
import { MockComponents } from "ng-mocks";
import { async } from "q";

describe("<%= classify(name) %>ListComponent", () => {
  let component: <%= classify(name) %>ListComponent;
  let fixture: ComponentFixture<<%= classify(name) %>ListComponent>;

  const zoomDependencies = [];
  const componentDependencies = [];

  const router = {
    navigate: jasmine.createSpy("navigate")
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        OAuthModule.forRoot(),
        TranslateModule.forChild(),
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        <%= classify(name) %>ListComponent,
        MockComponents(...componentDependencies, ...zoomDependencies)
      ],
      providers: [{ provide: Router, useValue: router }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= classify(name) %>ListComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
