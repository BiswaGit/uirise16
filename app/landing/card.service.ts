import { Injectable } from 'angular2/core';

import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';



import { ICard } from './card';

@Injectable()
export class CardService {
    private _cardUrl = 'api/cards/cards.json';
    
    private _cardDetails = 'http://d152e8d0.ngrok.io/riseapi2016/users';
    
    private _login = 'http://d152e8d0.ngrok.io/riseapi2016/login';
//001, abc123

	userid: string;

	
    constructor(private _http: Http) { }
    
    authenticateUser(userName: string, password: string): Observable<boolean>{

    
    	console.log(userName);

    	//this._login = 'http://d152e8d0.ngrok.io/riseapi2016/login?userid='+userName+'&password='+password;

		let headers = new Headers();

		headers.append('Content-Type', 'application/json');

    	 return this._http.post('http://apirise16.azurewebsites.net/api/login',JSON.stringify({"username":userName,"password":password}),{headers: headers})
            .map((response: Response) => <any> response.json())
            //.do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }
    
       getCardsDetails(): Observable<any[]> {
       
       let headers = new Headers();

		   headers.append('Content-Type', 'application/json');
       
        return this._http.post('http://apirise16.azurewebsites.net/api/accountss',JSON.stringify({"usertoken":sessionStorage.getItem("userSession"),"cobrandtoken":sessionStorage.getItem("cobrandSession")}) ,{headers: headers})
            .map((response: Response) => <ICard> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

	submitATMWithdrawAmount(userName: number, cardNumber: number, amount: number): void {
	 let body = JSON.stringify({ userName, cardNumber, amount });
		this._http.post('http://localhost:3000/sessions/create', body, { headers: this.contentHeaders })
	      .subscribe(
	        response => {
	        },
	        error => {
	          alert(error.text());
	          console.log(error.text());
	        }
	      );
	}
	
	registerUser(username: string, password: string, mobile:string) : void{
		
		 //this.userid = '111';
		 let userid = "111";
       let body = JSON.stringify({ userid, username, password,  mobile});
    
		
		
		 this._http.post('http://ad43458d.ngrok.io/riseapi2016/adduser', body, {headers : {'Content-Type':'application/json'}})
	      .subscribe(
	        response => {
	        	console.log(response.json());
	        },
	        error => {
	          alert(error.text());
	          console.log(error.text());
	        }
	      );
		
	}
	
	generatePassCode(userName: string, cardNumber:number, amount:number, atmPin:number) : void {
	let headers = new Headers();
		headers.append('Content-Type', 'application/json');

    	 return this._http.get('api/cards/passcode.json',{headers: headers})
            .map((response: Response) => <any> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
	}

     private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
}
