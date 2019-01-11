import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { NestedObservableComponent } from './components/nested-observable/nested-observable.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'nested', component: NestedObservableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
