import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderPartComponent } from './header-part/header-part.component'; 

const routes: Routes = [
  { path:'header', component:HeaderPartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
