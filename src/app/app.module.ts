
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatBottomSheetModule, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NavbarComponent, MainComponent, FooterComponent, CustomDialogComponent, MessageComponent } from '@Components';
import { FormularioView, ViewRoutes, TableView, VehiculosView, CiudadesView, NotFoundView, FormularioCiudades, FormularioVehiculos, FormularioPaises, FormularioTiposVehiculo } from '@Views';
import {MatDialogModule} from '@angular/material/dialog';
import { FiltrarComponent } from './Views/Viajes/filtrar/filtrar.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    TableView,
    FormularioView,
    MessageComponent,
    CustomDialogComponent,
    FiltrarComponent,
    VehiculosView,
    CiudadesView,
    NotFoundView,
    FormularioPaises,
    FormularioCiudades,
    FormularioVehiculos,
    FormularioTiposVehiculo, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(ViewRoutes),
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [
    {provide: MatBottomSheetRef, useValue:{}},
    {provide: MAT_BOTTOM_SHEET_DATA, useValue:{}},
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
