import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialesListComponent } from './components/tutoriales-list/tutoriales-list.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialesListComponent },
  { path: 'add', component: AddTutorialComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
