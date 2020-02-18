import { Component, OnInit } from "@angular/core";

import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html",
    providers: [ItemService]
})
export class ItemsComponent implements OnInit {
    items: Array<any>;
    page = 0;
    queryText: string;
    doQuery = true;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        console.warn("First query takes a while to respond!");
    }

    onTextChanged(args) {
        this.page = 0;
        if (!this.doQuery)  return;
        this.doQuery = false;

        (async () => {
            // Delay saves about 50% queries
            await this.delay(300);

            this.queryText = args.object.text;
            if (!this.queryText) {
                this.items = [];
                return;
            }

            this.updateItems(this.queryText, true);
            this.doQuery = true;
        }) ()
    }

    onClear(args) {
        this.page = 0;
        this.doQuery = true;
        this.items = [];
    }

    onLoad(args) {
        console.log("loading...");
        this.page += 1;
        this.updateItems(this.queryText, false);
    }

    updateItems(text: string, clear: boolean) {
        this.itemService.queryItems(text, this.page).subscribe((result: any) => {
            if (clear) this.items = [];
            result.data.forEach(item => {
                this.items.push(item);
            });;
        });
    }

    delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
}
