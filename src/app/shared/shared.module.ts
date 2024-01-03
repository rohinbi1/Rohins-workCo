import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { PanelMenuModule } from 'primeng/panelmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    CardModule,
    CalendarModule,
    InputNumberModule,
    MultiSelectModule,
    HttpClientModule,
    ToastModule,
    PanelMenuModule,
    TableModule,
    OverlayPanelModule,
  ],
  providers: [],
})
export class SharedModule {}
