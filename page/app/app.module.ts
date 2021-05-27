import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//#region components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
//#endregion

//#region directives
import { NgVarDirective } from './directives/ng-var.directive';
//#endregion

@NgModule({
    declarations: [
        // components
        AppComponent,
        HomeComponent,

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
