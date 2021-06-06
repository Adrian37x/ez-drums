import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { ImpressumComponent } from './components/impressum/impressum.component';

const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },

    { path: "home", component: HomeComponent },
    { path: "tutorials", component: TutorialsComponent },
    { path: "tutorial/:title", component: TutorialComponent },
    { path: "impressum", component: ImpressumComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true,
        relativeLinkResolution: 'legacy'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
