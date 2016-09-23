import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features;
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';


import { WelcomeComponent } from './home/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ATMWithdrawComponent } from './atmwd/atmwd.component';
import { CardService } from './landing/card.service';
import { PayAmountComponent } from './payamount/payamount.component';
import { DepositAmountComponent } from './depositamount/depositamount.component';

@Component({
    selector: 'cm-app',
    template: `
    <div>
    	<div class='container'>
            <router-outlet></router-outlet>
        </div> 
    </div>
     `,
     directives: [ROUTER_DIRECTIVES],
    providers: [CardService,
    			HTTP_PROVIDERS]     
})
@RouteConfig([
	{ path: '/', redirectTo: ['/Welcome'] },
    { path: '/signup', name: 'Signup', component: SignupComponent },
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true }
    { path: '/landing', name: 'Landing', component: LandingComponent },
    { path: '/atmwd', name: 'ATMWithdraw', component: ATMWithdrawComponent },
    { path: '/payamount', name: 'PayAmount', component: PayAmountComponent },
    { path: '/deposit', name: 'DepositAmount', component: DepositAmountComponent }
])
export class AppComponent {


   
}
