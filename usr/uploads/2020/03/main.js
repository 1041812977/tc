/*导航图标颜色*/
/* 彩色标签云*/
function colorTags(){
    var tags = document.querySelectorAll("#tag_cloud-2 a");
    tags.forEach(tag => {
        tagsColor = TagscolorArr[Math.floor(Math.random() * TagscolorArr.length)];
        tag.style.backgroundColor = tagsColor;
    });
}colorTags();

/* 左侧导航字体图标美化*/
function colorNav(){
	var leftHeader = document.querySelectorAll("span.nav-icon>svg,span.nav-icon>i");
	leftHeader.forEach(tag => {
	    tagsColor = NavColorArr[Math.floor(Math.random() * NavColorArr.length)];
	    tag.style.color = tagsColor;
	});
}colorNav();

/*cookie设置*/
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
         }
         if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
         }
     }
    return "";
};

/*点击出现爱心开始*/
(function(window,document,undefined){
var hearts = [];
window.requestAnimationFrame = (function(){
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback){
    setTimeout(callback,1000/60);
  }
})();
init();
function init(){
  css(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}");
  attachEvent();
  gameloop();
}
function gameloop(){
  for(var i=0;i<hearts.length;i++){
    if(hearts[i].alpha <=0){
      document.body.removeChild(hearts[i].el);
      hearts.splice(i,1);
      continue;
    }
    hearts[i].y--;
    hearts[i].scale += 0.004;
    hearts[i].alpha -= 0.013;
    hearts[i].el.style.cssText = "left:"+hearts[i].x+"px;top:"+hearts[i].y+"px;opacity:"+hearts[i].alpha+";transform:scale("+hearts[i].scale+","+hearts[i].scale+") rotate(45deg);background:"+hearts[i].color;
  }
  requestAnimationFrame(gameloop);
}
function attachEvent(){
  var old = typeof window.onclick==="function" && window.onclick;
  window.onclick = function(event){
    old && old();
    createHeart(event);
  }
}
function createHeart(event){
  var d = document.createElement("div");
  d.className = "heart";
  hearts.push({
    el : d,
    x : event.clientX - 5,
    y : event.clientY - 5,
    scale : 1,
    alpha : 1,
    color : randomColor()
  });
  document.body.appendChild(d);
}
function css(css){
  var style = document.createElement("style");
  style.type="text/css";
  try{
    style.appendChild(document.createTextNode(css));
  }catch(ex){
    style.styleSheet.cssText = css;
  }
  document.getElementsByTagName('head')[0].appendChild(style);
}
function randomColor(){
  return "rgb("+(~~(Math.random()*255))+","+(~~(Math.random()*255))+","+(~~(Math.random()*255))+")";
}})(window,document);
/*点击出现爱心结束*/

/*图片预览自定义代码开始*/
$("body").on("click", ".imgSee", function (e) {
    layer.photos({
        photos: {
            "data": [{
                "src": e.target.src,
            }]  
        }
    });
});
/*图片预览自定义代码结束*/

/*图片预览函数开始*/
function imgView(url){
    layer.photos({
        photos: {
            "data": [{
                "src": url,
            }]
        }
    });
}
/*图片预览函数结束*/

/*复制提醒代码开始*/
document.body.oncopy = function() {
    swal({
      title: "复制成功",
      text: "转载请务必保留原文链接!",
      icon: "success",
      button: false,
      timer: 3000,
    });
};
/*复制提醒代码结束*/

/*离开修改标题代码开始*/
var OriginTitile =document.title;
var titleTime;
document.addEventListener('visibilitychange',function() {
    if (document.hidden) {
        document.title = '(๑＞ڡ＜)☆我藏好了哦~';
        clearTimeout(titleTime);
    }else {
        document.title = '٩(๑>◡<๑)۶ 被你发现啦~';
        titleTime = setTimeout(function() {
            document.title =OriginTitile;
        },2000);
    }
});
/*离开修改标题代码结束*/

/*评论打卡*/
function addNumber(a) {
    var length = document.getElementById("comment").value.length;
	document.getElementById("comment").value = "";
	document.getElementById("comment").focus();
    document.getElementById("comment").value += a + new Date;
}
/*评论打卡*/

/*赞踩*/
function addzc(a) {
    var length = document.getElementById("comment").value.length;
	document.getElementById("comment").value = "";
	document.getElementById("comment").focus();
    document.getElementById("comment").value += a + new Date;
}
/*赞踩*/

/*nul计算*/
$(function(){
    var links_num = $("#links_num").children("li").length;
    $("#lniks_num_data").html(links_num-1);
});

/*复制代码*/
function copy(obj){
    $(obj).addClass('tada animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass('tada animated');
    });
    var comment = $(obj).parent().parent().parent().find('#comment').text();
    var oInput = document.createElement('input');
    oInput.value = comment;
    document.body.appendChild(oInput);
    oInput.select();
    document.execCommand("Copy");
    oInput.className = 'oInput';
    oInput.style.display = 'none';
}

/*页面加载代码*/
var pages_shuoshuo;
var pages_HotComment;
var pages_autograph;
var pages_Love;
var pages_Name;
var pages_Word;
