import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxDomService } from './jqwidgets-dom.service';

import { jqxLayoutComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlayout';
import { jqxDockingLayoutComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdockinglayout';
import { jqxTreeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtree';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { RoutoutcomponentComponent } from './routoutcomponent/routoutcomponent.component';
// import { jqxBarGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge';

@NgModule({
    declarations: [
      AppComponent,
      jqxLayoutComponent,
      jqxDockingLayoutComponent,
      jqxTreeComponent,
      jqxButtonComponent,
      DashboardComponent,
      CustomersComponent,
      RoutoutcomponentComponent
    ],
  entryComponents: [jqxButtonComponent, RoutoutcomponentComponent],
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    providers: [jqxDomService],
    bootstrap: [AppComponent]
})

export class AppModule { }
        