import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProjectsRoutindModule } from "./projects-routing.module";
import { ProjectsPage } from "./projects.page";

import { 
    CodeWorkComponent,
    ArtWorkComponent
} from './pages';

@NgModule({
    declarations: [
        ProjectsPage,
        CodeWorkComponent,
        ArtWorkComponent
    ],
    imports: [
        CommonModule,
        ProjectsRoutindModule
    ],
    providers: [

    ]
})

export class ProjectsModule { }