import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponentComponent } from './Residences/residences-component/residences-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ResidenceDetailsComponent } from './Residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './Residences/add-residence/add-residence.component';
import { ApartmentsComponent } from './Apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './Apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './Apartments/add-apartment/add-apartment.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'residences', component: ResidencesComponentComponent},
  {path: 'residence/:id', component: ResidenceDetailsComponent},
  {path: 'add-residence/:id', component: AddResidenceComponent},
  {path: 'add-residence', component: AddResidenceComponent},
  {path: 'apartment', component: ApartmentsComponent},
  {path: 'apartments-list/:id', component: ApartmentsByResidenceComponent},
  {path: 'add-appartement', component: AddApartmentComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
