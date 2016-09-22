import { Component } from 'angular2/core';
import { RouteParams,RouteConfig, ROUTER_DIRECTIVES,Router } from 'angular2/router';

import { CardService } from '../landing/card.service';

@Component({
    templateUrl: 'app/atmwd/atmwd.component.html',
    directives: [ROUTER_DIRECTIVES]
    
})

export class ATMWithdrawComponent {
	public pageTitle: string = 'Cardless Money';
	amount: number;
	errorMessage: string;
		
    constructor(public _routeParams: RouteParams,
    	private _router: Router,
    	private _cardService: CardService) {}
   
     onBack(): void {
        this._router.navigate(['Landing']);
   }
   
   submit(): void{
   		let userName = this._routeParams.get('userName');
 		let cardNumber = this._routeParams.get('cardNumber');
   
   		 this._cardService.submitATMWithdrawAmount(userName, cardNumber, this.amount)
                     .subscribe(
                       error =>  this.errorMessage = <any>error);
   }
   

    
}
