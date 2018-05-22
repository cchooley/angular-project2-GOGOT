import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { ListComponent } from '../app/components/list/list.component';
import { BrochureComponent } from '../app/components/brochure/brochure.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'brochure', component: BrochureComponent },
    { path: 'list', component: ListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }