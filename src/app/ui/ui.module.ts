import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./";
import { TranslateModule } from "@ngx-translate/core";
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
    declarations: [
        HeaderComponent,
        DropdownComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule.forChild()
    ],
    exports: [
        DropdownComponent,
        HeaderComponent
    ]
})
export class UiModule { }