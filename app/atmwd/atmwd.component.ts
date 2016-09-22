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
	accountName: string;
	balance: number;
	atmPin: number;
	userName: string;
	cardNumber: number;
	passcode: number;
	
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
   
   genPassCode(): void{
   		
   		 this._cardService.generatePassCode(this.userName, this.cardNumber, this.amount, this.atmPin)
                     .subscribe(
                     	passcode => this.passcode = passcode,
                       error =>  this.errorMessage = <any>error);
     }
     
     scanQRCode(): void{
     	
     }
   

    
}
