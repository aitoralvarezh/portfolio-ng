import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContactRoutingModule } from "./contact-routing.module";

import { ContactComponent } from "./contact.page";

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        ContactRoutingModule
    ],
    providers: [

    ]
})

export class ContactModule { }