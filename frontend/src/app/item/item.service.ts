import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

import { Item } from "./item";
import { Observable } from "tns-core-modules/ui/page/page";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    constructor(private http: HttpClient) {
        
    }

    queryItems(query: string) {
        return this.http.get('http://localhost:3000/search/' + query + '/0');
    }

    getItem(id: string) {
        return this.http.get('http://localhost:3000/search/id/' + id);
    }
}
