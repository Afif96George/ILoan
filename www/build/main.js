webpackJsonp([5],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EligiblityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EligiblityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EligiblityPage = /** @class */ (function () {
    function EligiblityPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EligiblityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EligiblityPage');
    };
    EligiblityPage.prototype.calculateMatch = function () {
        // console.log(this.salaryAmount);
        var standardHouse = 500000;
        var nettIncome = (this.salaryAmount + this.CoAppSalary) - (this.CommitmentAmount + this.ExpensesAmount);
        var percentLoan = 0;
        var TotalLoan = 0;
        // var TotalLoan=0;
        //  TotalLoan = (this.MortgageAmount * (percentLoan/100));
        //statement
        if (nettIncome > 5000) {
            if (this.MortgageAmount > standardHouse) {
                percentLoan = 50;
            }
            else {
                percentLoan = 20;
            }
        }
        else
            (nettIncome < 5000);
        {
            if (this.MortgageAmount > standardHouse) {
                percentLoan = 90;
            }
            else {
                percentLoan = 40;
            }
        }
        TotalLoan = (this.MortgageAmount * (percentLoan * 0.01));
        console.log('thus answer :' + "/n" + percentLoan);
        console.log('AMount' + TotalLoan);
        this.LoanAmount = TotalLoan;
        this.percentageLoan = percentLoan;
    };
    EligiblityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eligiblity',template:/*ion-inline-start:"C:\Users\USER\Documents\Ionic File\Iloan\src\pages\eligiblity\eligiblity.html"*/'<!--\n  Generated template for the EligiblityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Eligiblity</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating >Salary</ion-label>\n      <ion-input type="number" [(ngModel)]="salaryAmount" ></ion-input>\n     \n    </ion-item>\n    \n    <ion-item>\n        <ion-label floating>Co Applicant Salary</ion-label>\n        <ion-input type="number"  [(ngModel)]="CoAppSalary"></ion-input>\n      </ion-item>\n\n    <ion-item>\n      <ion-label floating>Commitment</ion-label>\n      <ion-input type="number"[value]="CommitmentAmount" [(ngModel)]="CommitmentAmount"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label floating>Expenses</ion-label>\n      <ion-input type="number"[value]="ExpensesAmount" [(ngModel)]="ExpensesAmount"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Mortgage Amount</ion-label>\n      <ion-input type="number" [value]= "MortgageAmount" [(ngModel)]="MortgageAmount"></ion-input>\n    </ion-item>\n\n  </ion-list>\n      <ion-list>\n       <ion-item>\n         Your Loan : {{ LoanAmount }}\n       </ion-item>\n       <ion-item>\n        percentage : {{ percentageLoan  }}\n      </ion-item>\n      </ion-list>\n\n  <div id="center">\n        <button ion-button round (click)="calculateMatch()">Search</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\Documents\Ionic File\Iloan\src\pages\eligiblity\eligiblity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EligiblityPage);
    return EligiblityPage;
}());

//# sourceMappingURL=eligiblity.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MortgagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__results_mort_results_mort__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MortgagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MortgagePage = /** @class */ (function () {
    function MortgagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MortgagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MortgagePage');
    };
    MortgagePage.prototype.clicked = function () {
        console.log("button clicked!");
        console.log("mortgage: " + this.mortgageAmount);
        console.log("interest: " + this.interest);
        console.log("payment: " + this.payment);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__results_mort_results_mort__["a" /* ResultsMortPage */], { param1: this.mortgageAmount, param2: this.interest, param3: this.payment });
    };
    MortgagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-mortgage',template:/*ion-inline-start:"C:\Users\USER\Documents\Ionic File\Iloan\src\pages\mortgage\mortgage.html"*/'<!--\n  Generated template for the MortgagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Mortgage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div id ="container">\n  <ion-list >\n\n    <ion-item id="Box">\n      <ion-label stacked >Mortgage amount</ion-label>\n      <ion-input type="number" [value]="mortgageAmount" [(ngModel)]="mortgageAmount"></ion-input>\n    </ion-item>\n    \n    <ion-item id="Box">\n      <ion-label stacked>Interest rate</ion-label>\n      <ion-input type="number" [value]="interest" [(ngModel)]="interest" ></ion-input>\n    </ion-item>\n    \n    <ion-item id="Box">\n      <ion-label stacked>Monthly payment</ion-label>\n      <ion-input type="number" [value]="payment" [(ngModel)]="payment" ></ion-input>\n    </ion-item>\n    \n  \n    </ion-list>\n  </div>\n    \n<div id="center">\n  <button ion-button outline (click)="clicked()">Calculate</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\Documents\Ionic File\Iloan\src\pages\mortgage\mortgage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], MortgagePage);
    return MortgagePage;
}());

