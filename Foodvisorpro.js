/*******************************
Foodvisorpro
********************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/refs/heads/main/Foodvisorpro.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-request-header https://raw.githubusercontent.com/nmmmmmn/QuantumultX/refs/heads/main/Foodvisorpro.js

[mitm] 
hostname = api.revenuecat.com
*******************************/

let obj = {};

if(typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  obj.headers = $request.headers;
}else {
  let body = JSON.parse(typeof $response != "undefined" && $response.body || null);
  if(body && body.subscriber) {
    let date = {"expires_date": "2999-01-01T00:00:00Z","original_purchase_date":"2021-01-01T00:00:00Z","purchase_date": "2021-01-01T00:00:00Z","ownership_type": "PURCHASED","store": "app_store"};
    let subscriber = body.subscriber;
    let bundle_id = $request.headers["X-Client-Bundle-ID"]?$request.headers["X-Client-Bundle-ID"]:$request.headers["User-Agent"].match(/^[%a-zA-Z0-9]+/)[0];
    const list = [
    
    {"app_name":"Foodvisor","bundle_id":"com.foodvisor.Foodvisor","product_id":"com.foodvisor.Foodvisor.lifetime","entitlements":["coaching","daily_assessment","diet_article","full_access","journal","nutritional_facts","premium","recipe"],"version":"7.5.1"},
       ];  
   for(let data of list){
     if(bundle_id == data.bundle_id || bundle_id == data.app_name){
       let product_id = data.product_id;
       let entitlements = data.entitlements;
       subscriber.subscriptions[(product_id)] = date;
       for (let entitlement of entitlements) {
         subscriber.entitlements[(entitlement)] = date;        
         subscriber.entitlements[(entitlement)].product_identifier = product_id; 
       }
       break; 
     }   
   }
   obj.body = JSON.stringify(body);
  }
}

$done(obj);