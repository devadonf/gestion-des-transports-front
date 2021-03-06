export class Reservation{
  id:number
  annonce:Annonce
  collaborateur:Collaborateur
  status:Status

  constructor(object:any){
      Object.assign(this, object)
  }
}

export class Annonce{
  id:number
  adresseDepart:string
  adresseArrive:string
  duree:string
  distance:number
  vehicule:Vehicule 
  nombrePlace:number
  date:Date
  auteurAnnonce:Collaborateur
  reservations:Array<Reservation>
  status:Status
  
  constructor(object:any){
      Object.assign(this, object)
  }
}

export abstract class Vehicule {
  immatriculation: string;
  marque: string;
  modele: string;

  constructor(obj: any) {
    Object.assign(this, obj);
  }
}

export class VehiculeSociete extends Vehicule{
  nbPlaces: number;
  categorie: CategorieVehicule;
  urlPhoto: string;


  constructor(obj:any, nbPlaces:number, categorie:CategorieVehicule, urlPhoto:string){
    super(obj);
    this.nbPlaces =nbPlaces
    this.categorie=categorie
    this.urlPhoto=urlPhoto
  }
}

export class VehiculePersonnel extends Vehicule {

  constructor(obj: any) {
    super(obj)
  }
}
export class Employe{
  matricule :String;
  nom:String;
  prenom:String;
  email:String;
  motDeDasse:String;
  urlDhoto:String;
  role: Role;

  constructor(obj: any) {
    Object.assign(this, obj);
  }
}
export class Chauffeur extends Employe{
permis : String;
telephone : String;
  constructor(obj: any) {
    super(Employe);
    Object.assign(this, obj);
  }


}
export class ReservationVehiculeSociete extends Reservation{
dateDebut : Date;
dateFin : Date;
chauffeur : Chauffeur;
vehiculeSociete : VehiculeSociete;
  constructor(obj: any) {
    super(obj);
    Object.assign(this, obj);
  }

}
export enum Role{
  ADMINISTRATEUR = "admin",
  CHAUFFEUR = "chauffeur",
  COLLABORATEUR = "collaborateur",

}

export enum CategorieVehicule{

  MICRO_URBAINE = "Micro-urbaines", 
  MINI_CITADINE ="Mini-citadines", 
  CITADINE_POLYVALENTE = "Citadines polyvalentes", 
  COMPACTE =  "Compactes", 
  BERLINE_TAILLE_S =  "Berlines Taille S", 
  BERLINE_TAILLE_M = "Berlines Taille M", 
  BERLINE_TAILLE_L = "Berlines Taille L", 
  SUV = "Suv", 
  TOUT_TERRAINS = "Tout-terrains", 
  PICK_UP = "Pick-up"
}


export class Collaborateur {
  matricule:string
  nom:string
  prenom:string
  email:string
  motDePasse:string
  telephone:string
  urlPhoto:string
  administrateur:boolean
  
  constructor(obj: any) {
      Object.assign(this, obj);
  }
}
export enum Status{

  EN_COURS = "En cours",
  ANNULE = "Annulé",
  TERMINE = "Terminé"
}