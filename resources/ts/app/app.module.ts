import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
