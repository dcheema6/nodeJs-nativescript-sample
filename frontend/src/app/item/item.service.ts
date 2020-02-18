import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    constructor(private http: HttpClient) {
        
    }

    queryItems(query: string, page: number) {
        return this.http.get('https://game-search-57266.appspot.com/search/' + query + '/' + page);
    }

    getItem(id: string) {
        return this.http.get('https://game-search-57266.appspot.com/search/id/' + id);
    }
}
