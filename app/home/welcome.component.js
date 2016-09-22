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
    var core_1, router_1, router_2, card_service_1;
    var WelcomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (card_service_1_1) {
                card_service_1 = card_service_1_1;
            }],
        execute: function() {
            WelcomeComponent = (function () {
                function WelcomeComponent(router, _cardService) {
                    this.router = router;
                    this._cardService = _cardService;
                    this.pageTitle = 'Cardless Money';
                }
                WelcomeComponent.prototype.ngOnInit = function () {
                    sessionStorage.clear();
                };
                ;
                WelcomeComponent.prototype.authenticate = function () {
                    var _this = this;
                    this.errorMessage = "";
                    this._cardService.authenticateUser(this.userName, this.password)
                        .subscribe(function (isUserAuthenticated) { return _this.isUserAuthenticated = isUserAuthenticated; }, function (error) { return _this.errorMessage = error; });
                    console.log(this.isUserAuthenticated);
                    if (this.isUserAuthenticated.success === 'true') {
                        sessionStorage.setItem('cobrandSession', this.isUserAuthenticated.cobrandSession);
                        sessionStorage.setItem('userSession', this.isUserAuthenticated.userSession);
                        this.router.parent.navigateByUrl('/landing?userName=' + this.userName);
                    }
                    else {
                        this.errorMessage = 'Invalid User Credentials';
                    }
                };
                WelcomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/home/welcome.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_2.Router, card_service_1.CardService])
                ], WelcomeComponent);
                return WelcomeComponent;
            }());
            exports_1("WelcomeComponent", WelcomeComponent);
        }
    }
});
//# sourceMappingURL=welcome.component.js.map