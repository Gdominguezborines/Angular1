import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TresEnRayaComponent } from './tres-en-raya/tres-en-raya.component';
import { CalcComponent } from './calc/calc.component';

const routes: Routes = [
  {path:'', redirectTo:'index', pathMatch:'full'},
  {path:'TresEnRaya',component:TresEnRayaComponent},
  {path:'calc', component:CalcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
