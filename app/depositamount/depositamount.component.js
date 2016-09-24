System.register(['angular2/core', 'angular2/router', '../landing/card.service'], function(exports_1, context_1) {
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
    var core_1, router_1, card_service_1;
    var DepositAmountComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (card_service_1_1) {
                card_service_1 = card_service_1_1;
            }],
        execute: function() {
            DepositAmountComponent = (function () {
                function DepositAmountComponent(_routeParams, _router, _cardService) {
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._cardService = _cardService;
                    this.pageTitle = 'Cardless Money';
                }
                DepositAmountComponent.prototype.ngOnInit = function () {
                    var accountName = this._routeParams.get('accountName');
                    this.accountName = accountName;
                    var balance = this._routeParams.get('balance');
                    this.balance = balance;
                    var userName = this._routeParams.get('userName');
                    this.userName = userName;
                    var cardNumber = this._routeParams.get('cardNumber');
                    this.cardNumber = cardNumber;
                    this.qrstring = "{\"accountname\":\"" + accountName + "\",\"username\":\"" + userName + "\"}";
                };
                ;
                DepositAmountComponent.prototype.onBack = function () {
                    this._router.navigate(['Landing']);
                };
                DepositAmountComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/depositamount/depositamount.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router, card_service_1.CardService])
                ], DepositAmountComponent);
                return DepositAmountComponent;
            }());
            exports_1("DepositAmountComponent", DepositAmountComponent);
        }
    }
});
//# sourceMappingURL=depositamount.component.js.map