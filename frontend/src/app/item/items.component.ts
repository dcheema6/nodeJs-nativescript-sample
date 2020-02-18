import { Component, OnInit } from "@angular/core";
import { SearchBar } from "tns-core-modules/ui/search-bar";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html",
    providers: [ItemService]
})
export class ItemsComponent implements OnInit {
    items: Array<any>;
    doQuery = false;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
    }

    onTextChanged(args) {
        if (!args.value) return;
        this.itemService.queryItems(args.value).subscribe((result: any) => {
            this.items = result.data;
        });
    }

    onClear(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Clear event raised`);
    }
}
