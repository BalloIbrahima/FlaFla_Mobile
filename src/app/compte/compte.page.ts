import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client/client.service';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {
  IsConnected=false;

  option:AnimationOptions={
    path:'assets/json/user-profile.json'
  }

  constructor(private clientService:ClientService) { }

  ngOnInit() {
    if(this.clientService.verifier()){
      this.IsConnected=true
    }

    console.log(this.clientService.verifier())
  
  }

}
