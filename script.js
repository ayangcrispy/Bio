/**
 * Mengubah bentuk icon saat dihover
 */
const icons = document.querySelectorAll(".sosmed i");

icons?.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.classList.remove("ph");
    icon.classList.add("ph-fill");
  });

  icon.addEventListener("mouseleave", () => {
    icon.classList.remove("ph-fill");
    icon.classList.add("ph");
  });
});

/**
 * Saat klik icon copy
 */
const linkActions = document.querySelectorAll(".link-card .link-action");

linkActions.forEach((action) => {
  const url = action.parentElement.getAttribute("href");
  const toastElement = `<div class="toast">
                          <p>
                              ✅ Link berhasil disalin!
                          </p>
                        </div>`;

  action.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(url);
    document.querySelector(".toast-container").innerHTML = toastElement;
    const toastChild = document.querySelector(".toast-container .toast");
    setTimeout(() => {
      toastChild.classList.add("toast-gone");
    }, 300);
    setTimeout(() => {
      toastChild.remove();
    }, 3000);
  });
});

document.addEventListener("scroll", (e) => {
  document.querySelector(".bg-text").style.transform = `translateX(${
    window.scrollY / 2
  }px)`;
});















remPar("m", "0"); remPar("m", "1");/* Disable Default Cookie Consent */ cookieChoices = {};/* @shinsenter/defer.js */ !function(c,i,t){var f,o=/^data-(.+)/,u='IntersectionObserver',r=/p/.test(i.readyState),s=[],a=s.slice,d='lazied',n='load',e='pageshow',l='forEach',m='hasAttribute',h='shift';function p(e){i.head.appendChild(e)}function v(e,n){a.call(e.attributes)[l](n)}function y(e,n,t,o){return o=(o=n?i.getElementById(n):o)||i.createElement(e),n&&(o.id=n),t&&(o.onload=t),o}function b(e,n){return a.call((n||i).querySelectorAll(e))}function g(t,e){b('source',t)[l](g),v(t,function(e,n){(n=o.exec(e.name))&&(t[n[1]]=e.value)}),e&&(t.className+=' '+e),n in t&&t[n]()}function I(e){f(function(o){o=b(e||'[type=deferjs]'),function e(n,t){(n=o[h]())&&(n.parentNode.removeChild(n),(t=y(n.nodeName)).text=n.text,v(n,function(e){'type'!=e.name&&(t[e.name]=e.value)}),t.src&&!t[m]('async')?(t.onload=t.onerror=e,p(t)):(p(t),e()))}()})}(f=function(e,n){r?t(e,n):s.push(e,n)}).all=I,f.js=function(n,t,e,o){f(function(e){(e=y('SCRIPT',t,o)).src=n,p(e)},e)},f.css=function(n,t,e,o){f(function(e){(e=y('LINK',t,o)).rel='stylesheet',e.href=n,p(e)},e)},f.dom=function(e,n,t,o,i){function r(e){o&&!1===o(e)||g(e,t)}f(function(t){t=u in c&&new c[u](function(e){e[l](function(e,n){e.isIntersecting&&(n=e.target)&&(t.unobserve(n),r(n))})},i),b(e||'[data-src]')[l](function(e){e[m](d)||(e.setAttribute(d,''),t?t.observe(e):r(e))})},n)},f.reveal=g,c.Defer=f,c.addEventListener('on'+e in c?e:n,function(){for(I();s[0];t(s[h](),s[h]()))r=1})}(this,document,setTimeout),function(e,n){e.defer=n=e.Defer,e.deferscript=n.js,e.deferstyle=n.css,e.deferimg=e.deferiframe=n.dom}(this);/* Adsense Functions *//* Push Ads */ function pushAds(){for(let a,b=qSell("ins.adsbygoogle"),c=0;c<b.length;c++)a=b[c],a&&null==a.getAttribute("data-ad-pushed")&&!a.classList.contains("adsbygoogle-noablate")&&((adsbygoogle=window.adsbygoogle||[]).push({}),a.setAttribute("data-ad-pushed","true"))};/* Insert After */ function insertAfter(e,n){var t;null!=e&&null!=n&&((t=n.parentNode).lastChild==n?t.appendChild(e):t.insertBefore(e,n.nextSibling))};/* Middle Ads */ function middleAds(e,n){for(var t=0;t<n.length;t++){var l=document.getElementById("postBody"),d=document.getElementById(n[t][0]),l=l.getElementsByTagName(e);0<l.length?insertAfter(d,l[n[t][1]]):null!=d&&(d.remove())}};/* Recurring Ads */ function recurAds(e,n){var t=document.getElementById("postBody"),l=n.ads?document.getElementById(n.ads):null,d=t.getElementsByTagName(e);if(0<d.length&&null!=l)for(var r,i=0;i<d.length;i++)i%n.every==0&&0!==i&&((r=document.createElement("div")).classList.add("recAd"),r.innerHTML=l?l.innerHTML:n.html||"",insertAfter(r,d[i])),i==d.length-1&&null!=l&&(l.remove());else null!=l&&(l.remove())}; 
  
