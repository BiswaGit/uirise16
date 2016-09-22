import { Component, OnInit } from 'angular2/core';
import { RouteParams,RouteConfig, ROUTER_DIRECTIVES,Router } from 'angular2/router';

import { ICard } from './card';
import { CardService } from './card.service';

@Component({
    templateUrl: 'app/landing/landing.component.html',
    directives: [ROUTER_DIRECTIVES]
    
})

export class LandingComponent implements OnInit{
	public pageTitle: string = 'Cardless Money';
	userName: string;
	isValidUser: boolean;
	cards: ICard[];
	errorMessage: string;
	
    constructor(private _routeParams: RouteParams,
    	private _cardService: CardService,
    	private _router: Router) {}
   
    
    ngOnInit(): void {
 		let userName = this._routeParams.get('userName');
 		this.userName = userName;
   		
   		this.getUserCardDetails();	   			
   		
  	};
  	
  	validateCredentials(): boolean {
  		//TODO
  		return true;
  	};
  	
  	getUserCardDetails(){
  		 this._cardService.getCardsDetails()
                     .subscribe(
                       cards => this.cards = cards,
                       error =>  this.errorMessage = <any>error);
  	};

    logout(): void {
        this._router.navigate(['Welcome']);
    };
	


    
}
