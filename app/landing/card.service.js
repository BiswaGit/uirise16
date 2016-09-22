System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var CardService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            CardService = (function () {
                function CardService(_http) {
                    this._http = _http;
                    this._cardUrl = 'api/cards/cards.json';
                    this._cardDetails = 'http://d152e8d0.ngrok.io/riseapi2016/users';
                    this._login = 'http://d152e8d0.ngrok.io/riseapi2016/login';
                }
                CardService.prototype.authenticateUser = function (userName, password) {
                    console.log(userName);
                    //this._login = 'http://d152e8d0.ngrok.io/riseapi2016/login?userid='+userName+'&password='+password;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.post('http://apirise16.azurewebsites.net/api/login', JSON.stringify({ "username": userName, "password": password }), { headers: headers })
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                CardService.prototype.getCardsDetails = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.post('http://apirise16.azurewebsites.net/api/accounts', JSON.stringify({ "usertoken": sessionStorage.getItem("userSession"), "cobrandtoken": sessionStorage.getItem("cobrandSession") }), { headers: headers })
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                CardService.prototype.submitATMWithdrawAmount = function (userName, cardNumber, amount) {
                    var body = JSON.stringify({ userName: userName, cardNumber: cardNumber, amount: amount });
                    this._http.post('http://localhost:3000/sessions/create', body, { headers: this.contentHeaders })
                        .subscribe(function (response) {
                    }, function (error) {
                        alert(error.text());
                        console.log(error.text());
                    });
                };
                CardService.prototype.registerUser = function (username, password, mobile) {
                    //this.userid = '111';
                    var userid = "111";
                    var body = JSON.stringify({ userid: userid, username: username, password: password, mobile: mobile });
                    this._http.post('http://ad43458d.ngrok.io/riseapi2016/adduser', body, { headers: { 'Content-Type': 'application/json' } })
                        .subscribe(function (response) {
                        console.log(response.json());
                    }, function (error) {
                        alert(error.text());
                        console.log(error.text());
                    });
                };
                CardService.prototype.generatePassCode = function (userName, cardNumber, amount, atmPin) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.get('api/cards/passcode.json', { headers: headers })
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                CardService.prototype.handleError = function (error) {
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error || 'Server error');
                };
                CardService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CardService);
                return CardService;
            }());
            exports_1("CardService", CardService);
        }
    }
});
//# sourceMappingURL=card.service.js.map