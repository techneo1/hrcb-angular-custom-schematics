import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppConfigurationService } from "@app/core/services/configuration/app-configuration.service";
import { CustomTranslateLoader } from "@app/core/services/translation/custom-translate-loader.service";
import { SharedModule } from "@app/shared/shared.module";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { LanguageTranslationModule } from "../language-translation/language-translation.module";

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
        LanguageTranslationModule,
        <%= classify(name) %>RoutingModule
    ]
})
export class <%= classify(name) %>Module {}
