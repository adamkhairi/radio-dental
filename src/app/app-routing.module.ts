import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RadioCardComponent} from './radio/radio-card/radio-card.component';
import {RadioComponent} from "./radio/radio.component";

const routes: Routes = [
  {
    path: '',
    component: RadioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
