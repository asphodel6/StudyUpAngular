import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FindEnemyComponent } from './pages/find-enemy/find-enemy.component';
import { BattlefieldComponent } from './pages/battlefield/battlefield.component';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FindEnemyComponent,
    BattlefieldComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
