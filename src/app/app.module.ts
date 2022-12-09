import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { PersonListComponent } from './person/person-list/person-list.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SplitButtonModule } from 'primeng/splitbutton';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import {PanelModule} from 'primeng/panel';


import { TreeSelectModule } from 'primeng/treeselect';
import { PersonAddComponent } from './person/person-add/person-add.component';
import { PersonUpdateComponent } from './person/person-update/person-update.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PersonComponent } from './person/person.component';
import { PersonIntroComponent } from './person-intro/person-intro.component';
import { PersonDeleteComponent } from './person/person-delete/person-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonAddComponent,
    PersonUpdateComponent,
    ErrorPageComponent,
    PersonComponent,
    PersonIntroComponent,
    PersonDeleteComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    InputTextModule,
    DividerModule,
    ButtonModule,
    CardModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    SplitButtonModule,
    ToolbarModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    BreadcrumbModule,
    SplitterModule,
    AvatarModule,
    PanelModule,
    TreeSelectModule,
    TagModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
