import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppConfigurationService } from "@core/services/configuration/app-configuration.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { <%= classify(name) %>, <%= classify(name) %>Dto } from "./<%= dasherize(name) %>.model";
import { <%= classify(name) %>Adapter } from "./<%= dasherize(name) %>.adapter";

@Injectable({
    providedIn: "root"
})
export class <%= classify(name) %>Service {
    private apiUri: string;
    private baseUrl: string;
    private entityUrl: string;

    constructor(
        private http: HttpClient,
        private adapter: <%= classify(name) %>Adapter,
        private appConfigService: AppConfigurationService,
    ) {
        this.apiUri = "api/" + this.entityUrl;
        this.setBaseUrl();
    }

    getAll(): Observable<any[]> {
        const url = this.baseUrl;
        return this.http
            .get<any[]>(url)
            .pipe(map((data: any[]) => data.map((item) => this.adapter.adapt(item))));
    }

    get(id: string): Observable<any> {
        const url = this.baseUrl + "/" + id;
        return this.http.get<any>(url).pipe(map((item: any) => this.adapter.adapt(item)));
    }

    post(payload: any): Observable<any> {
        const url = this.baseUrl;
        return this.http.post<any>(url, payload);
    }

    put(entityId: string, payload: any): Observable<any> {
        const url = this.baseUrl + "/" + entityId;
        return this.http.put<any>(url, payload);
    }

    delete(entityId: string): Observable<any> {
        const url = this.baseUrl + "/" + entityId;
        return this.http.delete<any>(url);
    }

    private setBaseUrl() {
        this.appConfigService
            .getConfiguration()
            .subscribe((config) => (this.baseUrl = config.endpoints.apiProfileDomain + "/" + this.apiUri));
    }
}
