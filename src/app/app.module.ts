import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FlexCssComponent} from './components/flex-css/flex-css.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {MaterialModule} from './material.module';
import {IntroductionComponent} from './components/static/introduction/introduction.component';
import {NavBarComponent} from './components/static/nav-bar/nav-bar.component';
import {ContactItemComponent} from './components/contact-list/contact-item/contact-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexCssComponent,
    ContactListComponent,
    ContactItemComponent,
    IntroductionComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
