(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trade-order-cancel"],{"1e95":function(t,a,o){"use strict";o.r(a);var e=o("d397"),i=o("bf54");for(var d in i)["default"].indexOf(d)<0&&function(t){o.d(a,t,(function(){return i[t]}))}(d);o("5edd");var n=o("828b"),r=Object(n["a"])(i["default"],e["b"],e["c"],!1,null,"0dc27934",null,!1,e["a"],void 0);a["default"]=r.exports},"5edd":function(t,a,o){"use strict";var e=o("ed05"),i=o.n(e);i.a},"7ed8":function(t,a,o){"use strict";(function(t){o("6a54");var e=o("f5bd").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e(o("2634")),d=e(o("2fdc")),n={components:{},data:function(){return{loading:!1,info:{},params:{id:0,type:1},types:[{id:1,name:"我不想买了"},{id:2,name:"联系不到卖家"},{id:3,name:"我是新手不知道如何转账"},{id:4,name:"卖家没有留真实收款账号"},{id:5,name:"卖家收款账号被风控，无法完成交易"},{id:6,name:"订单交易金额错误"},{id:7,name:"与卖家协商取消"},{id:8,name:"卖家服务态度不好"},{id:9,name:"其他原因"}],boxHeight:800,lang:"en",isH5:!1,device:""}},onLoad:function(t){this.params.id="undefined"!=typeof t.id?t.id:"",this.getTradeInfo();var a=uni.getWindowInfo();this.boxHeight=a.windowHeight;this.lang=getSycCache("lang"),this.device=uni.getSystemInfoSync().osName,this.isH5=!0},onPullDownRefresh:function(){this.getTradeInfo(),uni.stopPullDownRefresh()},methods:{goBack:function(){uni.navigateBack()},getTradeInfo:function(){var t=this;return(0,d.default)((0,i.default)().mark((function a(){var o;return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.loading=!0,a.next=3,t.$request.api("/trade/info",{id:t.params.id});case 3:o=a.sent,t.loading=!1,1==o.success&&(t.info=o.data,t.$forceUpdate());case 6:case"end":return a.stop()}}),a)})))()},submit:function(){var t=this;return(0,d.default)((0,i.default)().mark((function a(){var o;return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:o=t,uni.showModal({title:t.$t("操作确认"),content:t.$t("确认取消您的交易订单吗？"),confirmColor:"#14ECCC",confirmText:t.$t("确认"),cancelText:t.$t("取消"),success:function(t){t.confirm&&o._submit()}});case 2:case"end":return a.stop()}}),a)})))()},_submit:function(){var t=this;return(0,d.default)((0,i.default)().mark((function a(){var o,e;return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t,t.loading=!0,a.next=4,t.$request.api("/trade/cancel",{id:t.info.id,type:t.params.type});case 4:o=a.sent,t.loading=!1,1==o.success?(uni.showToast({title:t.$t("取消成功"),style:"z-index:10078",icon:"none"}),setTimeout((function(){uni.navigateTo({url:"/pages/trade/index"})}),1200)):(e="undefined"!=typeof o.msg?o.msg:t.$t("确认失败"),uni.showToast({title:t.$t(e),style:"z-index:10078",icon:"none"}));case 7:case"end":return a.stop()}}),a)})))()},copy:function(a){var o=this;if(t.log("APP复制"),""==a)return!1;uni.setClipboardData({data:a+"",showToast:!1,success:function(){uni.showToast({title:o.$t("复制成功"),icon:"none"})},fail:function(a){t.log(a),uni.showToast({title:o.$t("复制失败"),icon:"none"})}})}}};a.default=n}).call(this,o("ba7c")["default"])},a5d1:function(t,a,o){var e=o("c86c");a=e(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */.u-line-1[data-v-0dc27934]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical!important}.u-line-2[data-v-0dc27934]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important}.u-line-3[data-v-0dc27934]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important}.u-line-4[data-v-0dc27934]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important}.u-line-5[data-v-0dc27934]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}.u-border[data-v-0dc27934]{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.u-border-top[data-v-0dc27934]{border-top-width:.5px!important;border-color:#dadbde!important;border-top-style:solid}.u-border-left[data-v-0dc27934]{border-left-width:.5px!important;border-color:#dadbde!important;border-left-style:solid}.u-border-right[data-v-0dc27934]{border-right-width:.5px!important;border-color:#dadbde!important;border-right-style:solid}.u-border-bottom[data-v-0dc27934]{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}.u-border-top-bottom[data-v-0dc27934]{border-top-width:.5px!important;border-bottom-width:.5px!important;border-color:#dadbde!important;border-top-style:solid;border-bottom-style:solid}.u-reset-button[data-v-0dc27934]{padding:0;background-color:initial;font-size:inherit;line-height:inherit;color:inherit}.u-reset-button[data-v-0dc27934]::after{border:none}.u-hover-class[data-v-0dc27934]{opacity:.7}.u-primary-light[data-v-0dc27934]{color:#ecf5ff}.u-warning-light[data-v-0dc27934]{color:#fdf6ec}.u-success-light[data-v-0dc27934]{color:#f5fff0}.u-error-light[data-v-0dc27934]{color:#fef0f0}.u-info-light[data-v-0dc27934]{color:#f4f4f5}.u-primary-light-bg[data-v-0dc27934]{background-color:#ecf5ff}.u-warning-light-bg[data-v-0dc27934]{background-color:#fdf6ec}.u-success-light-bg[data-v-0dc27934]{background-color:#f5fff0}.u-error-light-bg[data-v-0dc27934]{background-color:#fef0f0}.u-info-light-bg[data-v-0dc27934]{background-color:#f4f4f5}.u-primary-dark[data-v-0dc27934]{color:#398ade}.u-warning-dark[data-v-0dc27934]{color:#f1a532}.u-success-dark[data-v-0dc27934]{color:#53c21d}.u-error-dark[data-v-0dc27934]{color:#e45656}.u-info-dark[data-v-0dc27934]{color:#767a82}.u-primary-dark-bg[data-v-0dc27934]{background-color:#398ade}.u-warning-dark-bg[data-v-0dc27934]{background-color:#f1a532}.u-success-dark-bg[data-v-0dc27934]{background-color:#53c21d}.u-error-dark-bg[data-v-0dc27934]{background-color:#e45656}.u-info-dark-bg[data-v-0dc27934]{background-color:#767a82}.u-primary-disabled[data-v-0dc27934]{color:#9acafc}.u-warning-disabled[data-v-0dc27934]{color:#f9d39b}.u-success-disabled[data-v-0dc27934]{color:#a9e08f}.u-error-disabled[data-v-0dc27934]{color:#f7b2b2}.u-info-disabled[data-v-0dc27934]{color:#c4c6c9}.u-primary[data-v-0dc27934]{color:#3c9cff}.u-warning[data-v-0dc27934]{color:#f9ae3d}.u-success[data-v-0dc27934]{color:#5ac725}.u-error[data-v-0dc27934]{color:#f56c6c}.u-info[data-v-0dc27934]{color:#909399}.u-primary-bg[data-v-0dc27934]{background-color:#3c9cff}.u-warning-bg[data-v-0dc27934]{background-color:#f9ae3d}.u-success-bg[data-v-0dc27934]{background-color:#5ac725}.u-error-bg[data-v-0dc27934]{background-color:#f56c6c}.u-info-bg[data-v-0dc27934]{background-color:#909399}.u-main-color[data-v-0dc27934]{color:#303133}.u-content-color[data-v-0dc27934]{color:#606266}.u-tips-color[data-v-0dc27934]{color:#909193}.u-light-color[data-v-0dc27934]{color:#c0c4cc}.u-safe-area-inset-top[data-v-0dc27934]{padding-top:0;padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.u-safe-area-inset-right[data-v-0dc27934]{padding-right:0;padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right)}.u-safe-area-inset-bottom[data-v-0dc27934]{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.u-safe-area-inset-left[data-v-0dc27934]{padding-left:0;padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left)}uni-toast[data-v-0dc27934]{z-index:10090}uni-toast .uni-toast[data-v-0dc27934]{z-index:10090}[data-v-0dc27934]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-0dc27934]{height:100%;width:100%;min-height:%?800?%;background:#333}body.?%PAGE?%[data-v-0dc27934]{background:#333}.app[data-v-0dc27934]{background:#333;width:100%;z-index:1}.menus-cacnl[data-v-0dc27934]{font-size:%?30?%;color:#e4e4e4}.nav-right-btn[data-v-0dc27934]{color:#000;font-size:%?24?%;background-color:#14eccc;padding:%?10?% %?20?%;border-radius:%?10?%}.main[data-v-0dc27934]{margin-left:auto;margin-right:auto;height:100%;overflow-y:scroll;padding:0 %?30?%}.main .main-box .cancel-title .title[data-v-0dc27934]{color:#fff;padding:%?20?% 0;font-size:%?30?%}.main .main-box .cancel-title .tips[data-v-0dc27934]{font-size:%?24?%;color:#999}.main .main-box .type-box[data-v-0dc27934]{padding:%?30?% 0}.main .main-box .type-box .type-item[data-v-0dc27934]{display:flex;flex-direction:row;align-items:center;margin-bottom:%?30?%}.main .main-box .type-box .type-item .icon[data-v-0dc27934]{margin-right:%?20?%}.main .main-box .type-box .type-item .type-name[data-v-0dc27934]{color:#e4e4e4}.main .submit-box[data-v-0dc27934]{width:100%;position:fixed;bottom:%?30?%;z-index:99}.main .submit-box .btn[data-v-0dc27934]{margin:0 %?60?%;padding:%?20?% 0;border-radius:%?100?%;background-color:#14eccc;text-align:center;font-size:%?32?%}.modal-box[data-v-0dc27934]{width:auto}.modal-box[data-v-0dc27934] .u-modal__title{padding:%?30?% 0}.modal-box[data-v-0dc27934] .u-popup__content{width:auto;height:auto}.modal-box[data-v-0dc27934] .u-popup__content .modal-main{width:100%}.modal-box .modal-main-box .pay-content[data-v-0dc27934]{margin-bottom:%?30?%;display:flex}.modal-box .modal-main-box .pay-content .pay_content[data-v-0dc27934]{flex:0 0 60%}.modal-box .modal-main-box .pay-content .pay_title[data-v-0dc27934]{flex:0 0 30%}.modal-box .modal-main-box .pay-image[data-v-0dc27934]{display:flex;justify-content:center}.modal-box .modal-main-box .row-item .label[data-v-0dc27934]{padding:%?10?% 0;font-size:%?28?%}.modal-box .modal-main-box .row-item .text[data-v-0dc27934]{font-size:%?24?%;padding:%?20?% %?20?%;background-color:#f2f2f2;word-break:break-all;border-radius:%?10?%}.modal-box .modal-main-box .row-item .hash[data-v-0dc27934]{color:#238ad2;text-decoration:underline}',""]),t.exports=a},bf54:function(t,a,o){"use strict";o.r(a);var e=o("7ed8"),i=o.n(e);for(var d in e)["default"].indexOf(d)<0&&function(t){o.d(a,t,(function(){return e[t]}))}(d);a["default"]=i.a},d397:function(t,a,o){"use strict";o.d(a,"b",(function(){return i})),o.d(a,"c",(function(){return d})),o.d(a,"a",(function(){return e}));var e={uNavbar:o("1ffe").default,uIcon:o("f27b").default,uLoadingIcon:o("6375").default},i=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("v-uni-view",{staticClass:"app",style:"min-height:"+t.boxHeight+"px;"},[o("u-navbar",{attrs:{title:t.$t("取消订单"),height:"120rpx",titleStyle:{color:"#fff",fontSize:"36rpx"},bgColor:"transparent",autoBack:!1,placeholder:!0,safeAreaInsetTop:!0}},[o("v-uni-view",{attrs:{slot:"left"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goBack()}},slot:"left"},[o("u-icon",{staticClass:"icon",attrs:{name:"arrow-left",size:"46",color:"#fff"}})],1)],1),o("v-uni-view",{staticClass:"main"},[o("v-uni-view",{staticClass:"main-box"},[o("v-uni-view",{staticClass:"cancel-title"},[o("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t("请选择您的取消原因")))]),o("v-uni-view",{staticClass:"tips"},[t._v(t._s(t.$t("取消提示")))])],1),o("v-uni-view",{staticClass:"type-box"},t._l(t.types,(function(a,e){return o("v-uni-view",{key:e,staticClass:"type-item",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.params.type=a.id}}},[t.params.type==a.id?o("u-icon",{staticClass:"icon",attrs:{name:"checkmark-circle-fill",size:"36",color:"#14ECCC"}}):o("u-icon",{staticClass:"icon",attrs:{name:"checkmark-circle",size:"36",color:"#666"}}),o("v-uni-text",{staticClass:"type-name"},[t._v(t._s(t.$t(a.name)))])],1)})),1)],1),o("v-uni-view",{staticClass:"submit-box"},[o("v-uni-view",{staticClass:"btn submit"},[t._v(t._s(t.$t("提交")))])],1)],1),o("u-loading-icon",{staticClass:"loading",attrs:{show:t.loading,size:"48",color:"#14ECCC","custom-style":"position:absolute;top:40%;left:0;right:0;margin:0 auto;z-index: 10099;"}})],1)},d=[]},ed05:function(t,a,o){var e=o("a5d1");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=o("967d").default;i("2de7de36",e,!0,{sourceMap:!1,shadowMode:!1})}}]);