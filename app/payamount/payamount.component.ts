import { Component } from 'angular2/core';
import { RouteParams,RouteConfig, ROUTER_DIRECTIVES,Router } from 'angular2/router';

import { CardService } from '../landing/card.service';
import {NgZone} from "angular2/src/core/zone/ng_zone";

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
	public destuserid: string;
	public destaccountnumber: string;
	_id:string;
	public zone: NgZone;
	verifiedOTP: boolean;
	recievedOTP: boolean;
	
	 ngOnInit(): void {
 		let accountName = this._routeParams.get('accountName');
 		this.accountName = accountName;
 		
 		let balance = this._routeParams.get('balance');
 		this.balance = balance;
 		
   		let userName = this._routeParams.get('userName');
   		this.userName = userName; 
   		
 		let cardNumber = this._routeParams.get('cardNumber');
   		this.cardNumber = cardNumber;
   		
   		
   		this.verifiedOTP = false;
   		this.recievedOTP = false;
  	};
		
    constructor(public _routeParams: RouteParams,
    	private _router: Router,
    	private _cardService: CardService,public _ngzone:NgZone) {
		window.angularComponentRef = {component: this, zone: _ngzone};
	}
   
     onBack(): void {
         this._router.parent.navigateByUrl('/landing?userName='+this.userName);
   }
   
   scanQRCodeorPay(destuserid: string, destaccountnumber: string): void{
   
   
		 this.destuserid = destuserid;
     	console.log("destuserid: "+destuserid);
     	
     	 this.destaccountnumber = destaccountnumber;
     	console.log("destaccountnumber: "+destaccountnumber);
     	
     	
     	this._cardService.scanQRCode(this.destuserid, this.userName, this.cardNumber, this.amount, this.destaccountnumber)
                     .subscribe(
                     	_id => this._id = _id,
                       error =>  this.errorMessage = <any>error);
     	
     	
     }
   

	sendOTP(): void{
		this.recievedOTP = true;
	}
	
	
	verify(): void{
		this.verifiedOTP = true;
	}
    
}
