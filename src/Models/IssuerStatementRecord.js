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
    class IssuerStatementRecord {
        constructor() {
            this.RandomStatementID = "";
            this.StatementItems =null;
            this.ElectronicPayments =null;
            this.CashPayments =null;
            this.TotalBillVariations =null;
            this.ShiftID = "";
            this.StatementTimeStamp = "";
            this.IssuersPrivateMetadata = {};
            this.StatementCreationDate = "";
            this.StatementText = "";
            this.Description = "";
            this.PersonResponsible = "";
            this.IssuerLogoUrl = "";
            this.DetailsInHeader = "";
            this.TotalAmount = 0.0;
            this.TotalTaxAmount = 0.0;
            this.DetailsInBodyBeforeItems = "";
            this.DetailsInBodyAfterItems = "";
            this.DetailsInFooter = "";
            this.StatementIdentifier = "";
            this.StatementIdentifier2 = "";
            this.StatementIdentifier3 = "";
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
            this.AttachmentPageTop = null;
            this.AttachmentPageTopMimeType = "";
            this.AttachmentItemsTop =null;
            this.AttachmentItemsTopMimeType = "";
            this.AttachmentItemsBottom =null;
            this.AttachmentItemsBottomMimeType = "";
            this.AttachmentPageBottom =null;
            this.AttachmentPageBottomMimeType = "";
            this.TotalLoyaltyPoints = 0.0;
            this.PaymentProcessingResult = 0;
            this.PaymentProcessingMsg = "";
            this.UniqueStatementID = "";
            this.PaymentNameAddressRequestObject = null;
            this.RetailerGroupID = "";
            this.MetaDataExtras = null;
        }
    }
