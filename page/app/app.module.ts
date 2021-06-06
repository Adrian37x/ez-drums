import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//#region directives
import { NgVarDirective } from './directives/ng-var.directive';
//#endregion

//#region components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
//#endregion

@NgModule({
    declarations: [
        // components
        AppComponent,
        HomeComponent,
        TutorialsComponent,
        TutorialComponent,
        ImpressumComponent,

        // directives
        NgVarDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
