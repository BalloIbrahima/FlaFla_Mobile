import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  constructor() {
    
  }
 ngOnInit() {
  }

  btn_scroll_click(){
    window.scrollTo({

      top:0,
      left:0,
      behavior:'smooth', 
    })
  }

  




}
