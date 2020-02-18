import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html",
    providers: [ItemService]
})
export class ItemDetailComponent implements OnInit {
    item: any;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params.id;
        this.itemService.getItem(id).subscribe((result: any) => {
            console.log("FUCCKKKKKKKKKKKKKK "+result.data[0].imgurl);
            if (result.data[0])
                this.item = result.data[0];
            else console.log("Item not found!");
        });
    }
}
