/**************************

Polarr+++
潑辣修圖解鎖特權（需登入）

***************************

[rewrite_local]
^https:\/\/api\.polaxiong\.com\/v1\/payments\/(appleiap\/receipts\/confirmation|profiles\/@me\/subscription) url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/Polarr+++.js

[mitm]
hostname = api.polaxiong.com


**************************/

const statusCode = typeof $task !== "undefined" ? "HTTP/1.1 200 OK" : 200;
const response = { status: statusCode, headers: $response.headers };

if ($response.body && $request.url.includes("v1/payments/profiles/@me/subscription")) {
  response.body = JSON.stringify({
    "isSubscribed": true,
    "planId": "co.polarr.ppe.premium.studio.yearly",
    "subscriptionProduct": "yearly",
    "isTrial": false,
    "app": "PPE",
    "isUnlimited": true,
    "expiryDate": "2053-08-17T19:38:37.000Z",
    "planType": "yearly",
    "planTier": "studio",
    "startDate": "2023-08-17T19:38:37.000Z",
    "subscriptionTier": "studio",
    "paymentChannel": "AppleIapSubscription",
    "membershipExpiryDate": "2053-08-17T19:38:37.000Z"
  });
}

if ($response.body && $request.url.includes("v1/payments/appleiap/receipts/confirmation")) {
  response.body = JSON.stringify({
    "app": "PPE",
    "planType": "yearly",
    "planTier": "studio",
    "isUnlimited": true,
    "membershipExpiryDate": "2053-08-17T19:38:37.000Z"
  });
}

$done(response)