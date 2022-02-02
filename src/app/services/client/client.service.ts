import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  client:any=null;


  verifier(){
    try {
      this.client = JSON.parse(localStorage.getItem("flafla_client"));
    } catch (error) {

    }
    if(this.client==null){
      return false
    }else{
      console.log(this.client)
      return true;
    }
  }

  constructor() { }
}
