import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { NewerComponentComponent } from './newer-component/newer-component.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  { path: 'default', component: DefaultComponent },
  { path: '', redirectTo: '/default', pathMatch: 'full' },
  { path: 'new-component', component: NewComponentComponent },
  { path: 'newer-component', component: NewerComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
