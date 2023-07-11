import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { FindEnemyComponent } from './pages/find-enemy/find-enemy.component';
import { BattlefieldComponent } from './pages/battlefield/battlefield.component';
import { VictoryComponent } from './pages/victory/victory.component';
import { DefeatComponent } from './pages/defeat/defeat.component';
import { LeaveGameGuard } from './guards/leave-game.guard';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'search', component: FindEnemyComponent },
  { path: 'battle', component: BattlefieldComponent, canDeactivate: [LeaveGameGuard] },
  { path: 'victory', component: VictoryComponent },
  { path: 'defeat', component: DefeatComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
