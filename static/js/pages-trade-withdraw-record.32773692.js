(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trade-withdraw-record"],{"3a86":function(a,t,e){a.exports=e.p+"static/images/pay/icon_bank.png"},4643:function(a,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return o}));var o={uNavbar:e("1ffe").default,uIcon:e("f27b").default,uEmpty:e("55db").default,uModal:e("6d9c").default,uLoadingIcon:e("6375").default},i=function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("v-uni-view",{staticClass:"app"},[o("u-navbar",{attrs:{title:a.$t("提现记录"),height:"120rpx",titleStyle:{color:"#fff",fontSize:"36rpx"},bgColor:"transparent",autoBack:!1,placeholder:!0,safeAreaInsetTop:!0}},[o("v-uni-view",{attrs:{slot:"left"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.goBack()}},slot:"left"},[o("u-icon",{staticClass:"icon",attrs:{name:"arrow-left",size:"46",color:"#fff"}})],1)],1),o("v-uni-view",{staticClass:"main"},[o("v-uni-view",{staticClass:"main-box"},[!a.dataList||a.dataList.length<=0?o("u-empty",{staticClass:"empty",attrs:{marginTop:"150rpx",textSize:"28rpx",textColor:"#999",iconSize:"0",icon:"",mode:"data",text:a.$t("暂无数据")}}):o("v-uni-scroll-view",{staticClass:"scroll-box",attrs:{"scroll-y":!0},on:{scrolltolower:function(t){arguments[0]=t=a.$handleEvent(t),a.loadMore.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"list-box"},a._l(a.dataList,(function(t,e){return o("v-uni-view",{key:e,staticClass:"list-item"},[o("v-uni-view",{staticClass:"title"},[1==t.status?o("v-uni-text",{staticClass:"name"},[a._v(a._s(a.$t(1==t.coin_type?"承兑商佣金":"承兑商交易额度"))+a._s(a.$t("提现审核中")))]):a._e(),3==t.status?o("v-uni-text",{staticClass:"name"},[a._v(a._s(a.$t(1==t.coin_type?"承兑商佣金":"承兑商交易额度"))+a._s(a.$t("提现驳回")))]):a._e(),2==t.status?o("v-uni-text",{staticClass:"name"},[a._v(a._s(a.$t(1==t.coin_type?"承兑商佣金":"承兑商交易额度"))+a._s(a.$t(20==t.pay_status?"提现成功":"提现打款中")))]):a._e(),o("v-uni-text",{staticClass:"copy",on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.showDetailModal(t)}}},[a._v(a._s(a.$t("查看详情")))])],1),o("v-uni-view",{staticClass:"desc"},[o("v-uni-text",{staticClass:"time"},[a._v(a._s(t.pay_at))]),o("v-uni-text",{staticClass:"money dec"},[a._v("-"+a._s(t.money||"0.00")+" "+a._s(a.$t(1==t.coin_type?"USDT":"MVT")))])],1)],1)})),1)],1)],1)],1),o("u-modal",{staticClass:"modal-box",staticStyle:{"z-index":"996"},attrs:{show:a.showDetail,title:a.$t("交易详情"),cancelText:a.$t("取消"),confirmColor:"#14ECCC",showCancelButton:!0,confirmText:a.$t("复制单号"),closeOnClickOverlay:!0},on:{confirm:function(t){arguments[0]=t=a.$handleEvent(t),a.copy(a.showInfo.order_no)},cancel:function(t){arguments[0]=t=a.$handleEvent(t),a.showDetail=!1},close:function(t){arguments[0]=t=a.$handleEvent(t),a.showDetail=!1}}},[o("v-uni-view",{staticClass:"modal-main"},[o("v-uni-view",{staticClass:"modal-main-box"},[o("v-uni-view",{staticClass:"row-item"},[o("v-uni-view",{staticClass:"label"},[a._v(a._s(a.$t("订单号")))]),o("v-uni-view",{staticClass:"text"},[a._v(a._s(a.showInfo.order_no))])],1),20==a.showInfo.pay_type?o("v-uni-view",{staticClass:"row-item"},[o("v-uni-view",{staticClass:"label"},[a._v(a._s(a.$t("提现地址")))]),o("v-uni-view",{staticClass:"text"},[a._v(a._s(a.showInfo.trc_url))])],1):a.showInfo.payment?o("v-uni-view",{staticClass:"row-item"},[o("v-uni-view",{staticClass:"label"},[a._v(a._s(a.$t("收款账号")))]),o("v-uni-view",{staticClass:"text payment"},[1==a.showInfo.payment.type?[o("v-uni-image",{staticClass:"icon",attrs:{src:e("56c7"),mode:"aspectFilla"}}),o("v-uni-text",{staticClass:"text-info"},[a._v(a._s(a.getName(a.showInfo,1)))])]:2==a.showInfo.payment.type?[o("v-uni-image",{staticClass:"icon",attrs:{src:e("e8a0f"),mode:"aspectFilla"}}),o("v-uni-text",{staticClass:"text-info"},[a._v(a._s(a.getName(a.showInfo,2)))])]:[o("v-uni-image",{staticClass:"icon",attrs:{src:e("3a86"),mode:"aspectFilla"}}),o("v-uni-view",{staticClass:"text-info"},[o("v-uni-view",{staticClass:"text-item"},[a._v(a._s(a.showInfo.payment.realname))]),o("v-uni-view",{staticClass:"text-item"},[a._v(a._s(a.showInfo.payment.bank_name)+a._s(a.showInfo.payment.bank_card_text))])],1)]],2)],1):a._e(),20==a.showInfo.pay_type&&2==a.showInfo.status?o("v-uni-view",{staticClass:"row-item"},[o("v-uni-view",{staticClass:"label"},[a._v(a._s(a.$t("钱包地址")))]),o("v-uni-view",{staticClass:"text"},[a._v(a._s(a.showInfo.wallet_url))])],1):30==a.showInfo.pay_type?o("v-uni-view",{staticClass:"row-item"},[o("v-uni-view",{staticClass:"label"},[a._v(a._s(a.$t("打款凭证")))]),o("v-uni-view",{staticClass:"text"},[o("v-uni-image",{staticClass:"image",attrs:{src:a.showInfo.payment_img,mode:"aspectFill"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.preViewImage(0,[a.showInfo.payment_img])}}})],1)],1):a._e(),o("v-uni-view",{staticClass:"row-item"},[o("v-uni-view",{staticClass:"label"},[a._v(a._s(a.$t("提现金额")))]),o("v-uni-view",{staticClass:"text"},[a._v(a._s(a.showInfo.money)+" "+a._s(a.$t(1==a.showInfo.coin_type?"USDT":"MVT")))])],1),o("v-uni-view",{staticClass:"row-item"},[o("v-uni-view",{staticClass:"label"},[a._v(a._s(a.$t("到账金额")))]),o("v-uni-view",{staticClass:"text"},[a._v(a._s(a.showInfo.actual_money)+" "+a._s(30==a.showInfo.pay_type?a.$t("元"):"USDT"))])],1),o("v-uni-view",{staticClass:"row-item"},[o("v-uni-view",{staticClass:"label"},[a._v(a._s(a.$t("提现时间")))]),o("v-uni-view",{staticClass:"text"},[a._v(a._s(a.showInfo.create_time))])],1),o("v-uni-view",{staticClass:"row-item"},[o("v-uni-view",{staticClass:"label"},[a._v(a._s(a.$t("提现状态")))]),o("v-uni-view",{staticClass:"text"},[1==a.showInfo.status?[a._v(a._s(a.$t("审核中")))]:a._e(),3==a.showInfo.status?[a._v(a._s(a.$t("已驳回")))]:a._e(),2==a.showInfo.status?[10==a.showInfo.pay_status?[a._v(a._s(a.$t("打款中")))]:a._e(),20==a.showInfo.pay_status?[a._v(a._s(a.$t("提现成功")))]:a._e()]:a._e()],2)],1),a.showInfo.audit_remark?o("v-uni-view",{staticClass:"row-item"},[o("v-uni-view",{staticClass:"label"},[a._v(a._s(a.$t("审核备注")))]),o("v-uni-view",{staticClass:"text"},[a._v(a._s(a.showInfo.audit_remark))])],1):a._e(),20==a.showInfo.pay_status?o("v-uni-view",{staticClass:"row-item"},[o("v-uni-view",{staticClass:"label"},[a._v(a._s(a.$t("到账时间")))]),o("v-uni-view",{staticClass:"text"},[a._v(a._s(a.showInfo.pay_at))])],1):a._e(),a.showInfo.hash?o("v-uni-view",{staticClass:"row-item"},[o("v-uni-view",{staticClass:"label"},[a._v(a._s(a.$t("交易哈希"))),o("v-uni-text",{staticClass:"copy",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.copy(a.showInfo.hash)}}},[a._v(a._s(a.$t("复制")))])],1),o("v-uni-view",{staticClass:"text hash",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.openUrl("https://tronscan.org/#/transaction/"+a.showInfo.hash)}}},[a._v(a._s(a.showInfo.hash))])],1):a._e()],1)],1)],1),o("u-loading-icon",{staticClass:"loading",attrs:{show:a.loading,size:"48",color:"#14ECCC","custom-style":"position:absolute;top:40%;left:0;right:0;margin:0 auto;z-index: 99;"}})],1)},n=[]},"4c3b":function(a,t,e){"use strict";var o=e("5458"),i=e.n(o);i.a},5458:function(a,t,e){var o=e("8ed9");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[a.i,o,""]]),o.locals&&(a.exports=o.locals);var i=e("967d").default;i("c7465fd6",o,!0,{sourceMap:!1,shadowMode:!1})},"55db":function(a,t,e){"use strict";e.r(t);var o=e("f2a9"),i=e("5ff6");for(var n in i)["default"].indexOf(n)<0&&function(a){e.d(t,a,(function(){return i[a]}))}(n);e("f40f");var d=e("828b"),r=Object(d["a"])(i["default"],o["b"],o["c"],!1,null,"6fa087a0",null,!1,o["a"],void 0);t["default"]=r.exports},"56c7":function(a,t){a.exports="data:image/png;base64,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"},"5ff6":function(a,t,e){"use strict";e.r(t);var o=e("f3f3"),i=e.n(o);for(var n in o)["default"].indexOf(n)<0&&function(a){e.d(t,a,(function(){return o[a]}))}(n);t["default"]=i.a},8748:function(a,t,e){var o=e("c86c");t=o(!1),t.push([a.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */.u-line-1[data-v-6fa087a0]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical!important}.u-line-2[data-v-6fa087a0]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important}.u-line-3[data-v-6fa087a0]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important}.u-line-4[data-v-6fa087a0]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important}.u-line-5[data-v-6fa087a0]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}.u-border[data-v-6fa087a0]{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.u-border-top[data-v-6fa087a0]{border-top-width:.5px!important;border-color:#dadbde!important;border-top-style:solid}.u-border-left[data-v-6fa087a0]{border-left-width:.5px!important;border-color:#dadbde!important;border-left-style:solid}.u-border-right[data-v-6fa087a0]{border-right-width:.5px!important;border-color:#dadbde!important;border-right-style:solid}.u-border-bottom[data-v-6fa087a0]{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}.u-border-top-bottom[data-v-6fa087a0]{border-top-width:.5px!important;border-bottom-width:.5px!important;border-color:#dadbde!important;border-top-style:solid;border-bottom-style:solid}.u-reset-button[data-v-6fa087a0]{padding:0;background-color:initial;font-size:inherit;line-height:inherit;color:inherit}.u-reset-button[data-v-6fa087a0]::after{border:none}.u-hover-class[data-v-6fa087a0]{opacity:.7}.u-primary-light[data-v-6fa087a0]{color:#ecf5ff}.u-warning-light[data-v-6fa087a0]{color:#fdf6ec}.u-success-light[data-v-6fa087a0]{color:#f5fff0}.u-error-light[data-v-6fa087a0]{color:#fef0f0}.u-info-light[data-v-6fa087a0]{color:#f4f4f5}.u-primary-light-bg[data-v-6fa087a0]{background-color:#ecf5ff}.u-warning-light-bg[data-v-6fa087a0]{background-color:#fdf6ec}.u-success-light-bg[data-v-6fa087a0]{background-color:#f5fff0}.u-error-light-bg[data-v-6fa087a0]{background-color:#fef0f0}.u-info-light-bg[data-v-6fa087a0]{background-color:#f4f4f5}.u-primary-dark[data-v-6fa087a0]{color:#398ade}.u-warning-dark[data-v-6fa087a0]{color:#f1a532}.u-success-dark[data-v-6fa087a0]{color:#53c21d}.u-error-dark[data-v-6fa087a0]{color:#e45656}.u-info-dark[data-v-6fa087a0]{color:#767a82}.u-primary-dark-bg[data-v-6fa087a0]{background-color:#398ade}.u-warning-dark-bg[data-v-6fa087a0]{background-color:#f1a532}.u-success-dark-bg[data-v-6fa087a0]{background-color:#53c21d}.u-error-dark-bg[data-v-6fa087a0]{background-color:#e45656}.u-info-dark-bg[data-v-6fa087a0]{background-color:#767a82}.u-primary-disabled[data-v-6fa087a0]{color:#9acafc}.u-warning-disabled[data-v-6fa087a0]{color:#f9d39b}.u-success-disabled[data-v-6fa087a0]{color:#a9e08f}.u-error-disabled[data-v-6fa087a0]{color:#f7b2b2}.u-info-disabled[data-v-6fa087a0]{color:#c4c6c9}.u-primary[data-v-6fa087a0]{color:#3c9cff}.u-warning[data-v-6fa087a0]{color:#f9ae3d}.u-success[data-v-6fa087a0]{color:#5ac725}.u-error[data-v-6fa087a0]{color:#f56c6c}.u-info[data-v-6fa087a0]{color:#909399}.u-primary-bg[data-v-6fa087a0]{background-color:#3c9cff}.u-warning-bg[data-v-6fa087a0]{background-color:#f9ae3d}.u-success-bg[data-v-6fa087a0]{background-color:#5ac725}.u-error-bg[data-v-6fa087a0]{background-color:#f56c6c}.u-info-bg[data-v-6fa087a0]{background-color:#909399}.u-main-color[data-v-6fa087a0]{color:#303133}.u-content-color[data-v-6fa087a0]{color:#606266}.u-tips-color[data-v-6fa087a0]{color:#909193}.u-light-color[data-v-6fa087a0]{color:#c0c4cc}.u-safe-area-inset-top[data-v-6fa087a0]{padding-top:0;padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.u-safe-area-inset-right[data-v-6fa087a0]{padding-right:0;padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right)}.u-safe-area-inset-bottom[data-v-6fa087a0]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.u-safe-area-inset-left[data-v-6fa087a0]{padding-left:0;padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left)}uni-toast[data-v-6fa087a0]{z-index:10090}uni-toast .uni-toast[data-v-6fa087a0]{z-index:10090}[data-v-6fa087a0]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-6fa087a0], uni-scroll-view[data-v-6fa087a0], uni-swiper-item[data-v-6fa087a0]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-empty[data-v-6fa087a0]{display:flex;flex-direction:row;flex-direction:column;justify-content:center;align-items:center}.u-empty__text[data-v-6fa087a0]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:%?20?%}.u-slot-wrap[data-v-6fa087a0]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:%?20?%}',""]),a.exports=t},"8ed9":function(a,t,e){var o=e("c86c");t=o(!1),t.push([a.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */.u-line-1[data-v-e601adde]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical!important}.u-line-2[data-v-e601adde]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important}.u-line-3[data-v-e601adde]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important}.u-line-4[data-v-e601adde]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important}.u-line-5[data-v-e601adde]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}.u-border[data-v-e601adde]{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.u-border-top[data-v-e601adde]{border-top-width:.5px!important;border-color:#dadbde!important;border-top-style:solid}.u-border-left[data-v-e601adde]{border-left-width:.5px!important;border-color:#dadbde!important;border-left-style:solid}.u-border-right[data-v-e601adde]{border-right-width:.5px!important;border-color:#dadbde!important;border-right-style:solid}.u-border-bottom[data-v-e601adde]{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}.u-border-top-bottom[data-v-e601adde]{border-top-width:.5px!important;border-bottom-width:.5px!important;border-color:#dadbde!important;border-top-style:solid;border-bottom-style:solid}.u-reset-button[data-v-e601adde]{padding:0;background-color:initial;font-size:inherit;line-height:inherit;color:inherit}.u-reset-button[data-v-e601adde]::after{border:none}.u-hover-class[data-v-e601adde]{opacity:.7}.u-primary-light[data-v-e601adde]{color:#ecf5ff}.u-warning-light[data-v-e601adde]{color:#fdf6ec}.u-success-light[data-v-e601adde]{color:#f5fff0}.u-error-light[data-v-e601adde]{color:#fef0f0}.u-info-light[data-v-e601adde]{color:#f4f4f5}.u-primary-light-bg[data-v-e601adde]{background-color:#ecf5ff}.u-warning-light-bg[data-v-e601adde]{background-color:#fdf6ec}.u-success-light-bg[data-v-e601adde]{background-color:#f5fff0}.u-error-light-bg[data-v-e601adde]{background-color:#fef0f0}.u-info-light-bg[data-v-e601adde]{background-color:#f4f4f5}.u-primary-dark[data-v-e601adde]{color:#398ade}.u-warning-dark[data-v-e601adde]{color:#f1a532}.u-success-dark[data-v-e601adde]{color:#53c21d}.u-error-dark[data-v-e601adde]{color:#e45656}.u-info-dark[data-v-e601adde]{color:#767a82}.u-primary-dark-bg[data-v-e601adde]{background-color:#398ade}.u-warning-dark-bg[data-v-e601adde]{background-color:#f1a532}.u-success-dark-bg[data-v-e601adde]{background-color:#53c21d}.u-error-dark-bg[data-v-e601adde]{background-color:#e45656}.u-info-dark-bg[data-v-e601adde]{background-color:#767a82}.u-primary-disabled[data-v-e601adde]{color:#9acafc}.u-warning-disabled[data-v-e601adde]{color:#f9d39b}.u-success-disabled[data-v-e601adde]{color:#a9e08f}.u-error-disabled[data-v-e601adde]{color:#f7b2b2}.u-info-disabled[data-v-e601adde]{color:#c4c6c9}.u-primary[data-v-e601adde]{color:#3c9cff}.u-warning[data-v-e601adde]{color:#f9ae3d}.u-success[data-v-e601adde]{color:#5ac725}.u-error[data-v-e601adde]{color:#f56c6c}.u-info[data-v-e601adde]{color:#909399}.u-primary-bg[data-v-e601adde]{background-color:#3c9cff}.u-warning-bg[data-v-e601adde]{background-color:#f9ae3d}.u-success-bg[data-v-e601adde]{background-color:#5ac725}.u-error-bg[data-v-e601adde]{background-color:#f56c6c}.u-info-bg[data-v-e601adde]{background-color:#909399}.u-main-color[data-v-e601adde]{color:#303133}.u-content-color[data-v-e601adde]{color:#606266}.u-tips-color[data-v-e601adde]{color:#909193}.u-light-color[data-v-e601adde]{color:#c0c4cc}.u-safe-area-inset-top[data-v-e601adde]{padding-top:0;padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.u-safe-area-inset-right[data-v-e601adde]{padding-right:0;padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right)}.u-safe-area-inset-bottom[data-v-e601adde]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.u-safe-area-inset-left[data-v-e601adde]{padding-left:0;padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left)}uni-toast[data-v-e601adde]{z-index:10090}uni-toast .uni-toast[data-v-e601adde]{z-index:10090}[data-v-e601adde]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-e601adde]{height:100%;width:100%;min-height:%?800?%}.app[data-v-e601adde]{height:100%;padding-bottom:%?120?%;background:linear-gradient(180deg,#333,#f2f2f2);position:fixed;width:100%;z-index:1}.nav-right-btn[data-v-e601adde]{color:#fff;font-size:%?24?%;padding:%?10?% %?20?%}.main[data-v-e601adde]{width:100%;height:100%;overflow:hidden}.main .main-box[data-v-e601adde]{margin:%?0?% %?32?% 0;background-color:#fff;border-top-left-radius:%?30?%;border-top-right-radius:%?30?%;padding:%?20?% 0;position:fixed;bottom:%?0?%;width:calc(100% - %?60?%);height:calc(100% - %?246?%);color:#333}.main .main-box .scroll-box[data-v-e601adde]{height:100%}.main .main-box .list-box[data-v-e601adde]{height:100%;padding:%?0?% %?32?%;padding-bottom:%?60?%}.main .main-box .list-box .list-item[data-v-e601adde]{margin-bottom:%?20?%;color:#333;font-size:%?28?%;border-bottom:%?1?% solid #e4e4e4;padding-bottom:%?20?%}.main .main-box .list-box .list-item .title[data-v-e601adde]{padding:%?10?% 0}.main .main-box .list-box .list-item .title .name[data-v-e601adde]{font-size:%?30?%;font-weight:700;color:#000}.main .main-box .list-box .list-item .title .copy[data-v-e601adde]{color:#666;font-size:%?24?%;float:right}.main .main-box .list-box .list-item .desc .time[data-v-e601adde]{color:#999;font-size:%?28?%}.main .main-box .list-box .list-item .desc .money[data-v-e601adde]{color:#14eccc;font-size:%?30?%;font-weight:700;float:right}.main .main-box .list-box .list-item .desc .dec[data-v-e601adde]{color:#ee2e56}.modal-box[data-v-e601adde]{width:auto}.modal-box[data-v-e601adde] .u-modal__title{padding:%?30?% 0}.modal-box[data-v-e601adde] .u-popup__content{width:auto;height:auto}.modal-box[data-v-e601adde] .u-popup__content .modal-main{width:100%}.modal-box .modal-main-box .row-item .label[data-v-e601adde]{padding:%?10?% 0;font-size:%?28?%}.modal-box .modal-main-box .row-item .label .copy[data-v-e601adde]{float:right;color:#238ad2}.modal-box .modal-main-box .row-item .text[data-v-e601adde]{font-size:%?24?%;padding:%?20?% %?20?%;background-color:#f2f2f2;word-break:break-all;border-radius:%?10?%}.modal-box .modal-main-box .row-item .text .image[data-v-e601adde]{width:%?48?%;height:%?48?%}.modal-box .modal-main-box .row-item .hash[data-v-e601adde]{color:#238ad2;text-decoration:underline}.modal-box .modal-main-box .row-item .payment[data-v-e601adde]{display:flex;flex-direction:row;align-items:center}.modal-box .modal-main-box .row-item .payment .text-info[data-v-e601adde]{flex:1;display:flex}.modal-box .modal-main-box .row-item .payment .text-info *[data-v-e601adde]{margin-left:%?10?%}.modal-box .modal-main-box .row-item .payment .icon[data-v-e601adde]{width:%?32?%;height:%?32?%;margin-right:%?10?%}',""]),a.exports=t},b9d8:function(a,t,e){"use strict";e("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("64aa");var o={props:{icon:{type:String,default:uni.$u.props.empty.icon},text:{type:String,default:uni.$u.props.empty.text},textColor:{type:String,default:uni.$u.props.empty.textColor},textSize:{type:[String,Number],default:uni.$u.props.empty.textSize},iconColor:{type:String,default:uni.$u.props.empty.iconColor},iconSize:{type:[String,Number],default:uni.$u.props.empty.iconSize},mode:{type:String,default:uni.$u.props.empty.mode},width:{type:[String,Number],default:uni.$u.props.empty.width},height:{type:[String,Number],default:uni.$u.props.empty.height},show:{type:Boolean,default:uni.$u.props.empty.show},marginTop:{type:[String,Number],default:uni.$u.props.empty.marginTop}}};t.default=o},d382:function(a,t,e){"use strict";e.r(t);var o=e("4643"),i=e("dfbe");for(var n in i)["default"].indexOf(n)<0&&function(a){e.d(t,a,(function(){return i[a]}))}(n);e("4c3b");var d=e("828b"),r=Object(d["a"])(i["default"],o["b"],o["c"],!1,null,"e601adde",null,!1,o["a"],void 0);t["default"]=r.exports},decd:function(a,t,e){"use strict";(function(a){e("6a54");var o=e("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("c223");var i=o(e("2634")),n=o(e("2fdc")),d={data:function(){return{loading:!1,showDetail:!1,boxHeight:1200,userInfo:{},showInfo:{},params:{page:1,coin_type:1,user_type:1,user_id:0,status:0,type:2,pageSize:15,total:0},dataList:[]}},onLoad:function(a){this.params.coin_type="undefined"!=typeof a.ct&&a.ct>0?a.ct:1,this.params.user_type="undefined"!=typeof a.ut&&a.ut>0?a.ut:0,this.params.user_id="undefined"!=typeof a.mid&&a.mid>0?a.mid:0,this.getDataList();var t=uni.getWindowInfo();this.boxHeight=t.windowHeight},onPullDownRefresh:function(){this.loadData(),uni.stopPullDownRefresh()},onReachBottom:function(){this.params.loaded||(this.params.page++,this.getDataList())},methods:{goBack:function(){uni.navigateBack()},loadData:function(){this.params.laoded=!1,this.params.page=1,this.dataList=[],this.getDataList()},getName:function(a){return a.payment.bank_name+" "+a.payment.realname},copy:function(t){var e=this;if(a.log("APP复制"),""==t)return!1;uni.setClipboardData({data:t+"",showToast:!1,success:function(){uni.showToast({title:e.$t("复制成功"),style:"z-index: 10078",icon:"none"})},fail:function(t){a.log(t),uni.showToast({title:e.$t("复制失败"),style:"z-index: 10078",icon:"none"})}})},onCopy:function(t){a.log(t),uni.showToast({title:this.$t("复制成功"),style:"z-index: 10078",icon:"none"})},copyError:function(t){a.log(t),uni.showToast({title:this.$t("复制失败"),style:"z-index: 10078",icon:"none"})},showDetailModal:function(a){this.showInfo=a,this.showDetail=!0},loadMore:function(){this.params.loaded||(this.params.page++,this.getDataList())},getDataList:function(){var a=this;return(0,n.default)((0,i.default)().mark((function t(){var e;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.loading=!0,t.next=3,a.$request.api("/account/balance",a.params);case 3:e=t.sent,a.loading=!1,a.params.total="undefined"!=typeof e.data.total?e.data.total:0,1==e.success&&e.data.list.length>0?(1==a.params.page?a.dataList=e.data.list:a.dataList=a.dataList.concat(e.data.list),a.$forceUpdate()):1!=a.params.page&&(a.params.loaded=!0,uni.showToast({title:a.$t("暂时没有更多了"),icon:"none"}));case 7:case"end":return t.stop()}}),t)})))()}}};t.default=d}).call(this,e("ba7c")["default"])},dfbe:function(a,t,e){"use strict";e.r(t);var o=e("decd"),i=e.n(o);for(var n in o)["default"].indexOf(n)<0&&function(a){e.d(t,a,(function(){return o[a]}))}(n);t["default"]=i.a},e8a0f:function(a,t){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAAXNSR0IArs4c6QAACtZJREFUeF7lXGmQVNUZPecOjGzT3aMOioJLXFCSGNxKI6hRExc0Ahq7Z0BQA6WJKQWNWpWYKGBMxZKEpRCDqETQ6QXBJXFJTCIx7gbUlIloRUlFguzTr2dEmJm+J/W6mQGme6bf6+kmQ/J+Tn/f+c497767fPe7Q+ytZ8mmQajodRqMOYHkcEBfBBAE0BdA/500PgPwOQAH0N8Evg3yXWD7mwgPXL83qLJsQRas64fq/mOM5YWCRpD4QndiSfiIwCsWeA4m9RTCQ1zhSv6UXpB4aoSRrhM1luCAkjMGICBF4AlLzEc4+GYpY5ROkGjqDBpNI/CNUhLsCkuuNsLzAu5EbfCtUsTtviDRLUPIirkkx5SCUNEYQtyaiqkID+jWWFO8IAlVQKkbCcwgUJZPw684ApISbkdtcL5f3zb74gR5rOFw9qpYTOisYgOX00/AC2rudRUm9P/Ubxz/gsSSV5BcyOyU2WMfCZtlcDXCwWf8kPQnSNxxP5HZBPz5+WFUQlsBaYHXIhJ42Cus54aZaPKnMPyBV+CeYufORAJvRSTwcy+cPAli4qm7Af3QC2BPtbHCVNQG5xTiV1iQmDPFELMLAfX033f2lGsQCTzSFdeuBYkmI8Yw1tMb65WfgFZJF6M29LvOfDoX5HHnGKa1qlzLb6+NKLWdgE2yvYajrv+6fNj5BVm0pg/7Vb9GuLvS8jzu2yKxEMKGDhEOBvCd8kTNogp6Se8Hz8E02o5x8gsSc35iiNvLTioSOjsnRqJpuFH67XLGdrE7G2RzBYkljyL5dwKV5SQl8EVFAufmxIg2nGiMWVXO2NlegqR2mKGYWLVx91g5gjCR+jWlS8pPSC8qEsoVZC/1kJ0fz8M2EprUuSCJ1Egj/bncYmTf0H+3h+zsJWmlW76EcQeubmvzHj2EseTvSZ73/yJIdoRVva0Njc8VxM10QS8XK4alGYhw1aZi/bvtF2u42dB4Wp7vHiuz3xGHoTbwofv3XT0k7iwxwJXFEttXBcnMONBMREK37hLkoU1VHFD5KXdlv/3rIsQAbvfqaGVXoy50T+606xxNcKFXnHY7a4eQPMq3X+arwTpFAoNBKttDog1XG2MWFQNWrI/QE2aZXewtK85HeMALGUEYSy4jeVmxjSvGryfMMrvztsBcRIJTCImMO1tIVhfTsGJ9epogAt9TJPBlIpY8yZAri21YRz8B74BMFsKT1TuoDd6UO4ZsP5po9jaGWBskeWKhWF5+z6QHaA4iYs71hrjPi5MXG2vtOairXuHFtts28dS3DfRQt3F2AlikL6WJOXNB3FAy0L0oiImnfgXoqpJxl24jE85vKZxfKtBS41hgFiLBm/PhMu6sIzCodDH5IBlzPuruQXTpCOUiWeBiRILP5vxShl2xyBXuDLORQE05G1UstoDPVBU4AKO4IwejDDkbd6ZxBXFP0quKJV1OP0FPKBLKuz5i3PmAwLGljC/w364grQQqSgXsbpYAbgC0FuQ2WFsNciCAAwn09hPHSmHUhpbm+NSnvmoq9KofLC+2kj53x5Bm0h/RPGuPN93lHaxdARN8D2E25xCYJoPjmoYB6dMNebLEM0id0BlRCQ0KBAbl+1xMzHkURPuW3UtjvdhI2E7Gk5sJHuDFIVcIrRR0KyLVLxbjj8WNA1FpzzXUuQIuIji4DWf3Hege2InGGsp+QmC/omJ24SRhk9tD1pA4wje4MM+uDkzZI3Pt9oJjnCCgAHq37EBDzRZcxxbP2DHndFCXUxwtU/l1hPv+K8c37swwwI89Y/owlPSR20Pe9n3cQMyx4eDUTKz6hrNhOIrkWQBPIrRHclrARgj/ILDKSi+jZftvMPFgt7jO/7OoIcR+Zg2BkH/nwh4C3iLjqaWEvlXYPGshaYVWB8/Dcc6RBJeS8LWXENBEcLlN20cwLvRHr3EzdglnuhHu8OXjzzhKxFN3G48H2ZkNUCuGonnrJ+y3v3tUcaS/eHtaS/pYxANoapmPSTWNBbEW/KU3QsdeSGISpEtKOTu6sa1wJxF1JhiDxQXJZDNLr6o2OAKx5GTDIrJanQQRsEXAbLS0zsWVB6S8cEF900GoaL2U4EQCIz35FDCyMmEiljrWUB94ApTutbWh20w89QigiZ58PBoJ2KpWnYrxoY89uuwyizUeD2oSIVecolfd1rYels2YxZNrCR5aiIgVbkBtcB7jqacIXVrI3uvvApqVNhdhXJW/MaVjgAXqjYAzmoaTCVzgNX5mbAQ+VCQ4NCOI1zduhe+5FX4m7rj5k+v9BOzM1l0MCbgMtcHncmyWbRuMlpbL0Rx4EBPpb2aKbjoEpnIsockeZ9Ff2kjwu9kkczwZNmC8YAPFe21t4DYknAuNkNuAggAdBtXM2JEejcj+r+S41qcOZIX+RGBYZowR5qJvYBZGs/Dg2xHMXeobTRExprMFnRVGuS8lK8gi9WE/Zz3BLisLBaxUJHgKpslwWOMKSmf61KDd3J3zZW0YddX/zMGINhxBY54nMHT33wRsltU9qAjehzD917o/lqxGBceTcMeaU9uw3bWSGDgEYabbD6pMLPWgOzAVaqC1HI26wNNY9tkgtrb+gcDxhXw6NGqrgDvwfuD+fPUZqE+NZIWWdzU4Ctwg2F9gR/A+359SG5lY0j3D+T7JCQIWtiWhdp3cRZOnGMOC9eIZNZubh2NCzadIbBxgbJ/ZYmZ073InK6BB0kKk8TOMDzXkFdEt+xRmet1sZnoMMAfZSwBb/byYdtvF6/ujT9/92vz3POyOO88QGFUIWMDramo+v30xlWg6GGq9huBIgCcSGiRgA6R1pFlphacQqHohb6LHDbZs22C2tizwEjsfN0GNEu6HqZjZ3fPlPetDos5pxuD1QoJkpinpDbW0jM30lGKfR7cE0LvXLQRuKkW9vIDGbI8JzESYTjG0cgtm4snlBMd6AcsW29vp6B96AN/kNi8+GZtEaiisrnWX4OUoEc8s8oQ5MJjn91PKLalKbD2MMqsJule/PD3utEhgqYWWgcFXcmaAZ7UfmppGQDqP0AUETvYE3E0jCSmR85DGLIwLbPYC11nR3R2GmO4FoKONBAtibabKIPv0AVBT6o2YH26ZZLXcisfme1FXk7ccsw0vvyAJVVKp1wic5CdwT7fNbBHEJTC970a475p8fDsv3M1WI64iEOjpDfXDz72vJ1YO9y+IGyXeeLmBfdxPwJ5ua90JIxJ4sjOehYv/486Nxp3K/gceazkZdYEuD8cLC5LdDe/710PAW7zcmfEkSKZzxJ27DPCjfa2jZK+FYDoiQU+zpndBXCVizlRDzNpXRMnMKhaTURdc4pWzP0Fc1GgyQkN339GzLyEC62UxBnXBN7yK4dr5FyQjSsMRpHmUxAg/wfaWbSYZrl5XdHYnpisexQniImYuMienEmZ6t+pbS6hSZkUKzkDyw1m47hTvJ4a7cShekDaQ6LYhZMt8EmW/QVFAu6i1vW4pplfsjtt9QdqF2XomaWaQ/FoJX3qXUJl/hkA+Ldi7EA6VpJKydIK0UU80nm2svXZnQrdfOcRxk08C6tHMBZgQ8Ham5JFI6QVpC/zQpir0rxxrgAuy/1CFh3vklNdMwCcSnoTscnwQeilvPrY7AXb6lk+QjuQS2w6F3XEaaIYT+AoA91/uVAHqC9DtSWkIDSDcol8H5FpJ70D8K5R+N292vgQCdIT4D0tRNh/HRB6TAAAAAElFTkSuQmCC"},f2a9:function(a,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return o}));var o={uIcon:e("f27b").default},i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.show?e("v-uni-view",{staticClass:"u-empty",style:[a.emptyStyle]},[a.isSrc?e("v-uni-image",{style:{width:a.$u.addUnit(a.width),height:a.$u.addUnit(a.height)},attrs:{src:a.icon,mode:"widthFix"}}):e("u-icon",{attrs:{name:"message"===a.mode?"chat":"empty-"+a.mode,size:a.iconSize,color:a.iconColor,"margin-top":"14"}}),e("v-uni-text",{staticClass:"u-empty__text",style:[a.textStyle]},[a._v(a._s(a.text?a.text:a.icons[a.mode]))]),a.$slots.default||a.$slots.$default?e("v-uni-view",{staticClass:"u-empty__wrap"},[a._t("default")],2):a._e()],1):a._e()},n=[]},f3f3:function(a,t,e){"use strict";e("6a54");var o=e("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("5ef2");var i=o(e("b9d8")),n={name:"u-empty",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空",comment:"暂无评论"}}},computed:{emptyStyle:function(){var a={};return a.marginTop=uni.$u.addUnit(this.marginTop),uni.$u.deepMerge(uni.$u.addStyle(this.customStyle),a)},textStyle:function(){var a={};return a.color=this.textColor,a.fontSize=uni.$u.addUnit(this.textSize),a},isSrc:function(){return this.icon.indexOf("/")>=0}}};t.default=n},f40f:function(a,t,e){"use strict";var o=e("f9fb"),i=e.n(o);i.a},f9fb:function(a,t,e){var o=e("8748");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[a.i,o,""]]),o.locals&&(a.exports=o.locals);var i=e("967d").default;i("74c4c8e4",o,!0,{sourceMap:!1,shadowMode:!1})}}]);