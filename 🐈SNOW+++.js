/*

SNOWAI写真

[rewrite_local]
^https:\/\/user-snow-api\.snow\.me\/v1\/purchase\/subscription\/subscriber\/status$ url script-response-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/snow.js

[mitm]
hostname = *.snow.me
*/



if ($response.body !== 'undefined') {
  var Parr = JSON.parse($response.body);
  const url = $request.url;
  var ids;
  var packageName;

  if (url.indexOf('EPIK') !== -1) {
    ids = "com.snowcorp.epik.subscribe.plan.oneyear";
    packageName = "com.snowcorp.epik";
  } else if (url.indexOf('SNOW') !== -1) {
    ids = "com.campmobile.snow.subscribe.oneyear";
    packageName = "com.snowcorp.snow";
  }

  Parr["result"]["products"].forEach(product => {
    product.productId = ids;
  });

  Parr["result"]["activated"] = true;

  $done({ body: JSON.stringify(Parr) });
}