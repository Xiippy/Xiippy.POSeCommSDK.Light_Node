var XiippyLightPOSSDK = exports;
XiippyLightPOSSDK.version = require('./package.json').version;

XiippyLightPOSSDK.PaymentProcessingRequest = require('./src/Models/PaymentProcessingRequest');
XiippyLightPOSSDK.IssuerStatementRecord = require('./src/Models/IssuerStatementRecord');
XiippyLightPOSSDK.PaymentRecordCustomer = require('./src/Models/PaymentRecordCustomer');
XiippyLightPOSSDK.PaymentRecordCustomerAddress = require('./src/Models/PaymentRecordCustomerAddress');
XiippyLightPOSSDK.StatementItem = require('./src/Models/StatementItem');
XiippyLightPOSSDK.XiippySDKBridgeApiClient = require('./src/XiippySDKBridgeApiClient/XiippySDKBridgeApiClient');
XiippyLightPOSSDK.Utils = require('./src/Utils/Utils');
XiippyLightPOSSDK.Constants = require('./src/XiippySDKBridgeApiClient/Constants').Constants;