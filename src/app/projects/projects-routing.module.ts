import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArtWorkComponent, CodeWorkComponent } from "./pages";
import { ProjectsPage } from "./projects.page";

const routes: Routes = [
    {
        path: '',
        component: ProjectsPage,
    },
    {
        path: 'art-work',
        component: ArtWorkComponent
    },
    {
        path: 'code-work',
        component: CodeWorkComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutindModule { }
