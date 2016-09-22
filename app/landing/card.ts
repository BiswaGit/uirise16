/* Defines the card entity */


    export interface Name {
        displayed: string;
    }

    export interface HolderProfile {
        name: Name;
    }

    export interface Refreshinfo {
        statusCode: number;
        statusMessage: string;
        lastRefreshed: Date;
        lastRefreshAttempt: Date;
        nextRefreshScheduled: Date;
    }

    export interface Balance {
        amount: number;
        currency: string;
    }

    export interface AmountDue {
        amount: number;
        currency: string;
    }

    export interface MinimumAmountDue {
        amount: number;
        currency: string;
    }

    export interface AvailableCredit {
        amount: number;
        currency: string;
    }

    export interface OriginalLoanAmount {
        amount: number;
        currency: string;
    }

    export interface Cash {
        amount: number;
        currency: string;
    }

    export interface MarginBalance {
        amount: number;
        currency: string;
    }

    export interface CashValue {
        amount: number;
        currency: string;
    }

    export interface TotalCashLimit {
        amount: number;
        currency: string;
    }

    export interface TotalCreditLine {
        amount: number;
        currency: string;
    }

    export interface AvailableBalance {
        amount: number;
        currency: string;
    }

    export interface CurrentBalance {
        amount: number;
        currency: string;
    }

    export interface AvailableCash {
        amount: number;
        currency: string;
    }

    export interface Account {
        CONTAINER: string;
        providerAccountId: number;
        isManual: boolean;
        accountName: string;
        accountStatus: string;
        url: string;
        isAsset: boolean;
        id: number;
        lastUpdated: Date;
        providerId: string;
        providerName: string;
        primaryRewardUnit: string;
        holderProfile: HolderProfile[];
        refreshinfo: Refreshinfo;
        accountNumber: string;
        balance: Balance;
        includeInNetWorth?: boolean;
        accountType: string;
        amountDue: AmountDue;
        dueDate: string;
        minimumAmountDue: MinimumAmountDue;
        availableCredit: AvailableCredit;
        maturityDate: string;
        interestRate?: number;
        originalLoanAmount: OriginalLoanAmount;
        originationDate: string;
        cash: Cash;
        marginBalance: MarginBalance;
        cashValue: CashValue;
        totalCashLimit: TotalCashLimit;
        totalCreditLine: TotalCreditLine;
        frequency: string;
        availableBalance: AvailableBalance;
        currentBalance: CurrentBalance;
        availableCash: AvailableCash;
    }

    export interface ICard {
        account: Account[];
    }