//# sourceMappingURL=mortgage.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsMortPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ResultsMortPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultsMortPage = /** @class */ (function () {
    function ResultsMortPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.months = 0;
        this.mortgageAmount = this.navParams.get('param1');
        this.interest = this.navParams.get('param2');
        this.payment = this.navParams.get('param3');
        this.list = [];
    }
    ResultsMortPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultsMortPage');
        console.log(this.mortgageAmount);
        console.log(this.interest);
        console.log(this.payment);
        this.calculateMortgage();
    };
    ResultsMortPage.prototype.calculateMortgage = function () {
        while (parseFloat(this.mortgageAmount) > parseFloat(this.payment)) {
            console.log("while loop was executed");
            var pay = this.payment - (this.mortgageAmount * (this.interest / 100)) / 12;
            this.mortgageAmount = this.mortgageAmount - pay;
            this.months++;
            var interest = this.payment - pay;
            var year = (this.months++ / 12);
            // this.listBalance.push(this.mortgageAmount.toFixed(2));
            // this.listInterest.push(this.interest.toFixed(2));
            // this.listPayment.push(pay.toFixed(2));
            // this.listMonth.push(this.TotalCredithMonth);
            //this.list.push(this.months + ". Balance: " + this.mortgageAmount.toFixed(2) + "MYR Payment: " + pay.toFixed(2) + "MYR Interest: " + interest.toFixed(2) + "MYR");
            //this.list.push({"balance": this.mortgageAmount.toFixed(2)});
            this.list.push({ "interest": interest.toFixed(2) });
            this.list.push({ "payment": pay.toFixed(2) });
            this.list.push({ "month": year.toFixed(0.1) });
            console.log(this.months + " Rest: " + this.mortgageAmount + " Payment: " + pay + " Interest: " + interest);
        }
        /* let lists = this.list;
              lists.pay = pay;
              lists.payment = this.mortgageAmount;
              lists.interest = this.interest;
              lists.year = this.TotalCredithMonth;
              this.list.push(lists.pay,lists.payment,lists.interest,lists.year);
            */
        //
        var CreditDurationMth = this.months + 1;
        var TotalcreditMnth = CreditDurationMth / 12;
        this.CreditDurationMonth = CreditDurationMth;
        this.TotalCredithMonth = TotalcreditMnth.toFixed(1);
        console.log(CreditDurationMth + "Last month Balance " + this.mortgageAmount + " Loan Paid Out");
        console.log("Credit Duration: " + CreditDurationMth + " Monthly Payment. " + TotalcreditMnth + " Years");
        this.months = 0;
    };
    ResultsMortPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-results-mort',template:/*ion-inline-start:"C:\Users\USER\Documents\Ionic File\Iloan\src\pages\results-mort\results-mort.html"*/'<!--\n  Generated template for the ResultsMortPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ResultsMort</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div id="center">\n    Mortgage duration: {{CreditDurationMonth}} months or {{ TotalCredithMonth}} years</div>\n    <ion-list>\n      <ion-grid style="margin-top : 10px;">\n       <ion-row>\n          <ion-col>\n            <b>Payment (MYR)</b>\n          </ion-col>\n          <ion-col>\n            <b>Interest(MYR)</b>\n          </ion-col>\n          <ion-col>\n            <b>Year</b>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor="let item of list"  class="app-font-25">\n          <ion-col>\n            <b>{{item.payment}}</b>\n          </ion-col>\n          <ion-col>\n            <b>{{item.interest}}</b>\n          </ion-col>\n          <ion-col>\n            <b>{{item.month}}</b>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\Documents\Ionic File\Iloan\src\pages\results-mort\results-mort.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ResultsMortPage);
    return ResultsMortPage;
}());

//# sourceMappingURL=results-mort.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SearchBankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchBankPage = /** @class */ (function () {
    function SearchBankPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.BanklistRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/Bank');
        this.BanklistRef.on('value', function (Banklist) {
            var Banks = [];
            Banklist.forEach(function (Bank) {
                Banks.push(Bank.val());
                return false;
            });
            _this.Banklist = Banks;
            _this.loadedBankList = Banks;
        });
    }
    SearchBankPage.prototype.initializeItems = function () {
        this.Banklist = this.loadedBankList;
    };
    //array
    SearchBankPage.prototype.getBank = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        // search by interest Rate
        this.Banklist = this.Banklist.filter(function (v) {
            if (v.interestRate && q) {
                if (v.interestRate.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        console.log(q, this.Banklist.length);
    };
    SearchBankPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchBankPage');
    };
    SearchBankPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-bank',template:/*ion-inline-start:"C:\Users\USER\Documents\Ionic File\Iloan\src\pages\search-bank\search-bank.html"*/'<!--\n  Generated template for the SearchBankPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Search Bank</ion-title>\n  </ion-navbar>\n<ion-label>Find your Own Bank</ion-label>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-toolbar>\n    <ion-searchbar (ionInput)="getBank ($event)"></ion-searchbar>\n</ion-toolbar>\n<ion-list inset>\n<ion-item *ngFor= "let Banks of Banklist" class="app-font-25">\n   <p>Bank Name :{{Banks.Bank_name}}</p>\n   <p>Interest Rate :{{Banks.interestRate}} </p>\n   <p>Description: {{Banks.interestRateDescription}}</p>\n   <p>Mortgage Amount :{{Banks.currency}} {{Banks.amount}}</p>\n    <p>Monthly Payment : {{Banks.downPayment}}</p>\n</ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\Documents\Ionic File\Iloan\src\pages\search-bank\search-bank.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], SearchBankPage);
    return SearchBankPage;
    var _a, _b;
}());

