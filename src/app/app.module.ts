import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicSelectComponent } from './basic-select/basic-select.component';
import { GenericSelectComponent } from './generic-select/generic-select.component';
import { OptionsTemplateDirective } from './options-template/options-template.directive';
import { SpecificSelectComponent } from './specific-select/specific-select.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericSelectComponent,
    SpecificSelectComponent,
    OptionsTemplateDirective,
    BasicSelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
