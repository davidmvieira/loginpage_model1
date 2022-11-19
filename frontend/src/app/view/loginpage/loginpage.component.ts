import { Component, OnInit } from '@angular/core';
import users_test from '../users_test';



@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
 
  // private name: string = NgModel

  //  name: "logname",
  //  email: "logmail",
  //  password: "logpass",
  json = users_test.users

  login: boolean = true;
  isForgot: boolean = false;
  isloading: boolean = false;
  isExist: boolean = false;
  alert: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.json);
    
  }

  goTo(){
    this.login = this.login ? false : true;  
  }
  forgot(){
    this.isForgot = this.isForgot ? false : true;  
  }
  check(){
    this.isloading = this.isloading? false : true;
  }
  submit(data: any){
    if(!data || data =="" || !data.includes("@")){
      this.alert = true
    }
    else{
      this.alert = false;
      this.json.find(i => {
        if(i.mail == data){
          this.isExist = true;
          
        }
        

      } )
     
    }

  }

}
