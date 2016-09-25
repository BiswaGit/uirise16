import { Component } from 'angular2/core';
import { RouteParams,RouteConfig, ROUTER_DIRECTIVES,Router } from 'angular2/router';

import { CardService } from '../landing/card.service';


@Component({
    templateUrl: 'app/depositamount/depositamount.component.html',
    directives: [ROUTER_DIRECTIVES]
    
})

export class DepositAmountComponent {
	public pageTitle: string = 'Cardless Money';
	amount: number;
	errorMessage: string;
	accountName: string;
	balance: number;
	userName: string;
	cardNumber: number;
	qrstring: string;
	stopPollingS: boolean;
	
	
	 ngOnInit(): void {
 		let accountName = this._routeParams.get('accountName');
 		this.accountName = accountName;
 		
 		let balance = this._routeParams.get('balance');
 		this.balance = balance;
 		
   		let userName = this._routeParams.get('userName');
   		this.userName = userName; 
   		
 		let cardNumber = this._routeParams.get('cardNumber');
   		this.cardNumber = cardNumber;

		this.qrstring="{\"accountname\":\""+accountName+"\",\"username\":\""+userName+"\"}";
   		
  	};


		
    constructor(public _routeParams: RouteParams,
    	private _router: Router,
    	private _cardService: CardService) {}
   
     onBack(): void {
		 this._router.parent.navigateByUrl('/landing?userName='+this.userName);
   }
     
     
     }
   }
