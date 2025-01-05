/**************************

# Picsartpro 美易📷

***************************

[rewrite_local]
https://api.(meiease|picsart).(cn|com)/gw-v2/shop/subscription/apple/purchases url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/refs/heads/main/Picsartpro.js

hostname = api.meiease.*,api.picsart.*

**************************/

var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "status" : "success",
  "response" : [
    {
      "status" : "SUBSCRIPTION_PURCHASED",
      "order_id" : "210001770182151",
      "original_order_id" : "210001514424729",
      "is_trial" : false,
      "plan_meta" : {
        "storage_limit_in_mb" : 512000,
        "frequency" : "yearly",
        "scope_id" : "full",
        "id" : "com.picsart.studio.subscription_plus_tier_yearly",
        "product_id" : "subscription_plus_tier_yearly",
        "level" : 1000,
        "auto_renew_product_id" : "com.picsart.studio.subscription_plus_tier_yearly",
        "type" : "renewable",
        "permissions" : [
          "premium_tools_standard"
        ],
        "description" : "",
        "tier_id" : "plus"
      },
      "limitation" : {
        "max_count" : 5,
        "limits_exceeded" : false
      },
      "reason" : "ok",
      "subscription_id" : "com.picsart.studio.subscription_plus_tier_yearly",
      "is_eligible_for_introductory" : false,
      "purchase_date" : 1715695156000,
      "expire_date" : 1872518379000
    }
  ]
}


body = JSON.stringify(obj);
$done({body});