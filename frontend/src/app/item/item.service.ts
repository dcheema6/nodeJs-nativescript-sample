import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    constructor(private http: HttpClient) {
        
    }

    queryItems(query: string) {
        console.log(query);
        return this.http.get('https://game-search-57266.appspot.com/search/' + query + '/0');
    }

    getItem(id: string) {
        return this.http.get('https://game-search-57266.appspot.com/search/id/' + id);
    }
}
