/*
 *
 *
：OldRoll+ProCCD+ReLens+++


*******************************

[rewrite_local]

^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/OldRoll+ProCCD+ReLens+++.js

[mitm] 

hostname = buy.itunes.apple.com
*
*
*/




var objc = JSON.parse($response.body);
      
    objc = 
{
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1570093460,
    "receipt_creation_date" : "2022-02-11 12:15:16 Etc/GMT",
    "bundle_id" : "com.zijayrate.analogcam",
    "original_purchase_date" : "2021-12-30 15:44:40 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1640879429000",
        "transaction_id" : "360001014993384",
        "is_trial_period" : "false",
        "original_transaction_id" : "360001014993384",
        "purchase_date" : "2021-12-30 15:50:29 Etc/GMT",
        "product_id" : "com.zijayrate.analogcam.vipforever10",
        "original_purchase_date_pst" : "2021-12-30 07:50:29 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1640879429000",
        "purchase_date_pst" : "2021-12-30 07:50:29 America/Los_Angeles",
        "original_purchase_date" : "2021-12-30 15:50:29 Etc/GMT"
      }
    ],
    "adam_id" : 1570093460,
    "receipt_creation_date_pst" : "2022-02-11 04:15:16 America/Los_Angeles",
    "request_date" : "2022-02-11 12:22:48 Etc/GMT",
    "request_date_pst" : "2022-02-11 04:22:48 America/Los_Angeles",
    "version_external_identifier" : 847082545,
    "request_date_ms" : "1644582168459",
    "original_purchase_date_pst" : "2021-12-30 07:44:40 America/Los_Angeles",
    "application_version" : "3.0.2",
    "original_purchase_date_ms" : "1640879080000",
    "receipt_creation_date_ms" : "1644581716000",
    "original_application_version" : "2.7.0",
    "download_id" : 501017651398874591
  },
  "environment" : "Production",
  "status" : 0,
  "latest_receipt_info" : [
    {
      "auto_renew_status": "1"
      "expires_date": "6666-06-06 06:06:06 Etc\/GMT",
      "expires_date_pst": "6666-06-06 06:06:06 America\/Los_Angeles",
      "is_in_intro_offer_period": "false",
      "transaction_id": "540001260447637",
      "expires_date_ms": "148204937166000"
      "quantity" : "1",
      "purchase_date_ms" : "1640879429000",
      "transaction_id" : "360001014993384",
      "is_trial_period" : "false",
      "original_transaction_id" : "360001014993384",
      "purchase_date" : "2021-12-30 15:50:29 Etc/GMT",
      "product_id" : "com.zijayrate.analogcam.vipforever10",
      "original_purchase_date_pst" : "2021-12-30 07:50:29 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "original_purchase_date_ms" : "1640879429000",
      "purchase_date_pst" : "2021-12-30 07:50:29 America/Los_Angeles",
      "original_purchase_date" : "2021-12-30 15:50:29 Etc/GMT"
    }
  ],
  "latest_receipt" : "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"};

$done({body : JSON.stringify(objc)});