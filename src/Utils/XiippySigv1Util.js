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
const crypto= require ('crypto');
const XiippySDKBridgeApiClient= require('../XiippySDKBridgeApiClient/XiippySDKBridgeApiClient');
module.exports =
    class XiippySigv1Util {



        static hashHMAC(key, message) {
            const hash = crypto.createHmac('sha256', key);
            hash.update(message);
            return hash.digest();
        }

        static AddXiippyV1RequestSignatureToClient(content, httpClient, apiKey) {
           const XiippyReqSignatureHeader = "XIIPPY-API-SIG-V1";
           const XiippyReqMomentHeader = "XIIPPY-MOMENT-V1";
            if (apiKey) {
                const key = Buffer.from(apiKey, 'base64');
                const now = Date.now();

                const stringToSign = `${content}_${now}`;

                const sigBytes = XiippySigv1Util.hashHMAC(key, Buffer.from(stringToSign, 'utf-8'));
                const signatureHeaderValue = sigBytes.toString('base64');

                // Add the moment header
                httpClient.headers[XiippyReqMomentHeader] = now.toString();

                // Add the signature header
                httpClient.headers[XiippyReqSignatureHeader] = signatureHeaderValue;
            }
        }

        static VerifyXiippyV1RequestSignature(content, moment, signature, apiKey) {
            if (apiKey) {
                const key = Buffer.from(apiKey, 'base64');
                const now = Date.now();

                if (now - moment > 20000) { // Allow a 20-second window of validity
                    return false;
                }

                const stringToSign = `${content}_${moment}`;

                const sigBytes = XiippySigv1Util.hashHMAC(key, Buffer.from(stringToSign, 'utf-8'));
                const sigBytesPassed = Buffer.from(signature, 'base64');

                return Buffer.compare(sigBytes, sigBytesPassed) === 0;
            }
            return false;
        }
    }