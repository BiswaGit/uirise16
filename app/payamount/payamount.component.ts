import { Component } from 'angular2/core';
import { RouteParams,RouteConfig, ROUTER_DIRECTIVES,Router } from 'angular2/router';

import { CardService } from '../landing/card.service';

@Component({
    templateUrl: 'app/payamount/payamount.component.html',
    directives: [ROUTER_DIRECTIVES]
    
})

export class PayAmountComponent {
	public pageTitle: string = 'Cardless Money';
	amount: number;
	errorMessage: string;
	accountName: string;
	balance: number;
	userName: string;
	cardNumber: number;
	
	 ngOnInit(): void {
 		let accountName = this._routeParams.get('accountName');
 		this.accountName = accountName;
 		
 		let balance = this._routeParams.get('balance');
 		this.balance = balance;
 		
   		let userName = this._routeParams.get('userName');
   		this.userName = userName; 
   		
 		let cardNumber = this._routeParams.get('cardNumber');
   		this.cardNumber = cardNumber;
   		
  	};
		
    constructor(public _routeParams: RouteParams,
    	private _router: Router,
    	private _cardService: CardService) {}
   
     onBack(): void {
        this._router.navigate(['Landing']);
   }
   
   scanQRCodeorPay(): void{
     	
     }
   

    
}
