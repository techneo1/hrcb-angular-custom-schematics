import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@core/guards/auth-guard/auth.guard";

const routes: Routes = [
    {
        path: "",
        component: <%= classify(name) %>ListComponent,
        canActivate: [AuthGuard],
        pathMatch: "full",

    },
    {
        path: "view/:id",
        component: View<%= classify(name) %>Component,
        canActivate: [AuthGuard],
        pathMatch: "full",
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class <%= classify(name) %>RoutingModule {}
