import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './cutom-property-event-b/child/filter.component';
import { CoursesComponent } from './cutom-property-event-b/parent/course.component';
import { SearchComponent } from './cutom-property-event-b/search/search.component';
import { EventBindingComponent } from './data-binding/event-binding/event-binding.component';
import { PropertyBindingComponent } from './data-binding/property-binding/property-binding.component';
import { StringInterpolationComponent } from './data-binding/string-interpolation/string-interpolation.componnet';
import { TwoWayBindingComponent } from './data-binding/two-way-binding/two-way-binding.component';
import { NgClassDComponent } from './directives/ngclass-d/ngclass-d.component';
import { NgForDComponent } from './directives/ngfor-d/ngfor-d.component';
import { NgIfDComponent } from './directives/ngif-d/ngif-d.component';
import { NgStyleDComponent } from './directives/ngstyle-d/ngstyle-d.component';
import { MultipleTemplateStylePropertyComponent } from './multi-template-style-property/multi-template-style-property.component';
import { Craetingservices1Component } from './service/creating-services/creating-services1/creating-services1.component';
import { SingleTemplateStylePropertyComponent } from './single-template-style-property/single-template-style-property.component';
import { CustomerComponent } from './template-ref-var/customer/customer-list.component';
import { DemoComponent } from './template-ref-var/demo/demo.component';
import { DemosComponent } from './view-child/demos/demos.component';
import { YearCalComponent } from './view-child/year-cal/year-cal.component';
import { Comp1Component } from './view-encapsulation/comp1/comp1.component';
import { Comp2Component } from './view-encapsulation/comp2/comp2.component';

import { AddUserComponent } from './service/add-user/add-user.component';
import { Craetingservices2Component } from './service/creating-services/creating-services2/creating-services2.component';
import { EnrollService } from './services/enroll.service';
import { LoggerService } from './services/logger.service';
import { AllUserComponent } from './service/all-user/all-user.component';
import { UserDetailsComponent } from './service/user-details/user-details.component';
import { Comp11Component } from './observerable/comp11/comp11.component';
import { Comp22Component } from './observerable/comp22/comp22.component';
import { Ex1DComponent } from './form/template-driven-form/ex1.component';
import { LifeCycleComponent } from './life-cyle-hook/life-cycle.component';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FilterComponent,
    SearchComponent,
    SingleTemplateStylePropertyComponent,
    MultipleTemplateStylePropertyComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    NgForDComponent,
    NgStyleDComponent,
    NgIfDComponent,
    NgClassDComponent,
    DemoComponent,
    CustomerComponent,
    YearCalComponent,
    DemosComponent,
    Comp1Component,
    Comp2Component,
    Craetingservices1Component,
    Craetingservices2Component,
    AddUserComponent,
    AllUserComponent,
    UserDetailsComponent,
    Comp11Component,
    Comp22Component,
    Ex1DComponent,
    LifeCycleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RadioButtonModule,
    ButtonModule,
  ],
  providers: [EnrollService, LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
