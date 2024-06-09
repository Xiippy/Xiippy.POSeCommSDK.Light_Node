/*******************************************************************************************
Copyright © 2019 Xiippy.ai. All rights reserved. Australian patents awarded. PCT patent pending.

NOTES:

- No payment gateway SDK function is consumed directly. Interfaces are defined out of such interactions and then the interface is implemented for payment gateways. Design the interface with the most common members and data structures between different gateways. 
A proper factory or provider must instantiate an instance of the interface that is interacted with.
- Any major change made to SDKs should begin with the c# SDK with the mindset to keep the high-level syntax, structures and class names the same to minimise porting efforts to other languages. Do not use language specific features that don't exist in other languages. We are not in the business of doing the same thing from scratch multiple times in different forms.
- Pascal Case for naming conventions should be used for all languages
- No secret or passwords or keys must exist in the code when checked in

*******************************************************************************************/
module.exports =
    class ElectronicPaymentPersisted {
        constructor() {
            this.ElectronicPaymentID = 0;
            this.RandomStatementID = "";
            this.Bank = "";
            this.MerchantAccountOwnerDetail = "";
            this.Terminal = "";
            this.Reference = "";
            this.CardNO = "";
            this.AccountType = "";
            this.CardExpiry = "";
            this.AID = "";
            this.ATC = "";
            this.TVR = "";
            this.CSN = "";
            this.AuthNo = "";
            this.PosRefNo = "";
            this.MAccountNumber = "";
            this.MRRN = "";
            this.MAuth = "";
            this.PaymentType = "";
            this.MLocationCode = "";
            this.MAccountType = "";
            this.APSN = "";
            this.ARQC = "";
            this.CurrencyCode = "";
            this.ExtraInfo1 = "";
            this.ExtraInfo2 = "";
            this.ExtraInfo3 = "";
            this.ExtraInfo4 = "";
            this.ExtraInfo5 = "";
            this.ExtraInfo6 = "";
            this.ExtraInfo7 = "";
            this.ExtraInfo8 = "";
            this.ExtraInfo9 = "";
            this.ExtraInfo10 = "";
            this.Purchase = 0.0;
            this.Total = 0.0;
            this.TransactionType = "";
            this.StatusId = "";
            this.TxnStatusId = "";
            this.Complete = "";
            this.StatementText = "";
            this.ApprovedFlag = false;
            this.ExpectedSettlementDate = "";
            this.ExpectedSettlementDateTimeZone = "";
            this.DateOfTransaction = "";
            this.DateOfTransactionTimeZone = "";
            this.STAN = "";
            this.DPSBillingId = "";
            this.ResponseCode = "";
            this.ResponseText = "";
            this.AmtSurcgarge = 0.0;
            this.AmtTip = 0.0;
            this.AmtCashOut = 0.0;
            this.CardType = "";
            this.MetaDataExtras = {};
            this.TSI = "";
            this.DedicatedFileName = "";
            this.CVM = "";
            this.AuthorizationCode = "";
            this.ApplicationPreferredName = "";
        }
    }
