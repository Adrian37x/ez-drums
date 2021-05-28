import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';

const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },

    { path: "home", component: HomeComponent },
    { path: "tutorial", component: TutorialComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true,
        relativeLinkResolution: 'legacy'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
