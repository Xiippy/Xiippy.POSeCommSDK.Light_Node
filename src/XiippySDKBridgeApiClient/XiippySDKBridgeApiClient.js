// *******************************************************************************************
// Copyright © 2019 Xiippy.ai. All rights reserved. Australian patents awarded. PCT patent pending.
//
// NOTES:
//
// - No payment gateway SDK function is consumed directly. Interfaces are defined out of such interactions and then the interface is implemented for payment gateways. Design the interface with the most common members and data structures between different gateways. 
// - A proper factory or provider must instantiate an instance of the interface that is interacted with.
// - Any major change made to SDKs should begin with the c sharp SDK with the mindset to keep the high-level syntax, structures and class names the same to minimise porting efforts to other languages. Do not use language specific features that do not exist in other languages. We are not in the business of doing the same thing from scratch multiple times in different forms.
// - Pascal Case for naming conventions should be used for all languages
// - No secret or passwords or keys must exist in the code when checked in
//
// *******************************************************************************************



const fetch = require('node-fetch');
const Constants= require('./Constants').Constants;
var XiippySigv1Util = require('../Utils/XiippySigv1Util');
module.exports =

    class XiippySDKBridgeApiClient {
               ApplicationJson = "application/json";
        constructor(_IsTest, _BridgeAPIKey, _BridgeBaseUrl, _MerchantID, _MerchantGroupID) {

            this.BridgeBaseUrl = _BridgeBaseUrl;
            this.IsTest = _IsTest;
            this.BridgeAPIKey = _BridgeAPIKey;
            this.MerchantID = _MerchantID;
            this.MerchantGroupID = _MerchantGroupID;
        }

        async InitiateXiippyPayment(req) {
            const resInStr = JSON.stringify(req);

            var reqObj = {
                method: 'post',
                body: resInStr,
                headers: { 'Content-Type': this.ApplicationJson }
            };

            // This is critical!
            reqObj.headers['Accept'] = this.ApplicationJson;

            // Add the authentication signature headers
            XiippySigv1Util.AddXiippyV1RequestSignatureToClient(resInStr, reqObj, this.BridgeAPIKey);

            const response = await fetch(`${this.BridgeBaseUrl}${Constants.InitiateXiippyPaymentPath}`, reqObj);


            if (!response.ok) {
                const responseString = await response.text();

                throw new Error(`Response Code: ${response.status} Body: ${responseString}`);
            }

            const returnedObj = await response.json();

            return returnedObj;
        }
    }