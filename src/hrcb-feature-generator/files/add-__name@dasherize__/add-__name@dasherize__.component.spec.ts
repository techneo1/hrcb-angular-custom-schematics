import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { ZoomFormModule } from "@zoomui/form";
import { MockComponents } from "ng-mocks";
import { defer } from "rxjs";
import { Add<%= classify(name) %>Component } from './add-<%= dasherize(name) %>.component';
import { <%= classify(name) %>Service } from '../<%= dasherize(name) %>.service';

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

describe("Add<%= classify(name) %>Component", () => {
  let fixture: ComponentFixture<Add<%= classify(name) %>Component>;
  let component: Add<%= classify(name) %>Component;

  const zoomDependencies = [];
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
