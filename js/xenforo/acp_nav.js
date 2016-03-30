/*
 * XenForo acp_nav.min.js
 * Copyright 2010-2015 XenForo Ltd.
 * Released under the XenForo License Agreement: http://xenforo.com/license-agreement
 */
(function(a,g,i){XenForo.acpNavInit=function(){var b=a("#sideNav"),h=a("#body"),c=a("#tabsNav .acpTabs"),d=b.hasClass("active"),e=!1,f=XenForo.isRTL()?"right":"left",j=function(b){var a={};a[f]=b;return a},l=function(a){!e&&a!=d&&(e=!0,a?(b.addClass("active"),k(),b.css(f,-b.width()).animate(j(0),function(){b.css(f,"");d=!0;e=!1})):b.animate(j(-b.width()),function(){b.css(f,"").removeClass("active");e=d=!1}))},k=function(){if(h.length){var n=b.css("height","").height(),c=Math.max(h.height(),a(g).height()-
h.offset().top);c&&n<c&&b.css("height",c)}};a(i).on("click",".AcpSidebarToggler",function(a){a.preventDefault();l(d?!1:!0)});a(i).on("click",".AcpSidebarCloser",function(a){a.preventDefault();l(!1)});a(g).resize(function(){d&&k()});var m=function(){if(c.length){var a=c[0];c.removeClass("withNoLinks");a.scrollHeight>=c.height()*1.1?(b.addClass("withSections"),c.addClass("withNoLinks")):b.removeClass("withSections")}};m();a(g).resize(function(){m()})};a(function(){XenForo.acpNavInit()})})(jQuery,this,
document);
