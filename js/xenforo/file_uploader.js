/*
 * XenForo file_uploader.min.js
 * Copyright 2010-2016 XenForo Ltd.
 * Released under the XenForo License Agreement: http://xenforo.com/license-agreement
 */
(function(i){XenForo.FileUploader=function(d){var o=XenForo.AttachmentUploader(d),b=i(d.data("result")),j=b.find(".Progress"),l=j.find(".Meter"),h=b.find(".Filename"),f=b.find(".Delete"),g=0,c,e,k=function(){d.css({overflow:"",height:"",width:"",position:""})},m=function(){d.css({overflow:"hidden",height:"1px",width:"1px",position:"relative"})},n=function(a){c=a.swfUpload;e=null;setTimeout(function(){if(!h.is(":visible")){var c="";a.ajaxData&&i.each(a.ajaxData.error,function(a,b){c+=b+"\n"});o.swfAlert(a.file,
a.errorCode,c);i("#"+a.file.id).xfRemove();b.hide();k()}},1E3);a.type=="AttachmentUploadError"&&g--};d.bind({AttachmentQueueValidation:function(a){c=a.swfUpload;g>1?(a.preventDefault(),a.swfUpload.cancelUpload(a.file.id,!1)):e=a.file.id},AttachmentQueued:function(a){c=a.swfUpload;g>1?a.swfUpload.cancelUpload(a.file.id,!1):(e=a.file.id,g++,console.log("Queued: %s (%d bytes)",a.file.name,a.file.size),m(),h.hide(),l.css("width",0),j.show(),b.fadeIn(XenForo.speed.fast))},AttachmentUploadProgress:function(a){c=
a.swfUpload;e=a.file.id;console.log("Uploaded %d/%d bytes.",a.bytes,a.file.size);a=Math.min(100,Math.ceil(a.bytes*100/a.file.size));l.css("width",a+"%")},AttachmentQueueError:n,AttachmentUploadError:n,AttachmentUploaded:function(a){c=a.swfUpload;e=null;var d=a.ajaxData.filename||a.file.name;console.info("Upload of %s completed!",d);m();b.show();j.hide();h.text(d);h.show();f.data("href",a.ajaxData.deleteUrl);a.file&&g--}});f.bind("click",function(a){a.preventDefault();console.log(a);f.data("href")?
XenForo.ajax(f.data("href"),{},function(){f.removeData("href");b.fadeOut(XenForo.speed.fast,function(){k()})}):(c&&e&&c.cancelUpload(e),b.fadeOut(XenForo.speed.fast,function(){k()}))})};typeof XenForo.AttachmentUploader=="function"&&XenForo.register(".FileUploader","XenForo.FileUploader")})(jQuery,this,document);
