<script>
            //<![CDATA[	
            // related post js http://www.dte.web.id
                var msRelatedPosts,msRandomIndex;!function(){"use strict";var v={postUrl:"https://linkmagz.sugeng.id",homePageUrl:"https://linkmagz.sugeng.id",relatedTitleOuterOpen:'<div class="related-title"><p class="ms-title ">',relatedTitleOuterClose:"</p></div>",relatedTitleText:"Artikel Terkait",thumbWidth:192,thumbHeight:108,imgBlank:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAD6AAAA+gBtXtSawAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAYSURBVCiRY0xISOBgoAAwUaJ51IBhYwAAuQABOsYCprwAAAAASUVORK5CYII=",relatedOuter:"ms-related-post"};for(var e in relatedConfig)"undefined"!=relatedConfig[e]&&(v[e]=relatedConfig[e]);var B={relatedPosts:!0,jumlahRelatedPosts:4,relatedPostsThumb:!0,judulRelatedPosts:v.relatedTitleText,relatedPostsNoThumbImg:"https://1.bp.blogspot.com/-sLMytth04W8/XtoBMx9lUjI/AAAAAAAAHmM/zK-toM5XTacePvBHnpIO_tfzjg63BD3ZgCK4BGAsYHg/w192-h108-n-k-no-nu/nomage%2B%25281%2529.png"};optionLinkMagz(B);function r(e){var t=document.createElement("script");t.src=e,document.getElementsByTagName("head")[0].appendChild(t)}function P(e){var t,l,a=e.length;if(0===a)return!1;for(;--a;)t=Math.floor(Math.random()*(a+1)),l=e[a],e[a]=e[t],e[t]=l;return e}if("object"==typeof postLabels&&0<postLabels.length)var d="/-/"+P(postLabels)[0];else d="";msRelatedPosts=function(e){var t,l,a,s,r,d,n,i,o,m=v.relatedTitleOuterOpen+B.judulRelatedPosts+v.relatedTitleOuterClose,A=document.getElementById(v.relatedOuter),h=P(e.feed.entry);m+=1==B.relatedPostsThumb?'<ul class="ms-related-hasthumb">':'<ul class="ms-related-nothumb">';for(var u=0;u<h.length;u++)for(var g=0,c=h[u].link.length;g<c;g++)h[u].link[g].href==v.postUrl&&h.splice(u,1);if(0<h.length){for(var f=0;f<B.jumlahRelatedPosts&&f<h.length;f++){l=h[f].title.$t,void 0!==h[f].content&&(r=(s=h[f].content.$t).indexOf("<img",0));var p=function(e){a=e.replace(/.*?:\/\//g,"//").replace(/(\/s[0-9]+(\-c)?|\/w[0-9]+(\-h)[0-9]+()?|\/d)+(\/)/,"/w"+v.thumbWidth+"-h"+v.thumbHeight+"-c/")};"media$thumbnail"in h[f]?p(h[f].media$thumbnail.url):void 0!==r&&-1!==r?(d=s.indexOf("/>",r),i=(n=s.slice(r,d)).indexOf("src=",0)+5,o=n.indexOf('"',i),p(n.slice(i,o))):a=B.relatedPostsNoThumbImg;var b=0;for(c=h[f].link.length;b<c;b++)t="alternate"==h[f].link[b].rel?h[f].link[b].href:"#";m+='<li><a title="'+l+'" href="'+t+'">'+(1==B.relatedPostsThumb?'<div class="related-thumb-outer"><img alt="'+l+'" class="lazyload related-thumb" src="'+v.imgBlank+'" data-src="'+a+'" width="'+v.thumbWidth+'" height="'+v.thumbHeight+'"></div>':"")+('<div class="related-title-outer">'+l+"</div>")+"</a></li>"}1==B.relatedPosts&&(A.innerHTML=m+="</ul>")}},msRandomIndex=function(e){var t,l=B.jumlahRelatedPosts+1,a=e.feed.openSearch$totalResults.$t-l,s=(t=0<a?a:1,Math.floor(Math.random()*(t-1+1))+1);r(v.homePageUrl.replace(/\/$/,"")+"/feeds/posts/default"+d+"?alt=json-in-script&orderby=updated&start-index="+s+"&max-results="+l+"&callback=msRelatedPosts")},r(v.homePageUrl.replace(/\/$/,"")+"/feeds/posts/summary"+d+"?alt=json-in-script&orderby=updated&max-results=0&callback=msRandomIndex")}();
                "use strict";function fullwidthImg(){var t=document.querySelector(".post-body"),l=t.querySelector("img"),i=t.querySelector(".tr-caption-container");l&&l.classList.add("fullwidth"),i&&i.classList.add("fullwidth")}!function(){var t={fullwidthImage:!0};optionLinkMagz(t),1==t.fullwidthImage&&fullwidthImg()}();
            //]]>		  
        </script>