shortcut={all_shortcuts:{},add:function(a,b,c){var d={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(c)for(var e in d)"undefined"==typeof c[e]&&(c[e]=d[e]);else c=d;d=c.target,"string"==typeof c.target&&(d=document.getElementById(c.target)),a=a.toLowerCase(),e=function(d){d=d||window.event;if(c.disable_in_input){var e;d.target?e=d.target:d.srcElement&&(e=d.srcElement),3==e.nodeType&&(e=e.parentNode);if("INPUT"==e.tagName||"TEXTAREA"==e.tagName)return}d.keyCode?code=d.keyCode:d.which&&(code=d.which),e=String.fromCharCode(code).toLowerCase(),188==code&&(e=","),190==code&&(e=".");var f=a.split("+"),g=0,h={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},i={esc:27,escape:27,tab:9,space:32,"return":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"break":19,insert:45,home:36,"delete":46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},j=!1,l=!1,m=!1,n=!1,o=!1,p=!1,q=!1,r=!1;d.ctrlKey&&(n=!0),d.shiftKey&&(l=!0),d.altKey&&(p=!0),d.metaKey&&(r=!0);for(var s=0;k=f[s],s<f.length;s++)"ctrl"==k||"control"==k?(g++,m=!0):"shift"==k?(g++,j=!0):"alt"==k?(g++,o=!0):"meta"==k?(g++,q=!0):1<k.length?i[k]==code&&g++:c.keycode?c.keycode==code&&g++:e==k?g++:h[e]&&d.shiftKey&&(e=h[e],e==k&&g++);if(g==f.length&&n==m&&l==j&&p==o&&r==q&&(b(d),!c.propagate))return d.cancelBubble=!0,d.returnValue=!1,d.stopPropagation&&(d.stopPropagation(),d.preventDefault()),!1},this.all_shortcuts[a]={callback:e,target:d,event:c.type},d.addEventListener?d.addEventListener(c.type,e,!1):d.attachEvent?d.attachEvent("on"+c.type,e):d["on"+c.type]=e},remove:function(a){var a=a.toLowerCase(),b=this.all_shortcuts[a];delete this.all_shortcuts[a];if(b){var a=b.event,c=b.target,b=b.callback;c.detachEvent?c.detachEvent("on"+a,b):c.removeEventListener?c.removeEventListener(a,b,!1):c["on"+a]=!1}}},shortcut.add("Ctrl+U",function(){top.location.href="/p/error.html"}),shortcut.add("F12",function(){top.location.href="/p/error.html"}),shortcut.add("Ctrl+Shift+I",function(){top.location.href="/p/error.html"}),shortcut.add("Ctrl+S",function(){top.location.href="/p/error.html"}),shortcut.add("Ctrl+Shift+C",function(){top.location.href="/p/error.html"});






var message="NoRightClicking"; function defeatIE() {if (document.all) {(message);return false;}} function defeatNS(e) {if (document.layers||(document.getElementById&&!document.all)) { if (e.which==2||e.which==3) {(message);return false;}}} if (document.layers) {document.captureEvents(Event.MOUSEDOWN);document.onmousedown=defeatNS;} else{document.onmouseup=defeatNS;document.oncontextmenu=defeatIE;} document.oncontextmenu=new Function("return false")




/*<![CDATA[*//* Remove ?m=0, ?m=1 - some features may not work */ remPar("m", "0"); remPar("m", "1");/* Disable Default Cookie Consent */ cookieChoices = {};/* @shinsenter/defer.js */ !function(c,i,t){var f,o=/^data-(.+)/,u='IntersectionObserver',r=/p/.test(i.readyState),s=[],a=s.slice,d='lazied',n='load',e='pageshow',l='forEach',m='hasAttribute',h='shift';function p(e){i.head.appendChild(e)}function v(e,n){a.call(e.attributes)[l](n)}function y(e,n,t,o){return o=(o=n?i.getElementById(n):o)||i.createElement(e),n&&(o.id=n),t&&(o.onload=t),o}function b(e,n){return a.call((n||i).querySelectorAll(e))}function g(t,e){b('source',t)[l](g),v(t,function(e,n){(n=o.exec(e.name))&&(t[n[1]]=e.value)}),e&&(t.className+=' '+e),n in t&&t[n]()}function I(e){f(function(o){o=b(e||'[type=deferjs]'),function e(n,t){(n=o[h]())&&(n.parentNode.removeChild(n),(t=y(n.nodeName)).text=n.text,v(n,function(e){'type'!=e.name&&(t[e.name]=e.value)}),t.src&&!t[m]('async')?(t.onload=t.onerror=e,p(t)):(p(t),e()))}()})}(f=function(e,n){r?t(e,n):s.push(e,n)}).all=I,f.js=function(n,t,e,o){f(function(e){(e=y('SCRIPT',t,o)).src=n,p(e)},e)},f.css=function(n,t,e,o){f(function(e){(e=y('LINK',t,o)).rel='stylesheet',e.href=n,p(e)},e)},f.dom=function(e,n,t,o,i){function r(e){o&&!1===o(e)||g(e,t)}f(function(t){t=u in c&&new c[u](function(e){e[l](function(e,n){e.isIntersecting&&(n=e.target)&&(t.unobserve(n),r(n))})},i),b(e||'[data-src]')[l](function(e){e[m](d)||(e.setAttribute(d,''),t?t.observe(e):r(e))})},n)},f.reveal=g,c.Defer=f,c.addEventListener('on'+e in c?e:n,function(){for(I();s[0];t(s[h](),s[h]()))r=1})}(this,document,setTimeout),function(e,n){e.defer=n=e.Defer,e.deferscript=n.js,e.deferstyle=n.css,e.deferimg=e.deferiframe=n.dom}(this);/* Adsense Functions *//* Push Ads */ function pushAds(){for(let a,b=qSell("ins.adsbygoogle"),c=0;c<b.length;c++)a=b[c],a&&null==a.getAttribute("data-ad-pushed")&&!a.classList.contains("adsbygoogle-noablate")&&((adsbygoogle=window.adsbygoogle||[]).push({}),a.setAttribute("data-ad-pushed","true"))};/* Insert After */ function insertAfter(e,n){var t;null!=e&&null!=n&&((t=n.parentNode).lastChild==n?t.appendChild(e):t.insertBefore(e,n.nextSibling))};/* Middle Ads */ function middleAds(e,n){for(var t=0;t<n.length;t++){var l=document.getElementById("postBody"),d=document.getElementById(n[t][0]),l=l.getElementsByTagName(e);0<l.length?insertAfter(d,l[n[t][1]]):null!=d&&(d.remove())}};/* Recurring Ads */ function recurAds(e,n){var t=document.getElementById("postBody"),l=n.ads?document.getElementById(n.ads):null,d=t.getElementsByTagName(e);if(0<d.length&&null!=l)for(var r,i=0;i<d.length;i++)i%n.every==0&&0!==i&&((r=document.createElement("div")).classList.add("recAd"),r.innerHTML=l?l.innerHTML:n.html||"",insertAfter(r,d[i])),i==d.length-1&&null!=l&&(l.remove());else null!=l&&(l.remove())}; /*]]>*/
  

//<![CDATA[
shortcut={all_shortcuts:{},add:function(a,b,c){var d={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(c)for(var e in d)"undefined"==typeof c[e]&&(c[e]=d[e]);else c=d;d=c.target,"string"==typeof c.target&&(d=document.getElementById(c.target)),a=a.toLowerCase(),e=function(d){d=d||window.event;if(c.disable_in_input){var e;d.target?e=d.target:d.srcElement&&(e=d.srcElement),3==e.nodeType&&(e=e.parentNode);if("INPUT"==e.tagName||"TEXTAREA"==e.tagName)return}d.keyCode?code=d.keyCode:d.which&&(code=d.which),e=String.fromCharCode(code).toLowerCase(),188==code&&(e=","),190==code&&(e=".");var f=a.split("+"),g=0,h={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},i={esc:27,escape:27,tab:9,space:32,"return":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"break":19,insert:45,home:36,"delete":46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},j=!1,l=!1,m=!1,n=!1,o=!1,p=!1,q=!1,r=!1;d.ctrlKey&&(n=!0),d.shiftKey&&(l=!0),d.altKey&&(p=!0),d.metaKey&&(r=!0);for(var s=0;k=f[s],s<f.length;s++)"ctrl"==k||"control"==k?(g++,m=!0):"shift"==k?(g++,j=!0):"alt"==k?(g++,o=!0):"meta"==k?(g++,q=!0):1<k.length?i[k]==code&&g++:c.keycode?c.keycode==code&&g++:e==k?g++:h[e]&&d.shiftKey&&(e=h[e],e==k&&g++);if(g==f.length&&n==m&&l==j&&p==o&&r==q&&(b(d),!c.propagate))return d.cancelBubble=!0,d.returnValue=!1,d.stopPropagation&&(d.stopPropagation(),d.preventDefault()),!1},this.all_shortcuts[a]={callback:e,target:d,event:c.type},d.addEventListener?d.addEventListener(c.type,e,!1):d.attachEvent?d.attachEvent("on"+c.type,e):d["on"+c.type]=e},remove:function(a){var a=a.toLowerCase(),b=this.all_shortcuts[a];delete this.all_shortcuts[a];if(b){var a=b.event,c=b.target,b=b.callback;c.detachEvent?c.detachEvent("on"+a,b):c.removeEventListener?c.removeEventListener(a,b,!1):c["on"+a]=!1}}},shortcut.add("Ctrl+U",function(){top.location.href="/p/error.html"}),shortcut.add("F12",function(){top.location.href="/p/error.html"}),shortcut.add("Ctrl+Shift+I",function(){top.location.href="/p/error.html"}),shortcut.add("Ctrl+S",function(){top.location.href="/p/error.html"}),shortcut.add("Ctrl+Shift+C",function(){top.location.href="/p/error.html"});
//]]>

  // Disable right-click context menu
  document.addEventListener(&#39;contextmenu&#39;, function(e) {
    e.preventDefault();
  }, false);

  // Disable keyboard shortcuts for copying (Ctrl+C, Command+C)
  document.addEventListener(&#39;keydown&#39;, function(e) {
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case &#39;c&#39;: // Copy
        case &#39;x&#39;: // Cut
        case &#39;s&#39;: // Save
        case &#39;u&#39;: // View source
          e.preventDefault();
          break;
      }
    }
  }, false);

  



//<![CDATA[
var message="NoRightClicking"; function defeatIE() {if (document.all) {(message);return false;}} function defeatNS(e) {if (document.layers||(document.getElementById&&!document.all)) { if (e.which==2||e.which==3) {(message);return false;}}} if (document.layers) {document.captureEvents(Event.MOUSEDOWN);document.onmousedown=defeatNS;} else{document.onmouseup=defeatNS;document.oncontextmenu=defeatIE;} document.oncontextmenu=new Function("return false")
//]]>
