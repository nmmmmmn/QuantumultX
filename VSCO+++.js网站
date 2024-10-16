/**************************
 
*  * @Author: 🐈🐈🐈

    \📷VSCO+++\

***************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/VSCO+++.js
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/VSCO+++.js

[MITM]
hostname = api.revenuecat.com

**************************/

const jie = {};
const lllll = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  jie.headers = $request.headers;
} else if (lllll && lllll.subscriber) {
  lllll.subscriber.subscriptions = lllll.subscriber.subscriptions || {};
  lllll.subscriber.entitlement = lllll.subscriber.entitlement || {};
  const app = 'gd';const list = {'gd':{name: 'pro', id: 'vscopro_global_5999_annual_AutoFreeTrial'}};
  const data = {
    "expires_date": "6666-06-06T06:06:06Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"};
for (const i in list) { if (new RegExp(`^${i}`, `i`).test(app)) {
lllll.subscriber.subscriptions[list[i].id] = data;
lllll.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
lllll.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
                break;
          }
    }
    jie.body = JSON.stringify(lllll);
}
$done(jie);
