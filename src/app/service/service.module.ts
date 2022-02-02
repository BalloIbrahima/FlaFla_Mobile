import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';

import { ServicePageRoutingModule } from './service-routing.module';

import { ServicePage } from './service.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicePageRoutingModule,
    SwiperModule,

  ],
  declarations: [ServicePage]
})
export class ServicePageModule {}
