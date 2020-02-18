import { Component, OnInit } from "@angular/core";
import { SearchBar } from "tns-core-modules/ui/search-bar";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
    }

    onTextChanged(args) {
        if (!args.value) return;
        this.itemService.queryItems(args.value).subscribe((items: any) => {
            console.log(items);
            items.data.forEach((item) => {
                let nItem: Item;
                nItem.id = item.id;
                nItem.title = item.title;
                nItem.genre = item.genre;
                nItem.imageURL = item.imageurl;
                nItem.rating = item.rating;
                nItem.rCount = item.rCount;
                this.items.push(nItem);
            });
        });
    }

    onClear(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Clear event raised`);
    }
}
