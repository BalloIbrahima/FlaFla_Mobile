import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { LottieModule } from 'ngx-lottie';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    SwiperModule,


  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
