import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientComponent } from './client/client.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { OffersComponent } from './offers/offers.component';
import { AddoffersComponent } from './addoffers/addoffers.component';
import { CalculateurDietetiqueComponent } from './calculateur-dietetique/calculateur-dietetique.component';
import { CalculateurProgressionComponent } from './calculateur-progression/calculateur-progression.component';
import { EbookComponent } from './ebook/ebook.component';
import { PetitDejComponent } from './petit-dej/petit-dej.component';
import { DejeunerComponent } from './dejeuner/dejeuner.component';
import { DinerComponent } from './diner/diner.component';
import { CollationsComponent } from './collations/collations.component';
import { AddRecetteComponent } from './add-recette/add-recette.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo:'auth', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products', component: ProductsComponent}, 
  {path: 'statistics', component: StatisticsComponent},
  {path: 'coupens', component:CoupensComponent },
  {path: 'pages', component: PagesComponent},
  {path: 'media', component:MediaComponent },
  {path: 'settings', component: SettingsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'client',component:ClientComponent},
  {path: 'addproducts', component:AddProductsComponent},
  {path: 'offers', component:OffersComponent},
  {path: 'addoffers', component:AddoffersComponent},
  {path: 'CalculateurDietetique', component: CalculateurDietetiqueComponent},
  {path: 'CalculateurProgression', component: CalculateurProgressionComponent},
  {path: 'ebook', component: EbookComponent},
  {path: "petitDej", component: PetitDejComponent},
  {path: "dejeuner", component: DejeunerComponent},
  {path: "diner", component: DinerComponent},
  {path: "collations", component: CollationsComponent},
  {path: "addRecette", component: AddRecetteComponent},
  {path: "auth",component:AuthComponent},
  {path: "signup", component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
