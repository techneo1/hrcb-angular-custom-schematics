import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { ZoomButtonComponent } from "@zoomui/button";
import { ZoomConfirmationComponent } from "@zoomui/confirmation";
import { ZoomDialogComponent } from "@zoomui/dialog";
import { ZoomFormModule } from "@zoomui/form";
import { ZoomNotificationComponent } from "@zoomui/notification";
import { MockComponents } from "ng-mocks";
import { defer } from "rxjs";

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

describe("Add<%= classify(name) %>Component", () => {
  let fixture: ComponentFixture<Add<%= classify(name) %>Component>;
  let component: Add<%= classify(name) %>Component;

  const zoomDependencies = [
    ZoomNotificationComponent,
    ZoomButtonComponent,
    ZoomConfirmationComponent,
    ZoomDialogComponent
  ];
  const componentDependencies = [];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        ReactiveFormsModule,
        ZoomFormModule
      ],
      declarations: [
        Add<%= classify(name) %>Component,
        MockComponents(...componentDependencies, ...zoomDependencies)
      ],
      providers: [<%= classify(name) %>Service]
    }).compileComponents();

    fixture = TestBed.createComponent(Add<%= classify(name) %>Component);
    fixture.detectChanges();

    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