/*declare restprovider as a public inside contructor and call up bank and search*/
//# sourceMappingURL=search-bank.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/egbil-graph/egbil-graph.module": [
		289,
		0
	],
	"../pages/eligiblity/eligiblity.module": [
		290,
		4
	],
	"../pages/mortgage/mortgage.module": [
		291,
		3
	],
	"../pages/results-mort/results-mort.module": [
		292,
		2
	],
	"../pages/search-bank/search-bank.module": [
		293,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\USER\Documents\Ionic File\Iloan\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\Documents\Ionic File\Iloan\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\USER\Documents\Ionic File\Iloan\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Islamic Calculator</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n</ion-content>\n<!--\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n-->'/*ion-inline-end:"C:\Users\USER\Documents\Ionic File\Iloan\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

/*
selectedItem: any;
icons: string[];
items: Array<{title: string, note: string, icon: string}>;
*/
/*
// If we navigated to this page, we will have an item available as a nav param
this.selectedItem = navParams.get('item');

// Let's populate this page with some filler content for funzies
this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
'american-football', 'boat', 'bluetooth', 'build'];

this.items = [];
for (let i = 1; i < 11; i++) {
  this.items.push({
    title: 'Item ' + i,
    note: 'This is item #' + i,
    icon: this.icons[Math.floor(Math.random() * this.icons.length)]
  });
}
}

itemTapped(event, item) {
// That's right, we're pushing to ourselves!
this.navCtrl.push(ListPage, {
  item: item
});
}*/
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_bank_search_bank__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mortgage_mortgage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_results_mort_results_mort__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_eligiblity_eligiblity__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_search_bank_search_bank__["a" /* SearchBankPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_mortgage_mortgage__["a" /* MortgagePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_results_mort_results_mort__["a" /* ResultsMortPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_eligiblity_eligiblity__["a" /* EligiblityPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/egbil-graph/egbil-graph.module#EgbilGraphPageModule', name: 'EgbilGraphPage', segment: 'egbil-graph', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/eligiblity/eligiblity.module#EligiblityPageModule', name: 'EligiblityPage', segment: 'eligiblity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mortgage/mortgage.module#MortgagePageModule', name: 'MortgagePage', segment: 'mortgage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/results-mort/results-mort.module#ResultsMortPageModule', name: 'ResultsMortPage', segment: 'results-mort', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-bank/search-bank.module#SearchBankPageModule', name: 'SearchBankPage', segment: 'search-bank', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_search_bank_search_bank__["a" /* SearchBankPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_mortgage_mortgage__["a" /* MortgagePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_results_mort_results_mort__["a" /* ResultsMortPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_eligiblity_eligiblity__["a" /* EligiblityPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_search_bank_search_bank__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_mortgage_mortgage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_eligiblity_eligiblity__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */] },
            { title: 'Mortgage', component: __WEBPACK_IMPORTED_MODULE_1__pages_mortgage_mortgage__["a" /* MortgagePage */] },
            { title: 'Search Bank', component: __WEBPACK_IMPORTED_MODULE_0__pages_search_bank_search_bank__["a" /* SearchBankPage */] },
            { title: 'Eligbility', component: __WEBPACK_IMPORTED_MODULE_8__pages_eligiblity_eligiblity__["a" /* EligiblityPage */] }
        ];
        //firebase constructor
        __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.initializeApp({
            apiKey: 'AIzaSyAWV_-83YRsK0w_JEDwYYS4AiuO6QXBDqo',
            authDomain: 'banklist-cb9ea.firebaseapp.com',
            databaseURL: 'https://banklist-cb9ea.firebaseio.com',
            storageBucket: 'banklist-cb9ea.appspot.com',
            messagingSenderId: '760352646404',
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\USER\Documents\Ionic File\Iloan\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\USER\Documents\Ionic File\Iloan\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map