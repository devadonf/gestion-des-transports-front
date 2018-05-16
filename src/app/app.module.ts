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
import { VehiculeSocieteComponent } from './shared/vehiculeSociete/vehiculeSociete.component';
import { VehiculeSocieteService } from './services/vehiculeSociete.service';
import { VehiculePersonnelService } from './services/vehicule-personnel.service';
import { CreerAnnonceComponent } from './pages/creer-annonce/creer-annonce.component';
import { ItineraireCreationComponent } from './shared/itineraire-creation/itineraire-creation.component';
import { VehiculeCovoiturageCreationComponent } from './shared/vehicule-covoiturage-creation/vehicule-covoiturage-creation.component';
import { HoraireCovoiturageCreationComponent } from './shared/horaire-covoiturage-creation/horaire-covoiturage-creation.component';
import { AnnonceCollaborateurService } from './services/annonce-collaborateur.service'

const appRoutes: Routes = [
  { path: 'collaborateur/reservations/', component: ListeReservationComponent }, // Réservation
  { path: 'collaborateur/annonces/', component: MenuComponent }, // Annonce
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
    VehiculeSocieteComponent,
    VehiculeCovoiturageCreationComponent,
    HoraireCovoiturageCreationComponent
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
    VehiculeSocieteService,
    ReservationCovoiturageService,
    VehiculePersonnelService,
    AnnonceCollaborateurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
