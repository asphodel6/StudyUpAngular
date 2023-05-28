import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { FindEnemyComponent } from './pages/find-enemy/find-enemy.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'battle', component: FindEnemyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
