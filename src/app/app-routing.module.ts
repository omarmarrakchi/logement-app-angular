import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'residances', component: ResidencesComponentComponent},
  {path: '', redirectTo: 'residances', pathMatch: 'full'},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
