import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FindEnemyComponent } from './pages/find-enemy/find-enemy.component';
import { BattlefieldComponent } from './pages/battlefield/battlefield.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FindEnemyComponent,
    BattlefieldComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
