import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { Router } from 'angular2/router';

import { CardService } from '../landing/card.service';

@Component({
    templateUrl: 'app/signup/signup.component.html',
})

export class SignupComponent {
    userid: string;
    constructor(public router: Router,
    private _cardService: CardService) {}
    data: any;
    
    submit(username: string, password: string, mobile:string): void {
        this._cardService.registerUser(username, password,mobile)
                     .subscribe(
                       data => this.data = data,
                       error =>  this.errorMessage = <any>error);
       
      console.log(body);
       
       //this.router.parent.navigateByUrl('/welcome');
    }
    
    
}
