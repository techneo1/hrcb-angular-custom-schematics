import { Injectable } from "@angular/core";

import { <%= classify(name) %>Dto, <%= classify(name) %> } from "./<%= dasherize(name) %>.model";

@Injectable({
    providedIn: "root"
})
export class <%= classify(name) %>Adapter {
    adapt(dto: <%= classify(name) %>Dto): <%= classify(name) %> {
        return new <%= classify(name) %>({});
    }
}