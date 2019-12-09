import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppConfigurationService } from "@app/core/services/configuration/app-configuration.service";
import { CustomTranslateLoader } from "@app/core/services/translation/custom-translate-loader.service";
import { SharedModule } from "@app/shared/shared.module";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { ZoomDialogModule } from "@zoomui/dialog";
import { ZoomConfirmationModule } from "@zoomui/confirmation";
import { ZoomButtonModule } from "@zoomui/button";
import { ZoomNotificationModule } from "@zoomui/notification";
import { LanguageTranslationModule } from "../language-translation/language-translation.module";
import { <%= classify(name) %>ListComponent } from './<%= dasherize(name) %>-list/<%= dasherize(name) %>-list.component';
import { View<%= classify(name) %>Component } from './view-<%= dasherize(name) %>/view-<%= dasherize(name) %>.component';
import { Add<%= classify(name) %>Component } from './add-<%= dasherize(name) %>/add-<%= dasherize(name) %>.component';
import { Edit<%= classify(name) %>Component } from './edit-<%= dasherize(name) %>/edit-<%= dasherize(name) %>.component';
import { Delete<%= classify(name) %>Component } from './delete-<%= dasherize(name) %>/delete-<%= dasherize(name) %>.component';
import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';

export function CustomTranslateLoaderFactory(http: HttpClient, appConfig: AppConfigurationService) {
    return new CustomTranslateLoader(http, appConfig);
}

@NgModule({
    declarations: [
      <%= classify(name) %>ListComponent,
        View<%= classify(name) %>Component,
        Add<%= classify(name) %>Component,
        Edit<%= classify(name) %>Component,
        Delete<%= classify(name) %>Component
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: CustomTranslateLoaderFactory,
                deps: [HttpClient, AppConfigurationService]
            }
        }),
        SharedModule,
        ZoomNotificationModule,
        ZoomButtonModule,
        ZoomDialogModule,
        ZoomConfirmationModule,
        LanguageTranslationModule,
        <%= classify(name) %>RoutingModule
    ]
})
export class <%= classify(name) %>Module {}
