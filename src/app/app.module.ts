import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ListeReservationComponent } from './shared/reservation/listeReservation.component';
import { ReservationCovoiturageService } from './services/reservation/reservationCovoiturage.service';
import { ListerVehiculeComponent } from './shared/lister-vehicule/lister-vehicule.component';
import { VehiculeComponent } from './shared/vehicule/vehicule.component';
import { VehiculeService } from './services/vehicule.service';

import { CreerAnnonceComponent } from './pages/creer-annonce/creer-annonce.component';
import { ItineraireCreationComponent } from './shared/itineraire-creation/itineraire-creation.component';

import { AnnonceCollaborateurComponent } from './shared/annonce-collaborateur/annonce-collaborateur.component';

const appRoutes: Routes = [
  { path: 'collaborateur/reservations/', component: ListeReservationComponent }, // Réservation
  { path: 'collaborateur/annonces/', component: AnnonceCollaborateurComponent}, // Annonce
  { path: 'collaborateur/statistiques', component: MenuComponent }, // Statistique
  { path: 'admin/vehicules', component : ListerVehiculeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListeReservationComponent,
    CreerAnnonceComponent,
    ItineraireCreationComponent,
    ListerVehiculeComponent,
    VehiculeComponent,
    AnnonceCollaborateurComponent,
  

  ],
  imports: [
    BrowserModule,    
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAYzXigARjswquPe9Jz4bz1M50GKf2DMoI",
      libraries: ["places"]
    })

  ],
  providers: [
    VehiculeService,
    ReservationCovoiturageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }