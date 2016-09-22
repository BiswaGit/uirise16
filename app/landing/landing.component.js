System.register(['angular2/core', 'angular2/router', './card.service'], function(exports_1, context_1) {
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
    var LandingComponent;
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
            LandingComponent = (function () {
                function LandingComponent(_routeParams, _cardService, _router) {
                    this._routeParams = _routeParams;
                    this._cardService = _cardService;
                    this._router = _router;
                    this.pageTitle = 'Cardless Money';
                }
                LandingComponent.prototype.ngOnInit = function () {
                    var userName = this._routeParams.get('userName');
                    this.userName = userName;
                    this.getUserCardDetails();
                };
                ;
                LandingComponent.prototype.validateCredentials = function () {
                    //TODO
                    return true;
                };
                ;
                LandingComponent.prototype.getUserCardDetails = function () {
                    var _this = this;
                    this._cardService.getCardsDetails()
                        .subscribe(function (cards) { return _this.cards = cards; }, function (error) { return _this.errorMessage = error; });
                };
                ;
                LandingComponent.prototype.logout = function () {
                    this._router.navigate(['Welcome']);
                };
                ;
                LandingComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/landing/landing.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, card_service_1.CardService, router_1.Router])
                ], LandingComponent);
                return LandingComponent;
            }());
            exports_1("LandingComponent", LandingComponent);
        }
    }
});
//# sourceMappingURL=landing.component.js.map