import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { AppConfigurationService } from "@app/core/services/configuration/app-configuration.service";
import { MockAppConfigurationService } from "@app/core/services/configuration/mock-app-configuration.service";

describe("<%= classify(name) %>Service", () => {
    let backend: HttpTestingController;
    let service: <%= classify(name) %>Service;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                <%= classify(name) %>Service,
                {
                    provide: AppConfigurationService,
                    useClass: MockAppConfigurationService
                }
            ]
        });

        service = TestBed.get(<%= classify(name) %>Service);
        backend = TestBed.get(HttpTestingController);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
