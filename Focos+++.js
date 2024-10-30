/***********************************

> 应用名称：focos+focoslive
> 下载地址：http://t.cn/AilyJ3mp
> 解锁说明：解锁高级会员权限
> 更新时间：2023-05-05
          
          
[rewrite_local]
  
# > focos|focoslive☆解锁会员权限（2023-05-05）
^https?:\/\/.*oracle\.bendingspoonsapps\.com\/v\d\/(users\/setup|purchases\/verify\/apple) url script-response-body https://raw.githubusercontent.com/nmmmmmn/QuantumultX/main/Focos+++.js


[mitm]
 
hostname = *.oracle.bendingspoonsapps.com


***********************************/




















var obj=JSON.parse($response.body);-1!=$request.url.indexOf("focoslive")?obj.me.active_subscriptions_ids=["com.focoslive.1y_t100_adj"]:obj.me.active_subscriptions_ids=["com.focos.1y_t80"],$done({body:JSON.stringify(obj)});