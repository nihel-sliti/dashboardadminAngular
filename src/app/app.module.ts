import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import{ OverlayModule}from '@angular/cdk/overlay'
import{ CdkMenuModule}from '@angular/cdk/menu';
import { ClientComponent } from './client/client.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { OffersComponent } from './offers/offers.component';
import { AddoffersComponent } from './addoffers/addoffers.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';

import { CommonModule } from '@angular/common'; // Import CommonModule
import { EditProductComponent } from './edit-product/edit-product.component';
import { CalculateurDietetiqueComponent } from './calculateur-dietetique/calculateur-dietetique.component';
import { CalculateurProgressionComponent } from './calculateur-progression/calculateur-progression.component';
import { FichesSuiviComponent } from './fiches-suivi/fiches-suivi.component';
import { EbookComponent } from './ebook/ebook.component';
import { CarnetEntrainementComponent } from './carnet-entrainement/carnet-entrainement.component';
import { BaseChartDirective } from 'ng2-charts';
import { ChartModule } from 'angular-highcharts';
import { PetitDejComponent } from './petit-dej/petit-dej.component';
import { DejeunerComponent } from './dejeuner/dejeuner.component';
import { DinerComponent } from './diner/diner.component';
import { CollationsComponent } from './collations/collations.component';
import { AddRecetteComponent } from './add-recette/add-recette.component';
import { AuthComponent } from './auth/auth.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    HeaderComponent,
    ProfileComponent,
    ClientComponent,
    AddProductsComponent,
    OffersComponent,
    AddoffersComponent,
   EditProductComponent,
   CalculateurDietetiqueComponent,
   CalculateurProgressionComponent,
   FichesSuiviComponent,
   EbookComponent,
   CarnetEntrainementComponent,
   PetitDejComponent,
   DejeunerComponent,
   DinerComponent,
   CollationsComponent,
   AddRecetteComponent,
   AuthComponent,
   SignupComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    CdkMenuModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    ReactiveFormsModule,
    BaseChartDirective ,
    ChartModule, // add ChartModule to your imports
    MatCardModule,  // Assurez-vous d'ajouter cette ligne ici
    MatCheckboxModule  // Ajoutez le MatCheckboxModule ici
   
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

