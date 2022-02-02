import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComptePageRoutingModule } from './compte-routing.module';

import { ComptePage } from './compte.page';
import { LottieModule } from 'ngx-lottie';
export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComptePageRoutingModule,
    LottieModule.forRoot({player:playerFactory}),
  ],
  declarations: [ComptePage]
})
export class ComptePageModule {}
