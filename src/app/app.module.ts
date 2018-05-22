import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing-module'

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { SelectedComponent } from './components/selected/selected.component';
import { BrochureComponent } from './components/brochure/brochure.component';


import { HttpService } from './services/http.service';
import { SelectionService } from './services/selection.service';
import { HeaderComponent } from './components/header/header.component';
import { InfoService } from './services/info.service';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'brochure', component: BrochureComponent },
  {path: 'list', component: ListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SelectedComponent,
    HeaderComponent,
    BrochureComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    HttpService,
    SelectionService,
    InfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
