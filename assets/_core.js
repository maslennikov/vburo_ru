!(function(a){a.svg4everybody=(function(){
/* svg4everybody v2.0.3 | github.com/jonathantneal/svg4everybody */
function d(e,g){if(g){var f=document.createDocumentFragment(),h=g.getAttribute("viewBox");
e.setAttribute("viewBox",h);
for(var i=g.cloneNode(!0);
i.childNodes.length;
){f.appendChild(i.firstChild)
}e.appendChild(f)
}}function c(e){e.onreadystatechange=function(){if(4===e.readyState){var f=e._cachedDocument;
f||(f=e._cachedDocument=document.implementation.createHTMLDocument(""),f.body.innerHTML=e.responseText,e._cachedTarget={}),e._embeds.splice(0).map(function(g){var h=e._cachedTarget[g.id];
h||(h=e._cachedTarget[g.id]=f.getElementById(g.id)),d(g.svg,h)
})
}},e.onreadystatechange()
}function b(h){function g(){for(var r=0;
r<i.length;
){var o=i[r],p=o.parentNode;
if(p&&/svg/i.test(p.nodeName)){var u=o.getAttribute("xlink:href");
if(n&&(!f.validate||f.validate(u,p,o))){p.removeChild(o);
var s=u.split("#"),q=s.shift(),v=s.join("#");
if(q.length){var t=e[q];
t||(t=e[q]=new XMLHttpRequest(),t.open("GET",q),t.send(),t._embeds=[]),t._embeds.push({svg:p,id:v}),c(t)
}else{d(p,document.getElementById(v))
}}}else{++r
}}m(g,67)
}var n,f=Object(h),j=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,l=/\bAppleWebKit\/(\d+)\b/,k=/\bEdge\/(\d+)\.(\d+)\b/;
n="polyfill" in f?f.polyfill:j.test(navigator.userAgent)||k.test(navigator.userAgent)||(navigator.userAgent.match(l)||[])[1]<537;
var e={},m=a.requestAnimationFrame||setTimeout,i=document.getElementsByTagName("use");
n&&g()
}return b
})()
})(window);
var is_dev=true;
log=function(a){if(is_dev&&window.console){if(typeof(a)!=="string"&&typeof(a)!=="number"&&window.console.dir){window.console.dir(a)
}else{if(window.console.log){window.console.log(a)
}}}};
spaced_cli={};
spaced_cli.is_admin=0;
spaced_cli.run={};
spaced_cli.run.init=function(){this.$update_style=$('<style id="core_style"></style>');
$("head").append(this.$update_style);
this.is_touch="ontouchstart" in window;
this.is_mobile=function(){return/(iPhone|iPod|iPad|BlackBerry|Android)/.test(navigator.userAgent)
};
this.is_desktop=function(){return !/(iPhone|iPod|iPad|BlackBerry|Android)/.test(navigator.userAgent)
};
spaced_cli.block.init();
spaced_cli.modal.init();
spaced_cli.pay.init();
this.resize();
setTimeout(this.resize,500);
$(window).on("resize.core",this.resize);
$("body script:not([src])").each(function(){var a=$(this).html();
if(a.indexOf("lptracker.ru")!==-1){$("body .container-list").find(".phone").addClass("lptracker_phone")
}});
svg4everybody()
};
spaced_cli.run.resize=function(){spaced_cli.image.resize()
};
spaced_cli.message=function(a){$.get("/mod/log",{msg:a})
};
$(document).ready(function(a){spaced_cli.run.init();
a("body").addClass("ready")
});
spaced_cli.require=function(a,c){if(!a){return
}if(!c){c=function(){}
}if(typeof a!="object"){a=a.split()
}var b=0;
a.forEach(function(d){if(/.*\.css.*/.test(d)){if(!spaced_cli.loaded.css[d]){$("body").append('<link href="'+d+'" rel="stylesheet" type="text/css" media="all">');
spaced_cli.loaded.css[d]=true
}b+=1;
if(b==a.length){c()
}}else{if(!spaced_cli.loaded.js[d]){$.ajax({url:d,dataType:"script",cache:true,success:function(){spaced_cli.loaded.js[d]=true;
b+=1;
if(b==a.length){c()
}}})
}else{b+=1;
if(b==a.length){c()
}}}})
};
spaced_cli.loaded={css:{},js:{}};
spaced_cli.image={loaded:{},debounce:0,resize:function(){var a=this;
clearTimeout(a.debounce);
a.debounce=setTimeout(function(){a.run()
},200)
},run:function(b){var a=this;
var c;
var d=false;
if(b){c=b.find("[data-img-id][data-img-name]");
d=true
}else{c=$("[data-img-id][data-img-name]")
}c.each(function(f,e){a.update($(e),d)
})
},update:function(c,e){var b=this;
var a=this.get_meta(c);
var d=this.get_url(a);
if(!a.id||!a.name||!a.width){return false
}if(!e&&(a.initial_width>=a.width||b.loaded[a.id+"_"+a.name]>=a.width)){return false
}else{b.loaded[a.id+"_"+a.name]=a.width
}if(c.css("background-image")!=d){c.css("background-image",d)
}},get_meta:function(a){return{id:a.attr("data-img-id"),name:a.attr("data-img-name"),initial_width:a.attr("data-img-size"),width:this.get_width(a.width())}
},get_url:function(a){return'url("/img/'+a.id+"_"+a.width+"/"+a.name+'")'
},get_width:function(b){if(window.devicePixelRatio&&window.devicePixelRatio>1){b=b*window.devicePixelRatio
}var a;
if(b<=100){a=100
}else{if(b<=150){a=150
}else{if(b<=250){a=250
}else{if(b<=400){a=400
}else{if(b<=600){a=600
}else{if(b<=900){a=900
}else{if(b<=1200){a=1200
}else{if(b<=1920){a=1920
}else{if(b<=2500){a=2500
}else{a=5000
}}}}}}}}}return a
}};
spaced_cli.video_bg={init:function(a,b){if(b.type!="youtube"||typeof(b.id)!=="string"||b.id.length<1){return
}if(spaced_cli.run.is_mobile()){return
}if(a.data("video_bg_played")){if(b.id==a.data("video_bg_played")){return
}else{this.destroy(a)
}}a.data("video_bg_played",b.id);
spaced_cli.require(["/_s/lib/jquery/youtubebackground/jquery.youtubebackground.js"],$.proxy(function(){a.YTPlayer({videoId:b.id})
},this))
},destroy:function(a){if(a.data("ytPlayer")){a.data("ytPlayer").destroy()
}a.removeData("video_bg_played")
}};
spaced_cli.form={list:{},create:function(a){if(spaced_cli.is_admin){return
}this.list[a.id]=new spaced_cli.form.Form(a);
return this.list[a.id]
}};
spaced_cli.form.Form=function(a){this.o=a;
this.create()
};
spaced_cli.form.Form.prototype={o:{},create:function(){this.$data=this.o.block.find(this.o.form);
this.bind()
},bind:function(){this.$form=this.$data.find("form").eq(0);
if(this.$form.length<1){return
}var a=$('<input type="hidden" name="jsform" value="'+parseInt((100*373*12+712),10)+'">');
this.$form.prepend(a).prepend('<input type="hidden" name="p_id" value="'+spaced_cli.p_id+'">');
this.$form.find(".form_field_submit").off("click").on("click",$.proxy(function(){this.$form.submit()
},this));
this.$form.off("submit").on("submit",$.proxy(function(b){if(!this.validation()){return false
}if(typeof(FormData)!=="undefined"){this.send_formdata()
}else{if(this.$form.find('input[type="file"]').length<1){this.send_ajax()
}else{return true
}}return false
},this))
},send_formdata:function(){var b=new FormData(this.$form.get(0));
b.append("is_ajax","true");
this.$form.get(0).reset();
if(typeof flexbeAPI!=="undefined"&&typeof flexbeAPI.customLeadData!=="undefined"){b.append("customLeadData",JSON.stringify(flexbeAPI.customLeadData))
}this.$form.parent().parent().addClass("submitting");
var a=$.ajax({url:this.$form.attr("action"),type:"POST",dataType:"json",processData:false,contentType:false,data:b,xhr:$.proxy(function(){var c=$.ajaxSettings.xhr();
if(c.upload){}return c
},this)});
a.done($.proxy(function(c){setTimeout($.proxy(function(){this.$form.parent().parent().addClass("submit-ok step-1");
setTimeout($.proxy(function(){this.$form.parent().parent().addClass("submit-ok step-2");
setTimeout($.proxy(function(){this.$form.parent().parent().addClass("submit-ok step-3");
setTimeout($.proxy(function(){this.$form.parent().parent().removeClass("submitting submit-ok step-1 step-2 step-3");
this.$form.get(0).reset();
c.send_formdata=true;
if(typeof c.pay!=="undefined"){this.pay=c.pay
}this.show_done()
},this),1000)
},this),300)
},this),400)
},this),500)
},this));
a.fail($.proxy(function(c){this.$form.parent().parent().removeClass("submitting")
},this))
},send_ajax:function(){var b=this.$form.serialize();
this.$form.get(0).reset();
var a=$.ajax({url:this.$form.attr("action"),type:"POST",dataType:"json",data:b+"&is_ajax=true"});
a.done($.proxy(function(c){this.$form.get(0).reset();
c.send_ajax=true;
if(typeof c.pay!=="undefined"){this.pay=c.pay
}this.show_done()
},this));
a.fail($.proxy(function(c){},this))
},validation:function(){var a=true;
this.$form.find("div[data-type]").each(function(d,i){var b=$(i);
var g=b.attr("data-type");
var c=(b.attr("data-is-required")=="true");
var h,j;
b.removeClass("is_error");
h=b.find("input,textarea,select").not('[type="hidden"]');
if($.inArray(g,["text","textarea","email","phone","name"])!=-1){j=$.trim(h.val())
}else{if(g=="file"){j=h.get(0).files
}}try{if(c&&typeof(j)!=="undefined"&&j.length<1){throw spaced_cli.lang.get("form.required")
}if(g=="email"&&h.attr("data-check")=="email"&&j.length>0){var k=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Zа-яёА-ЯЁ\-0-9]+\.)+[a-zA-Zа-яёА-ЯЁ]{2,}))$/;
if(!k.test(j)){b.addClass("is_error");
b.find(".error").text(spaced_cli.lang.get("form.email"));
a=false
}}if(g=="phone"&&h.attr("data-check")=="phone"&&j.length>0){if(/[^0-9+\(\)\-\s]/.test(j)){throw spaced_cli.lang.get("form.digits")
}else{var e=j.replace(/[^0-9]/g,"");
if(e.length<5){throw spaced_cli.lang.get("form.minlength")
}}}}catch(f){b.addClass("is_error");
b.find(".error").text(f);
a=false
}});
return a
},show_done:function(){
try{var c=this.$form.find('input[name="goal"]').val();
if(typeof c!=="undefined"&&c!==""){
}}catch(e){}try{var b=this.$form.find('textarea[name="goal_html"]').val();
if(typeof b!=="undefined"&&b.trim()!==""){var f=document.write;
document.write=function(g){$("body:eq(0)").append(g)
};
$("body:eq(0)").append('<div style="display:none">'+b+"</div>");
setTimeout(function(){document.write=f
},10000)
}}catch(e){}if(this.$form.find('input[name="action"]').val()=="pay"&&typeof this.pay!=="undefined"&&this.pay!==null){if(this.pay.pay_link.length>0){var d=window.location.origin+window.location.pathname+"?pay_id="+this.pay.pay_id+"&h="+this.pay.pay_hash;
try{history.pushState(null,null,d);
setTimeout(function(){spaced_cli.pay.init()
},200)
}catch(e){setTimeout(function(){document.location=d
},500)
}spaced_cli.modal.close();
return
}}if(this.$form.find('input[name="action"]').val()=="redirect"){var a=this.$form.find('input[name="action_redirect"]').val();
if(a.length>0){setTimeout(function(){document.location=a
},500)
}return
}spaced_cli.modal.open(this.o.form_done)
},set_name:function(a){this.o.name=a
},send_log:function(a,b){return false
}};
spaced_cli.pay={options:{},pay_id:false,h:false,paymodal:false,types:[],init:function(){var a=this.uriParams();
if(typeof a.pay_id!=="undefined"){this.pay_id=a.pay_id;
this.h=a.h
}if(typeof a.pay_status!=="undefined"){try{history.pushState(null,null,window.location.pathname)
}catch(b){}if(a.pay_status=="success"){this.showSuccessAlert()
}if(a.pay_status=="fail"){this.showFailAlert()
}return false
}this.getBill(this.pay_id,this.h)
},getBill:function(a,b){if(typeof a==="undefined"||a===false){return
}$.ajax({url:"/mod/pay/ajax/?act=payData",type:"GET",dataType:"json",data:{pay_id:a,hash:b}}).done($.proxy(function(c){if(c.status===0){return false
}this.types=c.pay.support_types;
if(c.pay.pay_status==2){this.showAllreadyPayed(c.pay)
}else{if(this.cashonly()){this.showCashInstruction(c.pay)
}else{this.showBillForm(c)
}}},this))
},showBillForm:function(c){var e='<div class="overview"><div class="summ">Сумма к оплате <span>'+c.pay.pay_sum+' <i class="r" title="руб."><span>руб.</span></i></span></div>';
if(c.pay.pay_desc.length>1){e=e+'<div class="comment"> '+c.pay.pay_desc+" .</div>"
}e=e+'</div><div class="pay_modal_data"><div class="fields"><div class="select_pay_method" style="display:none"><div class="title">Выберите способ оплаты</div><div class="list clear"></div><div class="show-all"><a href="#show_all">Показать все способы оплаты</a></div></div></div><div class="submit"> <a href="#" class="submit disabled">Перейти к оплате</a> </div>';
$paymodal=$(e);
var b=0;
for(var a in this.types){if(typeof this.types[a].name!="undefined"){var d='<label data-type="'+a+'" title="'+this.types[a].name+'"><i></i><div class="value"><input type="radio" name="form[pay_method]" value="'+a+'"></div><span>'+this.types[a].name+"</span></label>";
$paymodal.find(".list").append(d);
b++
}}if(this.types.length===0){$paymodal.find(".select_pay_method").remove();
$paymodal.find(".submit").remove()
}if(b<=8){$paymodal.find(".show-all a").hide()
}if(b<=4){$paymodal.find(".select_pay_method .list").css({height:"120px"})
}$paymodal.find(".select_pay_method").on("mousewheel DOMMouseScroll",function(f){var h=f.originalEvent,g=h.wheelDelta||-h.detail;
this.scrollTop+=(g<0?1:-1)*30;
f.preventDefault()
});
$paymodal.find("a.submit").on("click",$.proxy(function(h){var g=$paymodal.find(".list input:checked").val();
if(typeof g==="undefined"){alert("Выберите способ оплаты");
return false
}if(g=="cash"){this.showCashInstruction();
return false
}var f="/mod/pay/?pay_type="+g+"&pay_id="+this.pay_id+"&h="+this.h;
$(h.currentTarget).attr("href",f);
$paymodal.find("a.submit").hide();
$paymodal.find(".select_pay_method").hide().after('<div class="loading">Загрузка...</div>')
},this));
$paymodal.find(".show-all a").on("click",$.proxy(function(f){$paymodal.find(".select_pay_method .list").addClass("show-all");
$(f.currentTarget).hide();
return false
},this));
this.modal.show("bill","Оплата счёта № "+c.pay.pay_id,$paymodal);
setTimeout(function(){$(".select_pay_method").show()
},100)
},cashonly:function(){var a=function(d){var c=0,b;
for(b in d){if(d.hasOwnProperty(b)){c++
}}return c
};
if(a(this.types)==1&&typeof this.types.cash!=="undefined"){return true
}return false
},showCashInstruction:function(){var a='<div class="thanks"><i></i>Спасибо за заказ!</div><div class="cash-instruction">'+this.types.cash.instruction+"</div>";
this.modal.hide();
this.modal.show("cash","",$(a));
$.ajax({url:"/mod/pay/ajax/?act=selectCash",type:"GET",dataType:"json",data:{pay_id:this.pay_id,hash:this.h}}).done($.proxy(function(b){},this))
},showAllreadyPayed:function(c){var b="";
if(c.pay_time_done!="0"){b=c.pay_time_done
}var a='<div class="status"><i></i>Счёт был оплачен<span class="date">'+b+'</span></div><div class="summary"><label>Сумма к оплате:</label><span class="summ">'+c.pay_sum+' <i class="rur"><span>руб.</span></i></span><label>Способ оплаты:</label><span>'+c.pay_method_name+"</span>";
if(c.pay_desc.length>1){a=a+"<label>Комментарий:</label><span>"+c.pay_desc+"</span>"
}a=a+"</div>";
this.modal.show("payed","Оплата счёта № "+c.pay_id,$(a))
},showSuccessAlert:function(){
var a='<div class="alert-pay-success"><i></i><h4>Оплата прошла успешно</h4></div>';
this.modal.show("success","",a)
},showFailAlert:function(){var a='<div class="alert-pay-fail"><i></i><h4>Ошибка при оплате</h4><p>Попробуйте позже или выберите другой способ оплаты</p>';
if(this.pay_id){var b="/?pay_id="+this.pay_id+"&h="+this.h;
a=a+'<a href="'+b+'" class="submit">Попробовать ещё раз</a>'
}a=a+"</div>";
this.modal.show("fail","",a)
},modal:{show:function(c,b,a){$modal=$('<div class="pay_modal" data-type="'+c+'"><div class="pay_modal_title"><div class="title"><i></i><span>'+b+'</span></div><a href="#cancel" class="cancel">&times;</a></div><div class="modal-content"></div></div></div>');
$modal.find(".modal-content").append(a);
$modal.find("a.cancel").on("click",$.proxy(function(d){this.hide();
return false
},this));
$("body").addClass("pay_overlay_blur").append('<div class="pay_overlay"></div>').append($modal);
$("html, body").animate({scrollTop:0});
setTimeout(function(){var d=($(window).height()-$(".pay_modal").height())/2;
if(d<10){d=50
}$(".pay_modal").css({top:d+"px"})
},200)
},hide:function(){$(".pay_modal").remove();
$(".pay_overlay").remove();
$("body").removeClass("pay_overlay_blur")
}},uriParams:function(){try{return JSON.parse('{"'+decodeURI(location.search.substring(1)).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')
}catch(a){return false
}}};
spaced_cli.modal={data:{},opened:{},css_loaded:{},modal_default:{require:[],_on_init:function(){if(this.require.length){spaced_cli.require(this.require,$.proxy(function(){this.is_init=true;
if(typeof this.on_init=="function"){this.on_init()
}},this))
}else{this.is_init=true;
if(typeof this.on_init=="function"){this.on_init()
}}},_on_open:function(a){this.on_open(a)
},_on_close:function(){this.on_close()
},_on_update:function(){this.on_update()
},_on_msg:function(b,a){this.on_msg(b,a)
},on_open:function(){},on_close:function(){},on_init:function(){},on_update:function(){},on_msg:function(){}},init:function(){var a=this;
$(".m_modal").each(function(c,b){a.bind($(b))
});
$(window).on("spaced_modal_add",function(d,c){if(!c.id){return
}var b=$('.m_modal[data-id="'+c.id+'"]').last();
a.bind(b)
});
$(window).on("spaced_modal_msg",function(f,d){if(!d.id){return
}var b=$('.m_modal[data-id="'+d.id+'"]').last();
var c=b.data("_core_modal");
if(typeof(c)==="undefined"){return
}c._on_msg(d.msg,d.data)
});
$("body").on("click.modal-close",".m_modal .close",function(c){var b=$(c.currentTarget).closest(".m_modal");
var d=b.attr("data-id");
a.close(d)
});
$(window).on("keyup.modal-close-esc",function(b){if(b.keyCode!=27){return true
}var c=$(".m_modal.show").eq(0).attr("data-id");
a.close(c)
});
$("body").on("click.modal-close-overlay",function(b){if(!spaced_cli.is_admin&&Object.keys(a.opened).length&&$(b.target).is(".m_modal")){var c=$(".m_modal.show").eq(0).attr("data-id");
a.close(c)
}});
$("body").off("click.open-modal").on("click.open-modal",'a[data-action^="modal"],a[data-action="form"]',function(g){var d,f;
if(spaced_cli.is_admin){return
}var c=$(g.currentTarget).closest(".b_block, .m_modal").attr("data-id");
var b=$(g.currentTarget).attr("data-modal-id");
c=parseInt(c.split("_")[0]);
d=c+"_"+b;
f=$(g.currentTarget).data("modal-data")||{};
spaced_cli.modal.open(d,f)
});
if(!spaced_cli.is_admin){$(".m_modal").removeAttr("data-data")
}},bind:function(a){var c=a.attr("data-m-id");
if(a.data("_core_modal")){return true
}if(!this.data[c]){this.register(c,{})
}var b=new this.data[c](a);
if(typeof(b)!=="object"){return
}a.data("_core_modal",b);
b._on_init()
},register:function(c,b){if(!c){log("Приложение должно иметь уникальный номер")
}b.modal_id=c;
spaced_cli.modal.data[c]=function(d){this.$modal=d;
this.data=this.$modal.data("data");
this.id=this.$modal.attr("data-id")
};
var a=$.extend(true,{},this.modal_default);
spaced_cli.modal.data[c].prototype=$.extend(true,{},a,b)
},open:function(e,d){var a=this;
var b=$(".m_modal.m_"+e);
if(!b.length){spaced_cli.message("Не удалось открыть модальное окно (не существует). ID окна: "+e+"\n. ID страницы с ошибкой: "+spaced_cli.p_id);
return false
}if(!(Math.floor(b.attr("data-m-id")))){spaced_cli.message("Не удалось открыть модальное окно (не задан m_id). ID окна: "+e+"\n. ID страницы с ошибкой: "+spaced_cli.p_id);
return false
}var c=b.data("_core_modal");
$(".m_modal").removeClass("show");
b.closest(".modal-list").addClass("overlay");
b.addClass("show");
$("body").css("overflow","hidden");
this.opened[e]=true;
if(d&&d.fields){a.add_fields(b,d.fields)
}if(c&&typeof c._on_open=="function"){c._on_open()
}},close:function(c){if(c){var a=$(".m_modal.m_"+c);
var b=a.data("_core_modal");
a.removeClass("show");
this.opened[c]=false;
if(!$(".m_modal").hasClass("show")){$(".modal-list").removeClass("overlay");
$("body").css("overflow","")
}if(b&&typeof b._on_close=="function"){b._on_close()
}}else{$(".m_modal").removeClass("show");
$(".modal-list").removeClass("overlay");
Object.keys(this.opened).forEach($.proxy(function(d){if(this.opened[d]){var e=$(".m_modal.m_"+d).data("_core_modal");
this.opened[d]=false;
if(e&&typeof e._on_close=="function"){e._on_close()
}}},this))
}},add_fields:function(c,a){if(!a.length){return
}var b=c.find(".form_fields_advanced");
b.empty();
a.forEach(function(e){var d=$("<input>").attr("type",e.type).attr("name",e.name).attr("value",e.value);
b.append(d)
})
}};
spaced_cli.menu=function(){this.options={menu:".menu",srollSpeed:400,topOffset:1};
this.items=[];
this.menu_floating=false;
this.clickInit=false;
this.block_params={};
this.init=function(b,d){this.$block=d;
var a=this;
if(typeof b.menu!=="undefined"){this.options.menu=b.menu
}if(typeof b.srollSpeed!=="undefined"){this.options.srollSpeed=b.srollSpeed
}if(typeof b.topOffset!=="undefined"){this.options.topOffset=b.topOffset
}this.getItems();
if(spaced_cli.is_admin===0&&!spaced_cli.run.is_mobile()){this.menu_floating=false;
var c=this.$block.find('input[name="menu_floating"]').val();
if(c=="true"||c==1){this.menu_floating=true
}}this.getBlockParams().then(function(f){if(a.menu_floating){var e=a.$block[0].className.replace(/[^0-9]/gim,"");
$(document).off("scroll."+e).on("scroll."+e,function(g){a.floating()
})
}else{a.realeseBlock()
}});
if(!this.clickInit){this.clickInit=true;
this.clickScroll()
}};
this.getBlockParams=function(){var b=this;
var a=b.$block.height();
if(a===0){a=b.$block.data("height")||120
}else{b.$block.data("height",a)
}return new Promise(function(c){setTimeout(function(){b.block_params.height=a;
b.block_params.top=b.$block.offset().top;
c(b.block_params)
},100)
})
};
this.getItems=function(){this.$block.find(this.options.menu+" a").each($.proxy(function(c,e){var f={el:$(e),type:"link",href:"",anchor:{top:0,el:false}};
var b=f.el.attr("href");
var a=b.split("#");
d=a[1];
f.href=b;
if(d!==""&&(a[0]===""||a[0]==window.location.pathname||a[0]==window.location.href||a[0]==window.location.origin)){var d=$('a[name="'+d+'"]');
if(d.length>0){f.type="anchor";
f.anchor={el:d,top:d.offset().top}
}}this.items[b]=f
},this));
this.activeItem()
};
this.clickScroll=function(){this.$block.find(this.options.menu+" a").click($.proxy(function(c){var b=$(c.currentTarget).attr("href");
if(this.items[b].type=="anchor"){c.preventDefault();
var a=this.items[b].anchor.el.offset().top;
$("html, body").animate({scrollTop:a+"px"},300,$.proxy(function(){if(this.menu_floating){a=this.items[b].anchor.el.offset().top-this.$block.find(".container-fluid").height()
}$("html, body").animate({scrollTop:a+"px"},50)
},this))
}},this))
};
this.activeItem=function(){var e=false;
var a=99999999;
for(var b in this.items){var c=this.items[b];
if(c.type=="anchor"&&this.menu_floating){var d=c.anchor.top-this.block_params.height-$(window).height()/2.5;
if($(window).scrollTop()>d&&a>$(window).scrollTop()-d){a=$(window).scrollTop()-d;
e=c.el
}}else{if(c.type=="link"&&!e){if(c.href==window.location.href||c.href==window.location.pathname+window.location.search||c.href==window.location.origin+window.location.pathname+window.location.search){e=c.el
}}}}this.$block.find(this.options.menu+" a").removeClass("active");
if(e){e.addClass("active")
}};
this.floating=function(){if(this.menu_floating&&$(window).scrollTop()>this.block_params.top+this.options.topOffset){this.fixBlock()
}else{this.realeseBlock()
}this.activeItem()
};
this.fixed=false;
this.fixBlock=function(){if(!this.$block.hasClass("floating")){this.$block.addClass("floating")
}if(!this.fixed){this.$block.css("marginBottom",(this.block_params.height-30)+"px");
this.fixed=true
}};
this.realeseBlock=function(){if(this.fixed){this.$block.removeClass("floating").css({marginBottom:"0px"});
this.fixed=false
}}
};

spaced_cli.block={data:{},css_loaded:{},block_default:{require:[],_on_init:function(){var a=this;
if(a.require.length){spaced_cli.require(a.require,function(){a.is_init=true;
a.on_init()
})
}else{a.is_init=true;
a.on_init()
}if(a.$block.is("[data-video-bg]")){spaced_cli.video_bg.init(a.$block,a.$block.data("video-bg"))
}a.light_gallery_bind()
},_on_update:function(){if(this.require.length>0){spaced_cli.require(this.require,$.proxy(function(){this.on_update()
},this))
}else{this.on_update()
}this.light_gallery_bind()
},light_gallery_bind:function(){var d=this;
var c,b;
var f;
if(!d.$block.find(".lg-init").length){return
}e();
$(window).off("resize.lg_init."+d.id).on("resize.lg_init."+d.id,function(h){clearTimeout(f);
f=setTimeout(function(){e()
},100)
});
function e(){if(!spaced_cli.is_admin||$(window).width()<=768){a()
}else{g()
}}function a(){if(d.$block.find(".img_popup").length>0){spaced_cli.require(["//assets/lib/jquery/lightGallery/css/lightgallery.min.css","//assets/lib/jquery/lightGallery/js/lightgallery-all.min.js"],function(){b=d.$block.find(".lg-init");
var h={selector:".img_popup",counter:false,download:false,slideEndAnimation:false,closable:true,loop:false,easing:"ease-out",hideBarsDelay:6000,zoomIcons:false,actualSize:false};
if(b.attr("data-lg-single")){h.enableSlide=false
}c=b.lightGallery(h)
})
}}function g(){if(c&&c.data("lightGallery")){c.data("lightGallery").destroy(true)
}}},_on_msg:function(b,a){switch(b){case"video_bg_update":spaced_cli.video_bg.init(this.$block,a);
break;
case"video_bg_destroy":spaced_cli.video_bg.destroy(this.$block,a);
break
}this.on_msg(b,a)
},on_init:function(){},on_update:function(){this.on_init()
},on_msg:function(a){}},init:function(){$(".b_block").each($.proxy(function(a,b){this.bind($(b))
},this));
$(window).on("spaced_block_add",$.proxy(function(c,b){if(b.id<1){return
}var a=$('.b_block[data-id="'+parseInt(b.id)+'"]');
this.bind(a)
},this));
$(window).on("spaced_block_render",$.proxy(function(c,b){if(b.id<1){return
}var a=$('.b_block[data-id="'+parseInt(b.id)+'"]');
var d=a.data("_core_block");
if(typeof(d)==="undefined"){return
}if(typeof(d._on_update)==="function"){d._on_update()
}},this));
$(window).on("spaced_block_msg",$.proxy(function(c,b){if(b.id<1){return
}var a=$('.b_block[data-id="'+parseInt(b.id)+'"]');
var d=a.data("_core_block");
if(typeof(d)==="undefined"){return
}d._on_msg(b.msg,b.data)
},this))
},bind:function(a){var b=a.attr("data-b-id");
if(a.data("_core_block")){return true
}if(!this.data[b]){this.register(b,{})
}var c=new this.data[b](a);
if(typeof(c)!=="object"){return
}a.data("_core_block",c);
c._on_init()
},update:function(a){var b=a.data("_core_block");
if(typeof(b)==="undefined"){return
}if(typeof(b._on_update)==="function"){b._on_update()
}},register:function(b,c){if(!b){log("Приложение должно иметь уникальный номер")
}c.block_id=b;
spaced_cli.block.data[b]=function(d){this.$block=d;
this.id=this.$block.attr("data-id")
};
var a=$.extend(true,{},this.block_default);
spaced_cli.block.data[b].prototype=$.extend(true,{},a,c)
}};
spaced_cli.timer={list:{},create:function(a){this.list[a.id]=new spaced_cli.timer.Timer(a);
return this.list[a.id]
}};
spaced_cli.timer.Timer=function(a){this.o=a;
this.create()
};
spaced_cli.timer.Timer.prototype={o:{},create:function(){var e=$(this.o.block).find(this.o.item);
var d=e.data("time");
var f=new Date();
this.lang(e);
if(d.type=="date"){var b=d.my.toString().split(".");
this.final_date=new Date(b[1],parseInt(b[0],10)-1,d.d,d.h,d.m)
}else{if(d.type=="monthly"){this.final_date=new Date(f.getFullYear(),f.getMonth(),d.d,d.h,d.m);
if(f.getTime()>this.final_date.getTime()){this.final_date=new Date(f.getFullYear(),f.getMonth()+1,d.d,d.h,d.m)
}if(parseInt(d.d,10)!=this.final_date.getDate()){this.final_date.setDate(0);
if(f.getTime()>this.final_date.getTime()){this.final_date=new Date(this.final_date.getFullYear(),this.final_date.getMonth()+2,0,d.h,d.m)
}}}else{if(d.type=="weekly"){var a=parseInt(f.getDate(),10)-parseInt(f.getDay(),10)+parseInt(d.dw,10);
this.final_date=new Date(f.getFullYear(),f.getMonth(),a,d.h,d.m);
if(f.getTime()>this.final_date.getTime()){this.final_date.setDate(this.final_date.getDate()+7)
}}else{if(d.type=="daily"){this.final_date=new Date(f.getFullYear(),f.getMonth(),f.getDate(),d.h,d.m);
if(f.getTime()>this.final_date.getTime()){this.final_date.setDate(this.final_date.getDate()+1)
}}else{this.final_date=new Date();
this.final_date.setMonth(this.final_date.getMonth()+1,15)
}}}}this.item_d_1=e.find(".d [data-value]").eq(0);
this.item_d_2=e.find(".d [data-value]").eq(1);
this.item_d_3=e.find(".d [data-value]").eq(2);
this.item_h_1=e.find(".h [data-value]").eq(0);
this.item_h_2=e.find(".h [data-value]").eq(1);
this.item_m_1=e.find(".m [data-value]").eq(0);
this.item_m_2=e.find(".m [data-value]").eq(1);
this.item_s_1=e.find(".s [data-value]").eq(0);
this.item_s_2=e.find(".s [data-value]").eq(1);
this.last_offset={d:undefined,h:undefined,m:undefined,s:undefined};
if(!spaced_cli.is_admin&&this.final_date.getTime()<new Date().getTime()){$(this.o.block).hide()
}else{this.start()
}},update:function(){this.second_left=this.final_date.getTime()-new Date().getTime();
this.second_left=Math.ceil(this.second_left/1000);
this.second_left=this.second_left<0?0:this.second_left;
this.offset={d:Math.floor(this.second_left/60/60/24),h:Math.floor(this.second_left/60/60)%24,m:Math.floor(this.second_left/60)%60,s:this.second_left%60};
if(this.last_offset.d!=this.offset.d){var e=this.offset.d.toString().split("");
if(e.length<2){e.unshift(0)
}if(e.length<3){e.unshift(0)
}this.item_d_1.attr("data-value",e[0]).text(e[0]);
this.item_d_2.attr("data-value",e[1]).text(e[1]);
this.item_d_3.attr("data-value",e[2]).text(e[2])
}if(this.last_offset.h!=this.offset.h){var c=this.offset.h.toString().split("");
if(c.length<2){c.unshift(0)
}this.item_h_1.attr("data-value",c[0]).text(c[0]);
this.item_h_2.attr("data-value",c[1]).text(c[1])
}if(this.last_offset.m!=this.offset.m){var a=this.offset.m.toString().split("");
if(a.length<2){a.unshift(0)
}this.item_m_1.attr("data-value",a[0]).text(a[0]);
this.item_m_2.attr("data-value",a[1]).text(a[1])
}if(this.last_offset.s!=this.offset.s){var b=this.offset.s.toString().split("");
if(b.length<2){b.unshift(0)
}this.item_s_1.attr("data-value",b[0]).text(b[0]);
this.item_s_2.attr("data-value",b[1]).text(b[1])
}this.last_offset=this.offset;
if(this.second_left<0){this.stop();
return
}},start:function(){if(this.interval!==null){clearInterval(this.interval)
}this.update();
this.interval=setInterval($.proxy(function(){this.update()
},this),200)
},stop:function(){clearInterval(this.interval);
this.interval=null
},lang:function(a){a.find("[data-timer-text]").each(function(c,e){var d=$(e).attr("data-timer-text");
var b=spaced_cli.lang.get("timer."+d);
$(e).text(b)
})
}};
spaced_cli.lang={basic:"ru",ru:{form:{required:"Поле должно быть заполнено",email:"Некорректный адрес электронной почты",digits:"Поле должно содержать только цифры",minlength:"Минимальная длина - 5 цифр"},timer:{dd:"Дней",hh:"Часов",mm:"Минут",ss:"Секунд"}},en:{form:{required:"This field is required",email:"Please enter a valid email address",digits:"Please enter only digits",minlength:"Please enter at least 5 digits"},timer:{dd:"Days",hh:"Hours",mm:"Minutes",ss:"Seconds"}},de:{form:{required:"Dieses Feld ist ein Pflichtfeld",email:"Geben Sie bitte eine gültige E-Mail Adresse ein",digits:"Geben Sie bitte nur Ziffern ein",minlength:"Geben Sie bitte mindestens 5 Ziffern ein"},timer:{dd:"Days",hh:"Stunden",mm:"Minutes",ss:"Sekunden"}},fr:{form:{required:"Ce champ est obligatoire",email:"Veuillez fournir une adresse électronique valide",digits:"Veuillez fournir seulement des chiffres",minlength:"Veuillez fournir au moins 5 chiffres"},timer:{dd:"Jours",hh:"Heures",mm:"Minutes",ss:"Secondes"}},es:{form:{required:"Este campo es obligatorio",email:"Escribe una dirección de correo válida",digits:"Escribe sólo dígitos",minlength:"Por favor, no escribas menos de 5 dígitos"},timer:{dd:"Días",hh:"Horas",mm:"Minutos",ss:"Segundos"}},it:{form:{required:"Campo obbligatorio",email:"Inserisci un indirizzo email valido",digits:"Inserisci solo numeri",minlength:"Inserisci almeno 5 numeri"},timer:{dd:"Days",hh:"Ore",mm:"Minuti",ss:"Secondi"}},pl:{form:{required:"To pole jest wymagane",email:"Proszę o podanie prawidłowego adresu email",digits:"Proszę o podanie samych cyfr",minlength:"Proszę o podanie przynajmniej 5 cyfr"},timer:{dd:"Dni",hh:"Godziny",mm:"Minuty",ss:"Sekundy"}},ge:{form:{required:"ეს ველი სავალდებულოა",email:"გთხოვთ შეიყვანოთ სწორი ფორმატით",digits:"დაშვებულია მხოლოდ ციფრები",minlength:"შეიყვანეთ მინიმუმ 5 ციფრი"},timer:{dd:"დღეები",hh:"საათი",მმ:"ოქმი",ss:"წამი"}},ua:{form:{required:"Поле має бути заповнено",email:"Некоректна адреса електронної пошти",digits:"Поле повинно містити тільки цифри",minlength:"Мінімальна довжина - 5 цифр"},timer:{dd:"Дні",hh:"Години",mm:"Хвилини",ss:"Секунди"}},by:{form:{required:"Поле павінна быць запоўнена",email:"Некарэктны адрас электроннай пошты",digits:"Поле павінна ўтрымліваць толькі лічбы",minlength:"Мінімальны даўжыня - 5 лічбаў"},timer:{dd:"Дні",hh:"Гадзіннік",mm:"Хвіліны",ss:"Секунды"}},kz:{form:{required:"Міндетті өріс",email:"Жарамсыз электрондық пошта мекенжайы",digits:"Далалық тек сандардан тұруы тиіс",minlength:"Ең аз ұзындығы - 5 сандар"},timer:{dd:"Күндері",hh:"Сағаттар",mm:"Минут",cc:"Секунд"}},get:function(g,h){var b=this;
if(!h||!b[h]){h=spaced_cli.current_lang||b.basic
}var f=g.split(".");
var e=b[h];
for(var d=0,a=f.length;
d<a;
d++){var c=f[d];
e=e[c];
if(!e&&h!=b.basic){return b.get(g,b.basic)
}}return e
}};
spaced_cli.block.register(30,{on_init:function(){var b=this.$block.attr("data-id");
var a=this.$block.find(".form_field_submit").attr("data-modal-id");
this.form=spaced_cli.form.create({id:this.id,block:this.$block,form:"div.form",form_done:b+"_"+a})
}});
spaced_cli.block.register(79,{require:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js","/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.css"],on_init:function(){var a=this;
a.row=1;
var c=a.$block.data("slide_count")||0;
var b=a.$block.find(".slider").addClass("noanimate");
a.slider=b.lightSlider({item:a.row,slideMargin:0,useCSS:true,cssEasing:"cubic-bezier(.76,.07,.56,.56)",speed:500,adaptiveHeight:true,mode:"slide",loop:false,cycle:true,enableDrag:false,pager:false,controls:true,onSliderLoad:function(){a.slider.goToSlide(c);
spaced_cli.image.run(a.$block);
a.slider.refresh()
},onAfterSlide:function(){var d=(+a.slider.getCurrentSlideCount()-1);
a.$block.data("slide_count",d);
b.removeClass("noanimate")
}});
a.controlKeys()
},controlKeys:function(){var a=this;
var b=a.$block.find(".slider_act");
a.$block.find(".prev, .next").click(function(d){var c=$(d.currentTarget).attr("data-action");
if(c=="prev"||c=="next"){b.find("a.slider_"+c).trigger("click")
}})
},on_msg:function(d,b){var a=this;
if(a.slider){var c=a.$block.find(".slider");
setTimeout(function(){if(d=="items_add"){a.slider.goToSlide(b.at)
}else{if(d=="items_remove"){a.slider.goToSlide(b.at-1)
}}},150)
}}});
spaced_cli.block.register(89,{require:["/_s/css/land/socials.css"]});
spaced_cli.block.register(45,{on_init:function(){if(spaced_cli.run.is_desktop){this.$block.on("mouseover mouseout",".item",$.proxy(function(d){var b=$(d.currentTarget);
var a=b.find(".overlay");
var c=75+15;
if(this.$block.find(".item_list").hasClass("hide_desc")){c=50+15
}if(d.type=="mouseover"){b.addClass("hover");
a.css("height",c+parseInt(a.find(".img_text").outerHeight())+"px")
}else{b.removeClass("hover");
a.attr("style","")
}},this))
}},on_msg:function(c){var d=this.$block.find(".item.hover");
if(d.length>0){var b=75+15;
if(this.$block.find(".item_list").hasClass("hide_desc")){b=50+15
}var a=d.find(".overlay");
a.css("height",b+parseInt(a.find(".img_text").outerHeight())+"px")
}}});
spaced_cli.block.register(69,{on_init:function(){if(spaced_cli.run.is_mobile()){this.$block.find(".parallax").removeClass("parallax")
}}});
spaced_cli.block.register(28,{on_init:function(){var a=this;
a.$block.find(".item .form_btn > a").each(function(d,f){var b=$(f).closest(".item");
var c=b.find(".name").text();
var g={fields:[{type:"hidden",name:"type[1000]",value:"hidden"},{type:"hidden",name:"vars[1000]",value:"Услуга"},{type:"hidden",name:"form[1000]",value:c}]};
if(a.$block.find(".btn_group").length){var h=b.find(".price").clone();
h.find("del").remove();
var e=h.text();
g.fields.push({type:"hidden",name:"pay[price]",value:e});
g.fields.push({type:"hidden",name:"pay[desc]",value:c})
}$(f).data("modal-data",g)
})
}});
spaced_cli.block.register(63,{require:["/_s/lib/spaced/flexbeMenu/jquery.flexbeMenu.js"],on_init:function(){var a=this;
if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400},this.$block);
this.$block.find(".mobile-menu-button a").flexbeMenu({})
}});
spaced_cli.block.register(100,{on_init:function(){this.fix_height()
},on_msg:function(a){if(a=="on_change"){this.fix_height()
}},fix_height:function(){var b=this;
this.$block.find(".price").each(function(d,e){var c=$(e).text().length;
if(c>=6){b.$block.find(".plans").addClass("tiny");
return false
}});
if(window.innerWidth<=768){return
}var a=0;
this.$block.find(".item").each(function(c,d){$(d).css("min-height","");
var e=$(d).outerHeight();
if($(d).hasClass("active")){e-=30
}a=(e>=a)?e:a
});
this.$block.find(".item").not(".active").css("min-height",a+"px");
this.$block.find(".item.active").css("min-height",(a+30)+"px")
}});
spaced_cli.block.register(29,{on_init:function(){var b=this.$block.attr("data-id");
var a=this.$block.find(".form_field_submit").attr("data-modal-id");
this.form=spaced_cli.form.create({id:this.id,block:this.$block,form:"div.form",form_done:b+"_"+a})
}});
spaced_cli.block.register(109,{require:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js"],on_init:function(){var a=this;
a.row=1;
var b=a.$block.find(".slider").addClass("noanimate");
var c=a.$block.data("slide_count")||0;
a.slider=b.lightSlider({item:a.row,slideMove:a.row,slideMargin:0,useCSS:true,cssEasing:"cubic-bezier(0.76, 0.91, 0.35, 1)",speed:550,adaptiveHeight:true,loop:false,cycle:true,pager:false,controls:true,prevHtml:"",nextHtml:"",onBeforeSlide:function(f,d){d+=1;
a.$block.find(".counter .current").text(d)
},onAfterSlide:function(){var d=a.slider.getCurrentSlideCount()-1;
a.$block.data("slide_count",d);
b.removeClass("noanimate");
setTimeout(function(){a.slider.refresh()
},100)
},onSliderLoad:function(){a.slider.goToSlide(c);
spaced_cli.image.run(a.$block)
}});
a.$block.find(".controls .button").off("click").on("click",function(f){var d=$(f.currentTarget).attr("data-action");
a.$block.find(".slider_act ."+d).trigger("click")
})
},on_msg:function(d,b){var a=this;
if(a.slider){var c=a.$block.find(".slider");
setTimeout(function(){var e=0;
if(d=="items_add"){e=Math.floor(+b.index/a.row);
a.slider.goToSlide(e)
}else{if(d=="items_remove"){e=Math.floor((+b.at-1)/a.row);
if(e<0){e=0
}a.slider.goToSlide(e)
}}},150)
}}});
spaced_cli.block.register(74,{on_init:function(){var b=this.$block.attr("data-id");
var a=this.$block.find(".form_field_submit").attr("data-modal-id");
this.form=spaced_cli.form.create({id:this.id,block:this.$block,form:"div.form",form_done:b+"_"+a})
}});
spaced_cli.block.register(83,{require:["/_s/lib/spaced/flexbeMenu/jquery.flexbeMenu.js","/_s/css/land/socials.css"],on_init:function(){if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400},this.$block);
this.$block.find(".mobile-menu-button a").flexbeMenu({})
}});
spaced_cli.block.register(26,{on_init:function(){var a=this;
a.$block.find(".item .form_btn > a").each(function(d,f){var b=$(f).closest(".item");
var c=b.find(".name").text();
var g={fields:[{type:"hidden",name:"type[1000]",value:"hidden"},{type:"hidden",name:"vars[1000]",value:"Услуга"},{type:"hidden",name:"form[1000]",value:c}]};
if(a.$block.find(".btn_group").length){var h=b.find(".price").clone();
h.find("del").remove();
var e=h.text();
g.fields.push({type:"hidden",name:"pay[price]",value:e});
g.fields.push({type:"hidden",name:"pay[desc]",value:c})
}$(f).data("modal-data",g)
})
}});
spaced_cli.block.register(80,{require:["/_s/lib/spaced/flexbeMenu/jquery.flexbeMenu.js","/_s/css/land/socials.css"],on_init:function(){if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400},this.$block);
this.$block.find(".mobile-menu-button a").flexbeMenu({})
}});
spaced_cli.block.register(93,{on_init:function(){}});
spaced_cli.block.register(86,{require:["/_s/css/land/socials.css"]});
spaced_cli.block.register(81,{require:["/_s/lib/spaced/flexbeMenu/jquery.flexbeMenu.js","/_s/css/land/socials.css"],on_init:function(){if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400},this.$block);
this.$block.find(".mobile-menu-button a").flexbeMenu({})
}});
spaced_cli.block.register(9,{require:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js"],on_init:function(){var a=this;
var c=a.$block.find(".item_list").hasClass("slidered");
if(c){var b=a.$block.find(".slider").addClass("noanimate");
a.row=3;
var d=a.$block.data("slide_count")||0;
a.slider=slider=slider=b.lightSlider({item:a.row,slideMove:a.row,slideMargin:0,useCss:true,cssEasing:"cubic-bezier(0.76, 0.91, 0.35, 1)",speed:550,adaptiveHeight:true,loop:false,auto:false,pause:4000,pauseOnHover:true,enableDrag:false,enableTouch:true,pager:true,controls:true,responsive:[{breakpoint:960,settings:{item:2,slideMove:2}},{breakpoint:768,settings:{item:1,slideMove:1}}],onAfterSlide:function(){var e=a.slider.getCurrentSlideCount()-1;
a.$block.data("slide_count",e);
b.removeClass("noanimate");
setTimeout(function(){a.slider.refresh()
},100)
},onSliderLoad:function(){a.slider.goToSlide(d);
spaced_cli.image.run(a.$block)
}});
a.controlKeys()
}},controlKeys:function(){var a=this;
var b=a.$block.find(".slider_act");
a.$block.find(".prev, .next").click(function(d){var c=$(d.currentTarget).attr("data-action");
if(c=="prev"||c=="next"){b.find("a.slider_"+c).trigger("click")
}})
},on_msg:function(d,b){var a=this;
if(a.slider){var c=a.$block.find(".slider");
setTimeout(function(){var e=0;
if(d=="items_add"){e=Math.floor(+b.at/a.row);
a.slider.goToSlide(e)
}else{if(d=="items_remove"){e=Math.floor((+b.at-1)/a.row);
a.slider.goToSlide(e)
}}},150)
}}});
spaced_cli.block.register(77,{require:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js","/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.css"],on_init:function(){var a=this;
a.row=1;
var c=a.$block.data("slide_count")||0;
var b=a.$block.find(".slider").addClass("noanimate");
a.slider=b.lightSlider({item:a.row,slideMargin:0,useCSS:true,cssEasing:"cubic-bezier(.76,.07,.56,.56)",speed:500,adaptiveHeight:true,mode:"slide",loop:false,cycle:true,enableDrag:false,pager:true,controls:true,onSliderLoad:function(){a.slider.goToSlide(c);
spaced_cli.image.run(a.$block);
a.setPager();
a.slider.refresh()
},onBeforeSlide:function(){a.setPager()
},onAfterSlide:function(){var d=(+a.slider.getCurrentSlideCount()-1);
a.$block.data("slide_count",d);
b.removeClass("noanimate")
}});
a.controlKeys();
a.pagerClick()
},controlKeys:function(){var a=this;
var b=a.$block.find(".slider_act");
a.$block.find(".prev, .next").click(function(d){var c=$(d.currentTarget).attr("data-action");
if(c=="prev"||c=="next"){b.find("a.slider_"+c).trigger("click")
}})
},setPager:function(){var a=this;
var b=a.$block.find(".slider");
var c=a.slider.getCurrentSlideCount();
a.$block.find(".slider-pager .page-item").removeClass("active");
a.$block.find(".slider-pager .page-item[data-item-id="+c+"]").addClass("active")
},pagerClick:function(){var a=this;
a.$block.find(".page-item").on("click",function(){var b=(+$(this).data("itemId")-1);
a.slider.goToSlide(b)
})
},on_msg:function(d,b){var a=this;
if(a.slider){var c=a.$block.find(".slider");
setTimeout(function(){if(d=="items_add"){a.slider.goToSlide(b.at)
}else{if(d=="items_remove"){a.slider.goToSlide(b.at-1)
}}},150)
}}});
spaced_cli.block.register(101,{on_init:function(){this.fix_height()
},on_msg:function(a){if(a=="on_change"){this.fix_height()
}},fix_height:function(){var b=this;
this.$block.find(".price").each(function(d,e){var c=$(e).text().length;
if(c>=6){b.$block.find(".plans").addClass("tiny");
return false
}});
if(window.innerWidth<=768){return
}var a=0;
this.$block.find(".item").each(function(c,d){$(d).css("min-height","");
var e=$(d).outerHeight();
if($(d).hasClass("active")){e-=30
}a=(e>=a)?e:a
});
this.$block.find(".item").css("min-height",a+"px");
this.$block.find(".count-3 .item.active").css("min-height",(a+30)+"px")
}});
spaced_cli.block.register(31,{on_init:function(){var b=this.$block.attr("data-id");
var a=this.$block.find(".form_field_submit").attr("data-modal-id");
this.form=spaced_cli.form.create({id:this.id,block:this.$block,form:"div.form",form_done:b+"_"+a})
}});
spaced_cli.block.register(25,{on_init:function(){var a=this;
a.$block.find(".item .form_btn > a").each(function(d,f){var b=$(f).closest(".item");
var c=b.find(".name").text();
var g={fields:[{type:"hidden",name:"type[1000]",value:"hidden"},{type:"hidden",name:"vars[1000]",value:"Услуга"},{type:"hidden",name:"form[1000]",value:c}]};
if(a.$block.find(".btn_group").length){var h=b.find(".price").clone();
h.find("del").remove();
var e=h.text();
g.fields.push({type:"hidden",name:"pay[price]",value:e});
g.fields.push({type:"hidden",name:"pay[desc]",value:c})
}$(f).data("modal-data",g)
})
}});
spaced_cli.block.register(27,{on_init:function(){var a=this;
a.$block.find(".item .form_btn > a").each(function(d,f){var b=$(f).closest(".item");
var c=b.find(".name").text();
var g={fields:[{type:"hidden",name:"type[1000]",value:"hidden"},{type:"hidden",name:"vars[1000]",value:"Услуга"},{type:"hidden",name:"form[1000]",value:c}]};
if(a.$block.find(".btn_group").length){var h=b.find(".price").clone();
h.find("del").remove();
var e=h.text();
g.fields.push({type:"hidden",name:"pay[price]",value:e});
g.fields.push({type:"hidden",name:"pay[desc]",value:c})
}$(f).data("modal-data",g)
})
}});
spaced_cli.block.register(67,{require:["/_s/lib/spaced/flexbeMenu/jquery.flexbeMenu.js"],on_init:function(){var a=this.$block.is($('div[data-b-id="67"]').eq(0));
if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400},this.$block);
if(a){this.$block.addClass("mobile")
}this.$block.find(".mobile-menu-button a").flexbeMenu({})
}});
spaced_cli.block.register(49,{on_init:function(){this.size_render()
},size_render:function(){var g=this.$block.find(".item_list");
var d={item:".item",cols:3,margin:10,resizable:true};
function c(h){var i=g.find(".preview_img > img");
var j=i.length;
if(j===0){h()
}i.each(function(l,k){var m=new Image();
m.onload=function(n){j--;
if(j===0){h()
}};
m.onerror=function(n){j--;
if(j===0){h()
}};
m.src=$(k).attr("src")
})
}function e(){if($(window).width()<767){g.css({position:"relative",height:""});
g.find(".item").removeAttr("style");
return false
}g.css("position","relative");
var m=0;
var p,h,j,q,k,l,n=[];
k=parseInt(d.cols||3);
p=g.find(d.item);
h=g.outerWidth();
j=parseInt(d.margin||0);
q=parseInt(h/k)-j;
if(k==1){l=-j/2
}else{l=(h%(q+j))/2
}for(var o=0;
o<k;
o++){n.push(-j/2)
}p.each(function(t,u){var s=$(u);
var r=$.inArray(Math.min.apply(Math,n),n);
s.css({width:q,position:"absolute",margin:j/2,top:n[r]+j/2,left:(q+j)*r+l});
n[r]+=s.outerHeight()+j;
if(m<n[r]){m=n[r]
}});
g.css("height",m+parseInt(j/2))
}e();
c(function(){setTimeout(e,200)
});
if(d.resizable){var b=$(window).on("resize",function(){e()
});
g.on("remove",b.unbind)
}var f=0;
var a=setInterval(function(){e();
f++;
if(f>=50){clearInterval(a)
}},1000)
}});
spaced_cli.block.register(99,{on_init:function(){this.fix_height()
},on_msg:function(b,a){if(b=="on_change"){this.fix_height()
}},fix_height:function(){if(window.innerWidth<=768){return
}var a=0;
this.$block.find(".item").each(function(b,c){$(c).css("min-height","");
var d=$(c).outerHeight();
if($(c).hasClass("active")){d-=30
}a=(d>=a)?d:a
});
this.$block.find(".item").not(".active").css("min-height",a+"px");
this.$block.find(".item.active").css("min-height",(a+30)+"px")
}});
spaced_cli.block.register(44,{on_init:function(){this.timer=spaced_cli.timer.create({id:this.id,block:this.$block,item:"div.timer"});
var b=this.$block.attr("data-id");
var a=this.$block.find(".form_field_submit").attr("data-modal-id");
this.form=spaced_cli.form.create({id:this.id,block:this.$block,form:"div.form",form_done:b+"_"+a})
}});
spaced_cli.block.register(72,{require:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js"],on_init:function(){var a=this;
var c=a.$block.find(".slider").addClass("noanimate");
var d=a.$block.data("slide_count")||0;
var b=(!spaced_cli.is_admin&&+c.attr("data-slideshow"));
if(b==1){b=5
}a.slider=c.lightSlider({item:1,slideMargin:0,useCSS:true,cssEasing:"cubic-bezier(0.76, 0.91, 0.35, 1)",speed:550,adaptiveHeight:true,loop:false,cycle:true,auto:b?1:0,pause:1000*b,pauseOnHover:true,enableDrag:false,prevHtml:'<div class="button"></div>',nextHtml:'<div class="button"></div>',onAfterSlide:function(){a.$block.data("slide_count",a.slider.getCurrentSlideCount()-1);
c.removeClass("noanimate");
setTimeout(function(){a.slider.refresh()
},100)
},onSliderLoad:function(){a.slider.goToSlide(d);
spaced_cli.image.run(a.$block)
}})
},on_msg:function(d,b){var a=this;
if(a.slider){var c=a.$block.find(".slider");
setTimeout(function(){if(d=="items_add"){a.slider.goToSlide(b.index)
}else{if(d=="items_remove"){var e=(+b.at-1);
if(e<0){e=0
}a.slider.goToSlide(e)
}}},150)
}}});
spaced_cli.block.register(88,{require:["/_s/css/land/socials.css"]});
spaced_cli.block.register(70,{require:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js"],on_init:function(){var a=this;
var c=a.$block.find(".item_list").hasClass("slidered");
if(c){var b=a.$block.find(".slider").addClass("noanimate");
a.row=2;
var d=a.$block.data("slide_count")||0;
a.slider=slider=slider=b.lightSlider({item:a.row,slideMove:a.row,slideMargin:50,useCss:true,cssEasing:"cubic-bezier(0.76, 0.91, 0.35, 1)",speed:550,adaptiveHeight:true,loop:false,auto:false,pauseOnHover:true,enableDrag:false,enableTouch:true,pager:true,controls:true,responsive:[{breakpoint:960,settings:{slideMargin:25}},{breakpoint:768,settings:{item:1,slideMove:1,slideMargin:0}}],onAfterSlide:function(){var e=a.slider.getCurrentSlideCount()-1;
a.$block.data("slide_count",parseInt(e));
b.removeClass("noanimate");
setTimeout(function(){a.slider.refresh()
},100)
},onSliderLoad:function(){a.slider.goToSlide(d);
spaced_cli.image.run(a.$block)
}});
a.controlKeys()
}a.fixHeight()
},controlKeys:function(){var a=this;
var b=a.$block.find(".slider_act");
a.$block.find(".prev, .next").click(function(d){var c=$(d.currentTarget).attr("data-action");
if(c=="prev"||c=="next"){b.find("a.slider_"+c).trigger("click")
}})
},fixHeight:function(){var h=this;
var g={};
var a;
var c=h.$block.find(".item");
c.each(function(){g[this.offsetTop]=g[this.offsetTop]||[];
g[this.offsetTop].push(this)
});
for(var f in g){var j=g[f];
var d=0;
$(".item_data",j).css("min-height",0);
if(j.length<=1){continue
}for(var b=0;
b<j.length;
b++){var e=$(".item_data",j[b]).outerHeight();
d=(d<e)?e:d
}$(".item_data",j).css("min-height",d)
}if(h.slider){h.slider.refresh()
}},on_msg:function(d,b){var a=this;
if(a.slider){var c=a.$block.find(".slider");
setTimeout(function(){var e=0;
if(d=="items_add"){e=Math.floor(+b.at/a.row);
a.slider.goToSlide(e)
}else{if(d=="items_remove"){e=Math.floor((+b.at-1)/a.row);
a.slider.goToSlide(e)
}}a.fixHeight()
},150)
}}});
spaced_cli.block.register(71,{require:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js"],on_init:function(){var a=this;
var c=a.$block.find(".slider").addClass("noanimate");
var d=a.$block.data("slide_count")||0;
var b=(!spaced_cli.is_admin&&+c.attr("data-slideshow"));
if(b==1){b=5
}a.slider=c.lightSlider({item:1,slideMargin:0,useCSS:true,cssEasing:"cubic-bezier(0.76, 0.91, 0.35, 1)",speed:550,adaptiveHeight:true,loop:false,cycle:true,auto:b?1:0,pause:1000*b,pauseOnHover:true,enableDrag:false,prevHtml:'<div class="button"></div>',nextHtml:'<div class="button"></div>',onAfterSlide:function(){a.$block.data("slide_count",a.slider.getCurrentSlideCount()-1);
c.removeClass("noanimate");
setTimeout(function(){a.slider.refresh()
},100)
},onSliderLoad:function(){a.slider.goToSlide(d);
spaced_cli.image.run(a.$block)
}})
},on_msg:function(d,b){var a=this;
if(a.slider){var c=a.$block.find(".slider");
setTimeout(function(){if(d=="items_add"){a.slider.goToSlide(+b.index)
}else{if(d=="items_remove"){var e=(+b.at-1);
if(e<0){e=0
}a.slider.goToSlide(e)
}}},150)
}}});
spaced_cli.block.register(48,{require:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js"],on_init:function(){var a=this;
a.row=3;
var c=a.$block.find(".slider").addClass("noanimate");
var d=a.$block.data("slide_count")||0;
var b=(!spaced_cli.is_admin&&+c.attr("data-slideshow"));
if(b==1){b=5
}a.slider=c.lightSlider({item:a.row,slideMove:a.row,slideMargin:0,useCSS:true,cssEasing:"cubic-bezier(0.76, 0.91, 0.35, 1)",speed:550,adaptiveHeight:true,loop:false,cycle:true,auto:b?1:0,pause:1000*b,pauseOnHover:true,enableDrag:false,prevHtml:'<div class="button"></div>',nextHtml:'<div class="button"></div>',responsive:[{breakpoint:960,settings:{item:2,slideMove:2}},{breakpoint:767,settings:{item:1,slideMove:1}}],onAfterSlide:function(){var e=a.slider.getCurrentSlideCount()-1;
a.$block.data("slide_count",e);
c.removeClass("noanimate");
setTimeout(function(){a.slider.refresh()
},100)
},onSliderLoad:function(){a.slider.goToSlide(d);
spaced_cli.image.run(a.$block)
}});
a.$block.find(".item").hover(function(f){$(f.currentTarget).find(".img").addClass("editor_hover")
},function(f){$(f.currentTarget).find(".img").removeClass("editor_hover")
})
},on_msg:function(d,b){var a=this;
if(a.slider){var c=a.$block.find(".slider");
setTimeout(function(){var e=0;
if(d=="items_add"){e=Math.floor(+b.index/a.row);
a.slider.goToSlide(e)
}else{if(d=="items_remove"){e=Math.floor((+b.at-1)/a.row);
if(e<0){e=0
}a.slider.goToSlide(e)
}}},150)
}}});
spaced_cli.block.register(106,{require:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js"],on_init:function(){var a=this;
a.row=1;
var b=a.$block.find(".slider").addClass("noanimate");
var c=a.$block.data("slide_count")||0;
a.slider=b.lightSlider({item:a.row,slideMove:a.row,slideMargin:0,useCSS:true,cssEasing:"cubic-bezier(0.76, 0.91, 0.35, 1)",speed:550,adaptiveHeight:true,loop:false,cycle:true,pager:true,gallery:true,thumbItem:4,galleryMargin:15,thumbMargin:15,enableDrag:true,controls:true,prevHtml:'<div class="button"><svg width="16" height="40" viewBox="0 0 16 10"><path d="M16 6H3.6L6 8.57 4.666 10 0 5l4.666-5L6 1.428 3.6 4H16z" fill="currentColor" fill-rule="evenodd"/></svg></div>',nextHtml:'<div class="button"><svg width="16" height="40" viewBox="0 0 16 10"><path transform="rotate(180) translate(-16, -10)" d="M16 6H3.6L6 8.57 4.666 10 0 5l4.666-5L6 1.428 3.6 4H16z" fill="currentColor" fill-rule="evenodd"/></svg></div>',responsive:[{breakpoint:569,settings:{galleryMargin:3,thumbMargin:3,thumbItem:3}}],onAfterSlide:function(){var d=a.slider.getCurrentSlideCount()-1;
a.$block.data("slide_count",d);
b.removeClass("noanimate");
setTimeout(function(){a.slider.refresh()
},100)
},onSliderLoad:function(){a.slider.goToSlide(c);
spaced_cli.image.run(a.$block)
}});
a.setHeight()
},setHeight:function(){var a=this;
var c;
$(window).off("resize."+a.id+" orientationchange."+a.id).on("resize."+a.id+" orientationchange."+a.id,function(){clearTimeout(c);
c=setTimeout(function(){b()
},100)
});
b();
function b(){if(a.slider){var e=a.$block.find(".slider_wrap");
var d=a.$block.find(".images_wrap").innerWidth()*(5/7);
e.find("li.image img").css("max-height",d+"px");
a.slider.refresh()
}}},on_msg:function(d,b){var a=this;
if(a.slider){var c=a.$block.find(".slider");
setTimeout(function(){var e=0;
if(d=="items_add"){e=Math.floor(+b.index/a.row);
a.slider.goToSlide(e)
}else{if(d=="items_remove"){e=Math.floor((+b.at-1)/a.row);
if(e<0){e=0
}a.slider.goToSlide(e)
}}},150)
}}});
spaced_cli.block.register(94,{on_init:function(){var b=this.$block.attr("data-id");
var a=this.$block.find(".form_field_submit").attr("data-modal-id");
this.form=spaced_cli.form.create({id:this.id,block:this.$block,form:"div.form",form_done:b+"_"+a})
}});
spaced_cli.block.register(10,{require:["http://api-maps.yandex.ru/2.1/?lang=ru_RU"],on_init:function(){this.$map=this.$block.find("[data-map]").eq(0);
this.map_data=this.$map.data("map");
ymaps.ready($.proxy(function(){this.show_map()
},this));
if(spaced_cli.is_admin){this.$block.find(".overlay").remove()
}else{this.$block.find(".overlay").one("mousedown",function(a){$(a.currentTarget).remove()
})
}},show_map:function(){if(typeof(this.map)!=="undefined"){this.map.destroy()
}this.map=new ymaps.Map(this.$map.get(0),{center:this.map_data.center,zoom:this.map_data.zoom,controls:["zoomControl","fullscreenControl"],behaviors:["default","scrollZoom"],type:"yandex#map"});
var a;
this.map.behaviors.disable("scrollZoom");
$(this.$map).off("mouseenter.map_scroll").on("mouseenter.map_scroll",$.proxy(function(b){a=window.setTimeout($.proxy(function(){this.map.behaviors.enable("scrollZoom")
},this),700)
},this));
$(this.$map).off("mouseleave.map_scroll").on("mouseleave.map_scroll",$.proxy(function(b){if(a){window.clearTimeout(a);
this.map.behaviors.disable("scrollZoom")
}},this));
this.update_places();
if(spaced_cli.run.is_mobile()){this.map.behaviors.disable("drag")
}},update_places:function(){this.map.geoObjects.removeAll();
if(typeof(this.map_data.marker)==="undefined"){this.map_data.marker="/_app/block/10/mark_blue.png"
}$.each(this.map_data.places,$.proxy(function(c,a){if(typeof(a.color)==="undefined"){a.color="blue"
}var b=new ymaps.Placemark(a.coords,{balloonContent:a.address},{iconLayout:"default#image",iconImageHref:"/_app/block/10/mark_"+a.color+".png",iconImageSize:[50,50],iconImageOffset:[-25,-50]});
this.map.geoObjects.add(b)
},this))
}});
spaced_cli.block.register(65,{require:["/_s/lib/spaced/flexbeMenu/jquery.flexbeMenu.js"],on_init:function(){var a=this;
if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400,topOffset:1},this.$block);
this.$block.find(".mobile-menu-button a").flexbeMenu({})
}});
spaced_cli.block.register(75,{require:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js","/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.css"],on_init:function(){var a=this;
a.row=1;
var c=a.$block.find(".item_list").hasClass("slidered");
if(c&!spaced_cli.is_admin){var b=a.$block.find(".slider");
a.slider=b.lightSlider({item:a.row,slideMargin:0,useCSS:true,cssEasing:"ease-in-out",speed:1000,adaptiveHeight:true,mode:"fade",loop:true,enableDrag:false,pager:true,controls:false,onBeforeSlide:function(){var e=a.slider.getCurrentSlideCount();
a.$block.data("slide_count",e);
var d=a.$block.find(".slider_pager");
if(e%2){d.removeClass("odd")
}else{d.addClass("odd")
}},onSliderLoad:function(){spaced_cli.image.run(a.$block)
}});
b.data("slider",a.slider);
a.slideShow();
a.fixHeight()
}},slideShow:function(){var a=this;
var b={};
var e=a.$block.find(".slider");
var d=e.parents(".item_list");
var c=1000*e.attr("data-timeout")||5000;
b.init=function(){var g=[$(document).scrollTop(),$(document).scrollTop()+$(window).height()];
var f=[d.offset().top,d.offset().top+d.height()];
if(a.inRange(f,g)){b.startSlideshow();
b.onHover()
}else{b.stopSlideshow()
}};
b.startSlideshow=function(){if(!e.data("playTimeout")){e.data("playTimeout",setInterval(function(){a.slider.goToNextSlide()
},c))
}};
b.stopSlideshow=function(){clearInterval(e.data("playTimeout"));
e.data("playTimeout","")
};
b.onHover=function(){e.off("hover");
e.hover(function(){b.stopSlideshow()
},function(){b.startSlideshow()
})
};
$(document).on("scroll",function(){b.init()
});
b.init()
},inRange:function(c,a){for(var b=c[0];
b<=c[1];
b++){if(b>=a[0]&&b<=a[1]){return true
}}return false
},fixHeight:function(){var b=this;
var a=[];
var f;
var g=b.$block.find(".item");
var d=0;
g.each(function(){a.push(this)
});
$(".item_data",a).css("height",0);
for(var c=0;
c<a.length;
c++){var e=$(".item_data",a[c]).outerHeight();
d=(d<e)?e:d
}$(".item_data",a).css("height",d)
}});
spaced_cli.block.register(4,{on_init:function(){var a=this;
a.$block.find(".item .form_btn > a").each(function(d,f){var b=$(f).closest(".item");
var c=b.find(".name").text();
var g={fields:[{type:"hidden",name:"type[1000]",value:"hidden"},{type:"hidden",name:"vars[1000]",value:"Услуга"},{type:"hidden",name:"form[1000]",value:c}]};
if(a.$block.find(".btn_group").length){var h=b.find(".price").clone();
h.find("del").remove();
var e=h.text();
g.fields.push({type:"hidden",name:"pay[price]",value:e});
g.fields.push({type:"hidden",name:"pay[desc]",value:c})
}$(f).data("modal-data",g)
})
}});
spaced_cli.block.register(66,{require:["/_s/lib/spaced/flexbeMenu/jquery.flexbeMenu.js"],on_init:function(){if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400},this.$block);
this.$block.find(".mobile-menu-button a").flexbeMenu({})
}});
spaced_cli.block.register(76,{require:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js","/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.css"],on_init:function(){var a=this;
a.row=1;
var c=a.$block.data("slide_count")||0;
var b=a.$block.find(".slider").addClass("noanimate");
slider=a.slider=b.lightSlider({item:a.row,slideMargin:0,useCSS:true,cssEasing:"cubic-bezier(.76,.07,.56,.56)",speed:500,adaptiveHeight:true,mode:"slide",loop:false,cycle:true,enableDrag:false,pager:true,controls:true,onSliderLoad:function(){a.slider.goToSlide(c);
spaced_cli.image.run(a.$block);
a.setPager();
a.slider.refresh()
},onBeforeSlide:function(){a.setPager()
},onAfterSlide:function(){var d=(+a.slider.getCurrentSlideCount()-1);
a.$block.data("slide_count",d);
b.removeClass("noanimate")
}});
a.controlKeys();
a.pagerClick()
},controlKeys:function(){var a=this;
var b=a.$block.find(".slider_act");
a.$block.find(".prev, .next").click(function(d){var c=$(d.currentTarget).attr("data-action");
if(c=="prev"||c=="next"){b.find("a.slider_"+c).trigger("click")
}})
},setPager:function(){var a=this;
var b=a.$block.find(".slider");
var c=a.slider.getCurrentSlideCount();
a.$block.find(".slider-pager .page-item").removeClass("active");
a.$block.find(".slider-pager .page-item[data-item-id="+c+"]").addClass("active")
},pagerClick:function(){var a=this;
a.$block.find(".page-item").on("click",function(){var b=(+$(this).data("itemId")-1);
a.slider.goToSlide(b)
})
},on_msg:function(d,b){var a=this;
if(a.slider){var c=a.$block.find(".slider");
setTimeout(function(){if(d=="items_add"){a.slider.goToSlide(b.at)
}else{if(d=="items_remove"){a.slider.goToSlide(b.at-1)
}}},150)
}}});
spaced_cli.block.register(87,{require:["/_s/css/land/socials.css"]});
spaced_cli.block.register(24,{on_init:function(){var a=this;
a.$block.find(".item .form_btn > a").each(function(d,f){var b=$(f).closest(".item");
var c=b.find(".name").text();
var g={fields:[{type:"hidden",name:"type[1000]",value:"hidden"},{type:"hidden",name:"vars[1000]",value:"Услуга"},{type:"hidden",name:"form[1000]",value:c}]};
if(a.$block.find(".btn_group").length){var h=b.find(".price").clone();
h.find("del").remove();
var e=h.text();
g.fields.push({type:"hidden",name:"pay[price]",value:e});
g.fields.push({type:"hidden",name:"pay[desc]",value:c})
}$(f).data("modal-data",g)
})
}});
spaced_cli.block.register(90,{require:["/_s/css/land/socials.css"]});
spaced_cli.block.register(95,{on_init:function(){var b=this.$block.attr("data-id");
var a=this.$block.find(".form_field_submit").attr("data-modal-id");
this.form=spaced_cli.form.create({id:this.id,block:this.$block,form:"div.form",form_done:b+"_"+a})
}});
spaced_cli.block.register(78,{require:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js","/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.css"],on_init:function(){var a=this;
a.row=1;
var c=a.$block.data("slide_count")||0;
var b=a.$block.find(".slider").addClass("noanimate");
a.slider=b.lightSlider({item:a.row,slideMargin:0,useCSS:true,cssEasing:"cubic-bezier(.76,.07,.56,.56)",speed:500,adaptiveHeight:true,mode:"slide",loop:false,cycle:true,enableDrag:false,pager:true,controls:true,onSliderLoad:function(){a.slider.goToSlide(c);
spaced_cli.image.run(a.$block);
a.slider.refresh()
},onAfterSlide:function(){var d=(+a.slider.getCurrentSlideCount()-1);
a.$block.data("slide_count",d);
b.removeClass("noanimate")
}});
a.controlKeys()
},controlKeys:function(){var a=this;
var b=a.$block.find(".slider_act");
a.$block.find(".prev, .next").click(function(d){var c=$(d.currentTarget).attr("data-action");
if(c=="prev"||c=="next"){b.find("a.slider_"+c).trigger("click")
}})
},on_msg:function(d,b){var a=this;
if(a.slider){var c=a.$block.find(".slider");
setTimeout(function(){if(d=="items_add"){a.slider.goToSlide(b.at)
}else{if(d=="items_remove"){a.slider.goToSlide(b.at-1)
}}},150)
}}});
spaced_cli.block.register(42,{on_init:function(){this.timer=spaced_cli.timer.create({id:this.id,block:this.$block,item:"div.timer"})
},on_msg:function(a){}});
spaced_cli.block.register(108,{require:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js"],on_init:function(){var a=this;
a.row=1;
var b=a.$block.find(".slider").addClass("noanimate");
var c=a.$block.data("slide_count")||0;
a.slider=b.lightSlider({item:a.row,slideMove:a.row,slideMargin:0,useCSS:true,cssEasing:"cubic-bezier(0.76, 0.91, 0.35, 1)",speed:550,adaptiveHeight:true,loop:false,cycle:true,pager:true,controls:true,prevHtml:'<div class="button"><svg width="16" height="40" viewBox="0 0 16 10"><path d="M16 6H3.6L6 8.57 4.666 10 0 5l4.666-5L6 1.428 3.6 4H16z" fill="currentColor" fill-rule="evenodd"/></svg></div>',nextHtml:'<div class="button"><svg width="16" height="40" viewBox="0 0 16 10"><path transform="rotate(180) translate(-16, -10)" d="M16 6H3.6L6 8.57 4.666 10 0 5l4.666-5L6 1.428 3.6 4H16z" fill="currentColor" fill-rule="evenodd"/></svg></div>',onAfterSlide:function(){var d=a.slider.getCurrentSlideCount()-1;
a.$block.data("slide_count",d);
b.removeClass("noanimate");
setTimeout(function(){a.slider.refresh()
},100)
},onSliderLoad:function(){a.slider.goToSlide(c);
spaced_cli.image.run(a.$block)
}})
},on_msg:function(d,b){var a=this;
if(a.slider){var c=a.$block.find(".slider");
setTimeout(function(){var e=0;
if(d=="items_add"){e=Math.floor(+b.index/a.row);
a.slider.goToSlide(e)
}else{if(d=="items_remove"){e=Math.floor((+b.at-1)/a.row);
if(e<0){e=0
}a.slider.goToSlide(e)
}}},150)
}}});
spaced_cli.block.register(2,{on_init:function(){var b=this.$block.attr("data-id");
var a=this.$block.find(".form_field_submit").attr("data-modal-id");
this.form=spaced_cli.form.create({id:this.id,block:this.$block,form:"div.form",form_done:b+"_"+a})
}});
spaced_cli.block.register(68,{require:["/_s/lib/spaced/flexbeMenu/jquery.flexbeMenu.js"],on_init:function(){if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400},this.$block);
this.$block.find(".mobile-menu-button a").flexbeMenu({})
},on_msg:function(a){}});
spaced_cli.block.register(82,{require:["/_s/lib/spaced/flexbeMenu/jquery.flexbeMenu.js","/_s/css/land/socials.css"],on_init:function(){if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400},this.$block);
this.$block.find(".mobile-menu-button a").flexbeMenu({})
}});
spaced_cli.block.register(96,{on_init:function(){var b=this.$block.attr("data-id");
var a=this.$block.find(".form_field_submit").attr("data-modal-id");
this.form=spaced_cli.form.create({id:this.id,block:this.$block,form:"div.form",form_done:b+"_"+a})
}});
spaced_cli.block.register(73,{require:["/_s/lib/spaced/flexbeMenu/jquery.flexbeMenu.js","/_s/css/land/socials.css"],on_init:function(){if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400},this.$block);
this.$block.find(".mobile-menu-button a").flexbeMenu({})
}});
spaced_cli.block.register(41,{on_init:function(){this.timer=spaced_cli.timer.create({id:this.id,block:this.$block,item:"div.timer"})
}});
spaced_cli.block.register(107,{require:["/_s/lib/spaced/flexbeSlider/jquery.flexbeSlider.new.js"],on_init:function(){var a=this;
a.row=1;
var b=a.$block.find(".slider").addClass("noanimate");
if(b.length&&a.$block.find(".img_wrap").length>4){var c=a.$block.data("slide_count")||0;
a.slider=b.lightSlider({item:a.row,slideMove:a.row,slideMargin:0,useCSS:true,cssEasing:"cubic-bezier(0.76, 0.91, 0.35, 1)",speed:550,adaptiveHeight:true,enableDrag:false,loop:false,cycle:true,pager:true,controls:true,prevHtml:'<div class="button"><svg width="16" height="40" viewBox="0 0 16 10"><path d="M16 6H3.6L6 8.57 4.666 10 0 5l4.666-5L6 1.428 3.6 4H16z" fill="currentColor" fill-rule="evenodd"/></svg></div>',nextHtml:'<div class="button"><svg width="16" height="40" viewBox="0 0 16 10"><path transform="rotate(180) translate(-16, -10)" d="M16 6H3.6L6 8.57 4.666 10 0 5l4.666-5L6 1.428 3.6 4H16z" fill="currentColor" fill-rule="evenodd"/></svg></div>',onAfterSlide:function(){var d=a.slider.getCurrentSlideCount()-1;
a.$block.data("slide_count",d);
b.removeClass("noanimate");
setTimeout(function(){a.slider.refresh()
},100)
},onSliderLoad:function(){a.slider.goToSlide(c);
spaced_cli.image.run(a.$block)
}})
}a.setHeight()
},setHeight:function(){var a=this;
var c;
$(window).off("resize."+a.id+" orientationchange."+a.id).on("resize."+a.id+" orientationchange."+a.id,function(){clearTimeout(c);
c=setTimeout(function(){b()
},100)
});
b();
function b(){var d=a.$block.find(".images_wrap");
var e=d.find(".img").eq(0).innerWidth()*(5/7);
if(e<=20){return
}d.find(".img_wrap").css("height",e+"px");
if(a.slider){a.slider.refresh()
}}},on_msg:function(d,b){var a=this;
if(a.slider){var c=a.$block.find(".slider");
setTimeout(function(){var e=0;
if(d=="items_add"){e=Math.floor(+b.index/a.row);
a.slider.goToSlide(e)
}else{if(d=="items_remove"){e=Math.floor((+b.at-1)/a.row);
if(e<0){e=0
}a.slider.goToSlide(e)
}}},150)
}}});
spaced_cli.block.register(64,{require:["/_s/lib/spaced/flexbeMenu/jquery.flexbeMenu.js"],on_init:function(){var a=this;
if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400,topOffset:120},this.$block);
this.$block.find(".mobile-menu-button a").flexbeMenu({})
}});
spaced_cli.block.register(43,{on_init:function(){this.timer=spaced_cli.timer.create({id:this.id,block:this.$block,item:"div.timer"});
var b=this.$block.attr("data-id");
var a=this.$block.find(".form_field_submit").attr("data-modal-id");
this.form=spaced_cli.form.create({id:this.id,block:this.$block,form:"div.form",form_done:b+"_"+a})
}});
spaced_cli.block.register(85,{require:["/_s/css/land/socials.css"]});
spaced_cli.block.register(84,{require:["/_s/lib/spaced/flexbeMenu/jquery.flexbeMenu.js","/_s/css/land/socials.css"],on_init:function(){if(typeof this.$block.menu==="undefined"){this.$block.menu=new spaced_cli.menu()
}this.$block.menu.init({menu:".menu",scrollSpeed:400},this.$block);
this.$block.find(".mobile-menu-button a").flexbeMenu({})
}});
spaced_cli.modal.register(3,{on_init:function(){var b=this.$modal.attr("data-id");
var a=this.$modal.find(".form_field_submit").attr("data-modal-id");
b=parseInt(b.split("_")[0]);
this.form=spaced_cli.form.create({id:this.id,block:this.$modal,form:"div.form",form_done:b+"_"+a})
},on_open:function(){var a=this;
a.form_position();
$(window).off("resize.modal").on("resize.modal",function(){a.form_position()
})
},on_close:function(){$(window).off("resize.modal")
},form_position:function(){$modal=this.$modal.find(".modal-data");
$form=$modal.find(".form");
var a=$modal.outerHeight()-$form.outerHeight();
if(a>10){$form.css({top:a/2})
}else{$form.css({top:0})
}}});
spaced_cli.modal.register(1,{on_init:function(){var b=this.$modal.attr("data-id");
var a=this.$modal.find(".form_field_submit").attr("data-modal-id");
b=parseInt(b.split("_")[0]);
this.form=spaced_cli.form.create({id:this.id,block:this.$modal,form:"div.form",form_done:b+"_"+a})
},on_open:function(){var a=this;
a.form_position();
$(window).off("resize.modal").on("resize.modal",function(){a.form_position()
})
},on_close:function(){$(window).off("resize.modal")
},form_position:function(){$modal=this.$modal.find(".modal-data");
$form=$modal.find(".form");
var a=$modal.outerHeight()-$form.outerHeight();
if(a>10&&window.innerWidth<=768){$form.css({top:a/2})
}else{$form.css({top:0})
}}});
spaced_cli.modal.register(2,{on_init:function(){var b=this.$modal.attr("data-id");
var a=this.$modal.find(".form_field_submit").attr("data-modal-id");
b=parseInt(b.split("_")[0]);
this.form=spaced_cli.form.create({id:this.id,block:this.$modal,form:"div.form",form_done:b+"_"+a})
},on_open:function(){var a=this;
a.form_position();
$(window).off("resize.modal").on("resize.modal",function(){a.form_position()
})
},on_close:function(){$(window).off("resize.modal")
},form_position:function(){$modal=this.$modal.find(".modal-data");
$form=$modal.find(".form");
var a=$modal.outerHeight()-$form.outerHeight();
if(a>10&&window.innerWidth<=768){$form.css({top:a/2})
}else{$form.css({top:0})
}}});
