(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["46683"],{970414:function(e,t,n){function i(e,t,n){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:i+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>o});let a=new class{constructor(){i(this,"onResumeListeners",[]),i(this,"onPauseListeners",[]),i(this,"inExp",!1),i(this,"windowInFocus",!0)}setExperiment(e=!1){this.inExp=e}onSessionResume(e){return this.onResumeListeners.push(e),this}onSessionPause(e){return this.onPauseListeners.push(e),this}removeResumeListener(e){this.onResumeListeners.filter(t=>t!==e)}removePauseListener(e){this.onPauseListeners=this.onPauseListeners.filter(t=>t!==e)}getAppState(){return this.windowInFocus?0:void 0}},r=e=>{if(e.isHidden){let{reason:t}=e;a.windowInFocus=!1,a.onPauseListeners.forEach(e=>e(t))}else a.windowInFocus=!0,a.onResumeListeners.forEach(e=>e())};setTimeout(()=>{window.addEventListener("beforeunload",()=>r({isHidden:!0,reason:"beforeunload"})),window.addEventListener("focus",()=>r({isHidden:!1})),window.addEventListener("blur",()=>r({isHidden:!0,reason:"blur"})),window.addEventListener("pageshow",()=>r({isHidden:!1})),window.addEventListener("pagehide",()=>r({isHidden:!0,reason:"pagehide"})),void 0!==document.hidden?document.addEventListener("visibilitychange",()=>r(document.hidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1}),!1):void 0!==document.webkitHidden&&document.addEventListener("webkitvisibilitychange",()=>r(document.webkitHidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1}),!1)},0);let o=a},87980:function(e,t,n){n.d(t,{F9:()=>m,LM:()=>d,VZ:()=>r,cQ:()=>p,rZ:()=>o});var i=n(397345),a=n(705460);let r=()=>"number"==typeof window.innerHeight&&"number"==typeof window.pageYOffset&&!!document.querySelector&&!!document.querySelectorAll,o=e=>e instanceof HTMLDivElement||e instanceof HTMLVideoElement?e.getBoundingClientRect():e.parentElement instanceof HTMLElement?e.parentElement.getBoundingClientRect():null,s=({top:e,height:t},{foldY:n,pageYOffset:i})=>{let a=e+i;if(a>=n)return!1;let r=Math.min(t,n-a);return r>.5*t||r>.2*n},l=e=>{if(e instanceof HTMLImageElement)return e.src;if(e instanceof HTMLVideoElement)return e.attributes.poster.value;let t=((e.style||{}).backgroundImage||"").match(/^url\(["'](.*)["']\)$/);return t&&t[1]||null},d=()=>document.querySelector?document.querySelectorAll(i.wc).length:((0,a.H)("missing_document_query_selector"),0),u=()=>{if(!document.querySelector)return(0,a.H)("missing_document_query_selector"),null;let e=document.querySelectorAll(i.wc);return e[e.length-1]||null},c=(e,t)=>{let n=o(e);if(!n)return(0,a.H)("missing_client_rect"),!1;if(n.width<70&&n.height<70){if(e instanceof HTMLImageElement)return!1;let t=l(e);if(t?.endsWith("svg"))return!1}return s(n,t)},m=()=>{let e=u();if(!e)return!1;let t=window.innerHeight||0,n=window.pageYOffset||0;return e.getBoundingClientRect().top+n>=t},p=(e,t,n)=>{if(!document.querySelector)return(0,a.H)("missing_document_query_selector"),[];let r={foldY:window.innerHeight||0,pageYOffset:window.pageYOffset||0},o=[i.Wf,...e?[i.fF]:[],...t?[i.$N]:[]].join(","),s=[...document.querySelectorAll(o)];if(n){let e=[...document.querySelectorAll('div[data-test-id="board-section"]')],t=e=>{let n=[...e.children];!n.length&&e.style.backgroundImage?s.push(e):n.length&&n.forEach(e=>{t(e)})};e.forEach(e=>{t(e)})}return s.reduce((e,n)=>{if((n instanceof HTMLImageElement||n instanceof HTMLDivElement||n instanceof HTMLVideoElement&&t)&&c(n,r)){let t=l(n);if(t){let i=(t||"").replace(/.*\//,"");return e.concat([{element:n,fileName:i}])}}return e},[])}},397345:function(e,t,n){n.d(t,{$N:()=>l,Kb:()=>i,Wf:()=>o,fF:()=>s,wc:()=>r});let i="pwt-grid-item",a=['div[data-grid-item="true"]',"div.Grid__Item",`div[data-test-id="${i}"]`],r=a.join(","),o=a.map(e=>`${e} img`).join(","),s=a.map(e=>`${e} div[style*=background-image]`).join(","),l=a.map(e=>`${e} video`).join(",")},28692:function(e,t,n){n.d(t,{Z:()=>T,v:()=>_});var i=n(667294),a=n(613567),r=n(687412),o=n(774303),s=n(87980),l=n(705460),d=n(426035),u=n(830031),c=n(591048),m=n(417394),p=n(279794),g=n(767415);let f=(0,o.XV)("GridProfiler"),_=()=>!!window.addEventListener&&!!window.removeEventListener&&(0,s.VZ)(),v=e=>"LAYOUT"===e.status&&500||"TIMING"===e.status&&100||null,h=(e,t)=>{if(!t){let t=(0,s.LM)();if(t===e)return f("No new items, so skip the viewport-fill check."),{complete:!1,numOfItemsChecked:e};if(!(0,s.F9)())return f("Viewport may not be filled yet."),{complete:!1,numOfItemsChecked:t}}return{complete:!0}},E=(e,t)=>{let n=0,i=0,a=0,r=0,o=0;return e=e.filter(e=>"pin"===e.type),t.forEach((t,s)=>{let l;let d=t.fileName.split(".")[0];l=e[s],d!==l?.image_signature&&(l=e.find(e=>d===e?.image_signature)),void 0===l?o+=1:l.is_promoted||l.recommendation_reason?.reason==="PROMOTED_PIN"||l?.promoter?.length?a+=1:null!==l.story_pin_data_id&&void 0!==l.story_pin_data_id?n+=1:l?.videos?.video_list?i+=1:r+=1}),{storyPinCount:n,videoCount:i,adCount:a,imageCount:r,unknownCount:o}},w=(e,t)=>{let n=()=>{window.removeEventListener(e,n),t()};return window.addEventListener(e,n),()=>window.removeEventListener(e,n)};function T({isAtEndOfFeed:e,pinData:t,includeBackgroundImages:n,includeVideos:_=!1,includeSections:T,isPlaceholderGrid:y,stopwatchSetVisuallyCompleteResult:L,stopwatchContext:N,isAuth:I}){let P=(0,u.E)(),A=P?.getId(),R=P?.setVisuallyCompleteResult,b=({imageTimings:e})=>{L&&L(),R&&R({imageTimings:e}),(0,m.cB)(e)},[C,S]=(0,i.useState)({status:"DISABLED"}),O=(0,a.F)();(0,i.useEffect)(()=>{R||L?S({status:"LAYOUT",failedCount:0,numOfItemsChecked:0}):S({status:"DISABLED"})},[A,R,L]),(0,i.useEffect)(()=>{if(f("new status",C),"LAYOUT"===C.status){let e=w("scroll",()=>{(0,d.ZP)("scrollDuringLayout")});return()=>{e()}}return()=>{}},[C.status]),(0,p.Z)(()=>{if(!R&&!P&&!L&&!N)return;let i="",a="",d=()=>{},u=e=>{P?P.abort(e):N?.abort()};if(P){let{getMetricId:e}=P,t=e();a=t.surface,i=(0,r.KJ)(t),d=P.addBinaryAnnotation}else a="stopwatch",i=`${a}_${N?.name}`,N?.addBinaryAnnotation&&(d=N?.addBinaryAnnotation);let p=(0,s.cQ)(n,_,T);if(y&&!p.length){f("bypassing PWT run due to skeleton pin grid");return}switch(C.status){case"LAYOUT":{let t=h(C.numOfItemsChecked,e);t.complete?S({status:"TIMING",failedCount:0,pinElements:p}):500*C.failedCount>6e4?((0,l.A9)(`images.${i}.visuallyComplete.maxLayoutAttempt`),u("visuallyComplete_layoutTimeout"),(0,m.JG)("visuallyComplete_layoutTimeout"),S({status:"DISABLED"})):S({...C,failedCount:C.failedCount+1,numOfItemsChecked:t.numOfItemsChecked});break}case"TIMING":{let e=(0,c.Cg)(),n=C.pinElements.length,r=[],s=0,p=0,_=0,v=1/0,h=0;if(C.pinElements.forEach(({element:t,fileName:n})=>{let i=e.find(e=>e.name.endsWith(n));i?i.responseEnd?(r.push(i),(0,o.v5)(t,"green"),"search"===a&&(v=Math.min(v,i.requestStart),h=Math.max(h,i.responseEnd))):(_+=1,(0,o.v5)(t,"blue")):t instanceof HTMLImageElement&&t.complete?(p+=1,(0,o.v5)(t,"red")):(s+=1,(0,o.v5)(t,"greenyellow"))}),s||_)100*C.failedCount>6e4?((0,l.A9)(`images.${i}.visuallyComplete.maxAttempt`,{tags:{totalImageCount:n,incompleteCount:s,noTimingCount:p,noTimingResponseEndCount:_}}),u("visuallyComplete_timingTimeout"),(0,m.JG)("visuallyComplete_timingTimeout"),S({status:"DISABLED"})):S({...C,failedCount:C.failedCount+1});else{if(f(`All ${r.length} images are fetched`),t&&t.length){let e=E(t,C.pinElements);if(Object.entries(e).forEach(([e,t])=>{d(e,t,"I16"),(0,m.XJ)(e,t,"I16")}),(0,l.A9)(`${i}.pinTypes`,{tags:e}),"search"===a){let e=h-v;t[0].display_options?.num_columns_requested===0?(0,g.LY)("full_width_story_image_fetch_time_true",e,{sampleRate:1}):(0,g.LY)("full_width_story_image_fetch_time_false",e,{sampleRate:.05})}}if(I&&"search"===a){let{group:e}=O.checkExperiment("dweb_grid_loading_state");e&&(0,g.S0)("webapp.gridVisuallyComplete.loadingState",n,{sampleRate:1,tags:{group:e}})}b({imageTimings:r}),S({status:"DISABLED"}),(0,l.A9)(`images.${i}.visuallyComplete.complete`,{tags:{totalImageCount:n,noTimingCount:p}})}}}},v(C))}},197298:function(e,t,n){n.d(t,{N:()=>L,W:()=>y});var i=n(426035),a=n(449896),r=n(192496),o=n(780764),s=n(827039);let l=({constraintMap:e,initialNavTiming:t,annotations:n})=>({...n,...(0,s.jh)("constraint_",e),...(0,s.jh)("mark_",(0,i.gQ)()),...(0,s.jh)("browser_",{...t?(0,s.D3)(t):{},...(0,s.rX)()})});var d=n(337751);let u=(e,t,n)=>[...e.map(e=>(0,d.Z)(e,n)).filter(Boolean),...t];var c=n(648447),m=n(120970),p=n(767415);let g=e=>e<=2500?"Good":e>2500&&e<=4e3?"Needs Improvement":"Poor",f=({eventPrefix:e,endTime:t,tags:n,resourceArr:i,resourceType:a="allResources"})=>{let r=i.length;if(r>0&&"object"==typeof i[0]&&!Array.isArray(i[0])){let o=[...i].sort((e,t)=>e.fetchStart-t.fetchStart),s=[...i].sort((e,t)=>e.responseEnd-t.responseEnd),l=1,d=t/5,u=0;for(;l<=5;){let t=0;for(;u<=r-1&&o[u].fetchStart<=d*l;)u+=1,t+=1;(0,p.S0)(`${e}.tags.${a}.fetchStartInterval${l}of5`,t,{sampleRate:.2,tags:n}),(0,p.S0)(`${e}.${a}.fetchStartInterval${l}of5`,t,{sampleRate:.2}),l+=1}let c={zeroPercentInFlight:o[0].fetchStart,twentyFivePercentInFlight:o[Math.floor(r/4)].fetchStart,fiftyPercentInFlight:o[2*Math.floor(r/4)].fetchStart,seventyFivePercentInFlight:o[3*Math.floor(r/4)].fetchStart,hundredPercentInFlight:o[r-1].fetchStart,twentyFivePercentComplete:s[Math.floor(r/4)].responseEnd,fiftyPercentComplete:s[2*Math.floor(r/4)].responseEnd,seventyFivePercentComplete:s[3*Math.floor(r/4)].responseEnd,hundredPercentComplete:s[r-1].responseEnd};for(let t in c)c[t]&&((0,p.LY)(`${e}.tags.${a}.${t}`,c[t],{sampleRate:.2,tags:n}),(0,p.LY)(`${e}.${a}.${t}`,c[t],{sampleRate:.2}))}},_=({annotateExperiments:e,endTime:t,entries:n,metricId:i,pwtStaticContext:a})=>{let r=`${(0,m.Z)(a)}.${i.surface}`,o=[r];e&&[...new Set(e)].forEach(e=>{let t=a.getExperimentGroup(e)||"null";o.push(`${r}.${e}.${t}`)});let s={lcpTimingBucket:g((0,c.Bn)())||"unknown",isAuthenticated:a.isAuthenticated,navigationType:i.navigationType},l=Array.from(n.filter(e=>"number"==typeof e.encodedBodySize&&e.encodedBodySize>=1e4&&e.responseEnd<=t)),d=[],u=[],p=[],_=[],v=[];l.forEach(e=>{"img"===e.initiatorType?d.push(e):"css"===e.initiatorType?u.push(e):"script"===e.initiatorType?p.push(e):"xmlhttprequest"===e.initiatorType?_.push(e):"link"===e.initiatorType&&e.name.includes("i.pinimg.com")&&v.push(e)}),o.forEach(e=>{f({eventPrefix:e,endTime:t,tags:s,resourceArr:l}),f({eventPrefix:e,endTime:t,tags:s,resourceArr:d,resourceType:"image"}),f({eventPrefix:e,endTime:t,tags:s,resourceArr:u,resourceType:"css"}),f({eventPrefix:e,endTime:t,tags:s,resourceArr:p,resourceType:"scripts"}),f({eventPrefix:e,endTime:t,tags:s,resourceArr:_,resourceType:"xhr"}),f({eventPrefix:e,endTime:t,tags:s,resourceArr:v,resourceType:"preloadedImage"})})};var v=n(240083),h=n(591048);let E=({startTime:e,responseEnd:t},n)=>e>n.endTime||!!t&&t<n.startTime,w=({startTime:e,endTime:t},n)=>e>n.endTime||!!t&&t<n.startTime,T=({type:e,annotateExperiments:t,annotations:n,binaryAnnotations:s,constraintMap:d,endTime:c,imageTimings:m,isV4Logger:p,metricId:g,pwtStaticContext:f,startTime:T,traceId:y,spans:L})=>{let N;let I=(0,h.Cg)();"initial_app_load"===g.navigationType&&(N=(0,r.Z)());let P=m.map(({name:e})=>e),A=I.map(e=>(0,o.p)(e,P)).filter(({timing:e})=>!E(e,{startTime:T,endTime:c})),R=((0,i.E3)()||[]).map(e=>({name:e.name,id:(0,v.Z)(),parentId:y,startTime:e.startTime||T,endTime:e.endTime,annotationMap:{},binaryAnnotationMap:{}})).filter(e=>!w(e,{startTime:T,endTime:c}));return("board"===g.surface||"pin_closeup"===g.surface)&&_({annotateExperiments:t,endTime:c,entries:I,metricId:g,pwtStaticContext:f}),{traceId:y,startTime:T,endTime:c,spans:u(A,R,y).concat(L),annotationMap:l({constraintMap:d,initialNavTiming:N,annotations:n}),binaryAnnotationMap:(0,a.rA)({type:e,annotateExperiments:t,binaryAnnotations:s,entries:I,isV4Logger:p,metricId:g,performanceResources:A,pwtEndTime:c,pwtStaticContext:f})}},y=({annotateExperiments:e,annotations:t,binaryAnnotations:n,constraintMap:i,endTime:a,imageTimings:r,isV4Logger:o=!1,metricId:s,pwtStaticContext:l,startTime:d,traceId:u,spans:c})=>({type:"COMPLETE",...T({type:"COMPLETE",annotateExperiments:e,annotations:t,binaryAnnotations:n,constraintMap:i,endTime:a,imageTimings:r,isV4Logger:o,metricId:s,pwtStaticContext:l,startTime:d,traceId:u,spans:c})}),L=({reason:e,annotateExperiments:t,annotations:n,binaryAnnotations:i,constraintMap:a,endTime:r,imageTimings:o,isV4Logger:s=!1,metricId:l,pwtStaticContext:d,startTime:u,traceId:c,spans:m})=>({type:"ABORT",reason:e,...T({type:"ABORT",annotateExperiments:t,annotations:n,binaryAnnotations:i,constraintMap:a,endTime:r,imageTimings:o,isV4Logger:s,metricId:l,pwtStaticContext:d,startTime:u,traceId:c,spans:m})})},120970:function(e,t,n){n.d(t,{Z:()=>i});let i=e=>{let{deviceType:t,isBot:n,isSocialBot:i}=e;return`coreWebVitalsLite.v1.${i&&"socialBot"||n&&"bot"||"nonbot"}.${t}`}},712655:function(e,t,n){n.d(t,{Z:()=>o});var i=n(547314);let a=null;function r(e){(0,i.El)({eventName:`perf.not_supported.${e}`})}function o(){if(a)return a;try{if(!window.performance||!performance)return r("window_performance"),a=!1,!1;if(!window.PerformanceObserver||!PerformanceObserver)return r("window_PerformanceObserver"),a=!1,!1;if(!PerformanceObserver.supportedEntryTypes)return r("window_PerformanceObserver_supportedEntryTypes"),a=!1,!1;if(!PerformanceObserver.supportedEntryTypes.includes("mark"))return r("window_PerformanceObserver_supportedEntryTypes_mark"),a=!1,!1;a=["mark","measure","now","setResourceTimingBufferSize"].reduce((e,t)=>(window.performance[t]&&performance[t]||(r(`window_performance_${t}`),e=!1),e),!0)}catch(e){(0,i.jn)({errorName:e})}return a}},417394:function(e,t,n){let i,a,r;n.d(t,{Lg:()=>H,Ly:()=>C,cB:()=>$,JG:()=>D,ep:()=>M,l7:()=>O,ZP:()=>j,XJ:()=>S});var o=n(197298),s=n(774385),l=n(217472),d=n(970414),u=n(617120);let c=!1;function m(){if(!c){let e=window.innerHeight,t=window.innerWidth,n=()=>{let i=(0,u.b)(),a=Math.abs(window.innerHeight-e),r=window.innerHeight!==e,o=window.innerWidth!==t;if("phone"===i.deviceType&&(!o&&r&&a<=150||!r&&!o)||"desktop"===i.deviceType&&!r&&!o){window.removeEventListener("resize",n),c=!1;return}D("windowResized"),window.removeEventListener("resize",n),c=!1};window.addEventListener("resize",n),c=!0}}var p=n(712655),g=n(547314),f=n(178355);let _=[{handler:["www/pin/[id]/sent.js","www/pin/[id].js"],config:{mWeb:{unauth:{initialPageLoad:{name:"PIN_PAGE_INTERACTIVE",id:113,constraints:["NavigationCompletev4","PinPageMainImageRendered"]},clientNavigation:{name:"client_route_push_unauth_pin",id:null,constraints:["NavigationCompletev4","PinPageMainImageRendered"]}},auth:{initialPageLoad:{name:"initial_page_load_auth_pin",id:null,constraints:["NavigationCompletev4","PinPageMainImageRendered"],annotateExperiments:["auth_mweb_graphql_pin_page"]},clientNavigation:{name:"PIN_CLOSEUP_DETAILS",id:13,constraints:["NavigationCompletev4","PinPageMainImageRendered"],annotateExperiments:["auth_mweb_graphql_pin_page"]}}},dWeb:{unauth:{initialPageLoad:{name:"PIN_PAGE_INTERACTIVE",id:113,constraints:["NavigationCompletev4","PinPageMainImageRendered"]},clientNavigation:{name:"client_route_push_unauth_pin",id:null,constraints:["NavigationCompletev4","PinPageMainImageRendered"]}},auth:{initialPageLoad:{name:"initial_page_load_auth_pin",id:null,constraints:["NavigationCompletev4","image","resource","button"],segments:{product_detail_page:"PRODUCT_DETAILS_INTERACTIVE",product_detail_page_plus:"PRODUCT_DETAILS_PLUS_INTERACTIVE"}},clientNavigation:{name:"PIN_CLOSEUP_DETAILS",id:13,constraints:["NavigationCompletev4","button","video","description","shopButton","thumbnailsLoaded","image","resource"],segments:{story_pin:"STORY_PIN_CLOSEUP",product_detail_page:"PRODUCT_DETAILS_RENDER",product_detail_page_plus:"PRODUCT_DETAILS_PLUS_RENDER"}}}}}},{handler:["www/index.js","www/homefeed.js"],config:{unified:{auth:{initialPageLoad:{name:"HOME_FEED_PINTERACTIVE",id:19,constraints:["NavigationCompletev4","VisuallyComplete"]},clientNavigation:{name:"HOME_FEED_RENDER",id:2,constraints:["NavigationCompletev4","VisuallyComplete"]}}}}},{handler:"www/search/[scope].js",config:{unified:{auth:{clientNavigation:{name:"SEARCH_FEED_RENDER",id:3,constraints:["NavigationCompletev4","VisuallyComplete"]}}}}},{handler:"www/search.js",config:{mWeb:{auth:{clientNavigation:{name:"SEARCH_TAB_RENDER",id:25,constraints:["NavigationCompletev4","RenderSearchLandingPageBubbles"]}}}}},{handler:"www/[username]/[slug].js",config:{unified:{unauth:{initialPageLoad:{name:"BOARD_PAGE_INTERACTIVE",id:114,constraints:["NavigationCompletev4","VisuallyComplete"]}},auth:{initialPageLoad:{name:"BOARD_PAGE_INTERACTIVE",id:114,constraints:["NavigationCompletev4","VisuallyComplete"]}}},dWeb:{auth:{clientNavigation:{name:"client_route_push_auth_board",id:null,constraints:["NavigationCompletev4","VisuallyComplete"]}}}}},{handler:"www/ideas/[interest]/[id].js",config:{unified:{unauth:{initialPageLoad:{name:"TOPIC_PAGE_INTERACTIVE",id:119,constraints:["NavigationCompletev4","idea_module_loaded"]}}}}},{handler:"www/business/hub.js",config:{dWeb:{auth:{initialPageLoad:{name:"BIZHUB_PINTERACTIVE",id:607,constraints:["NavigationCompletev4"]},clientNavigation:{name:"BIZHUB_PAGE_RENDER",id:608,constraints:["NavigationCompletev4"]}}}}},{handler:"www/pin/[id]/visual-search.js",config:{dWeb:{auth:{clientNavigation:{name:"VISUAL_SEARCH_PAGE_RENDER",id:44,constraints:["NavigationCompletev4","VisuallyComplete","visualSearchMainPinImageRender"]}}}}},{handler:["www/[username].js","www/[username]/boards.js","www/[username]/created.js","www/[username]/saved.js","www/[username]/pins.js","www/[username]/profile.js"],config:{unified:{auth:{initialPageLoad:{name:"OTHER_PROFILE",id:15,constraints:["NavigationCompletev4","VisuallyComplete"],segments:{self_profile:"SELF_PROFILE_PAGE_LOAD"}},clientNavigation:{name:"OTHER_PROFILE",id:15,constraints:["NavigationCompletev4","VisuallyComplete"],segments:{self_profile:"SELF_PROFILE",own_profile:"OWN_PROFILE",own_profile_no_pins:"OWN_PROFILE_NO_PINS",other_profile_no_pins:"OTHER_PROFILE_NO_PINS"}}},unauth:{initialPageLoad:{name:"USER_PAGE_INTERACTIVE",id:115,constraints:["NavigationCompletev4","VisuallyComplete"]}}}}},{handler:"www/business/catalogs/[catalog_id]/data-sources.js",config:{dWeb:{auth:{clientNavigation:{name:"MERCHANT_CATALOGS_DATA_SOURCES_USER_NAV",id:228,constraints:["NavigationCompletev4"]}}}}},{handler:"www/business/catalogs/[catalog_id]/product-groups.js",config:{dWeb:{auth:{clientNavigation:{name:"MERCHANT_CATALOGS_PRODUCT_GROUPS_USER_NAV",id:229,constraints:["NavigationCompletev4"]}}}}},{handler:"www/business/catalogs/[catalog_id]/listings.js",config:{dWeb:{auth:{clientNavigation:{name:"MERCHANT_CATALOGS_LISTINGS_USER_NAV",id:230,constraints:["NavigationCompletev4"]}}}}},{handler:"www/business/catalogs/[catalog_id]/products.js",config:{dWeb:{auth:{clientNavigation:{name:"MERCHANT_CATALOGS_LISTINGS_USER_NAV",id:230,constraints:["NavigationCompletev4"]}}}}},{handler:["sterling/advertiser/[advertiserId]/ads/create.js","sterling/advertiser/[advertiserId]/ads/duplicate.js","sterling/advertiser/[advertiserId]/ads/review_draft.js","sterling/advertiser/[advertiserId]/ads/edit_draft.js","sterling/advertiser/[advertiserId]/ads/edit.js"],config:{dWeb:{auth:{initialPageLoad:{name:"STERLING_ADSEDIT_MAIN_PAGELOAD",id:204,constraints:["NavigationCompletev4","editFlowRendered","createFlowRendered"]}}}}},{handler:"sterling/advertiser/[advertiserId]/reporting/[entityType].js",config:{dWeb:{auth:{initialPageLoad:{name:"STERLING_REPORTING_DETAILS_PAGELOAD",id:218,constraints:["NavigationCompletev4","reportingTableRendered","reportingMetricsGraphDataFetched"]}}}}},{handler:"sterling/advertiser/[advertiserId].js",config:{dWeb:{auth:{initialPageLoad:{name:"STERLING_REPORTING_OVERVIEW_PAGELOAD",id:219,constraints:["NavigationCompletev4","activeCampaignsTableRendered","accountActivityRendered"]}}}}},{handler:["sterling/advertiser/[advertiserId]/bulk_editor/history.js","sterling/advertiser/_advertiserId_/bulk_editor/[page].js"],config:{dWeb:{auth:{initialPageLoad:{name:"STERLING_BULKEDITOR_HISTORY_PAGELOAD",id:231,constraints:["NavigationCompletev4","bulkHistoryRendered"]},clientNavigation:{name:"STERLING_BULKEDITOR_HISTORY_USER_NAV",id:232,constraints:["NavigationCompletev4","bulkHistoryRendered"]}}}}}];function v({isAuthenticated:e,isInitialPageLoad:t,isMobile:n}){let i=(0,f.H)(),a=_.find(e=>Array.isArray(e.handler)?e.handler.includes(i):i===e.handler),r=a?.config,o=r?.unified;if(o||(o=n?r?.mWeb:r?.dWeb),o){let n=e?o.auth:o.unauth;if(n){if(t&&n.initialPageLoad)return(0,g.qu)("Found isInitialPageLoad config"),(0,g.qu)(n.initialPageLoad),{...n.initialPageLoad};if(!t&&n.clientNavigation)return(0,g.qu)("Found clientNavigation config"),(0,g.qu)(n.clientNavigation),{...n.clientNavigation}}}return(0,g.qu)(`No config found for ${i} :(`),null}let h=({isAuthenticated:e,isInitialPageLoad:t,isMobile:n,segment:i})=>{let a=v({isAuthenticated:e,isInitialPageLoad:t,isMobile:n});return a?.segments?.[i]??null},E=[],w={},T=[],y={},L=[],N=!0,I=0,P=0,A=0,R=["web_perf_logger_v4"];function b(){(0,g.qu)("Reset PWT configs"),E=[],T=[],w={},i=null,P=0,A=0,y={}}function C(){return i?i.name:""}function S(e,t,n){let i;if((0,p.Z)()){switch(n){case"BOOL":i={type:"BOOL",value:"boolean"==typeof t?t:null};break;case"STRING":i={type:"STRING",value:"string"==typeof t?t:null};break;case"I16":case"I32":case"I64":i={type:n,value:"number"==typeof t?t:null};break;default:(0,g.qu)("Invalid binary annotation type");return}if(null===i.value){(0,g.qu)("Invalid binary annotation value");return}y={...y,[e]:i},(0,g.qu)(`Add binary annotation: { ${e}: ${i.value} }`)}}function O(e){if((0,p.Z)()){if(i){let t=E.indexOf(e);if(t>-1){if(E.splice(t,1),(0,g.qu)(`Remove constraint: ${e}. Remaining constraints: [${E.join(", ")}]`),0===E.length){let e=P-A,t=[...R,...i.annotateExperiments||[]];(0,g.fv)({pwtName:i.name,annotateExperiments:t}),(0,g.$v)({eventName:i.name,value:e}),(0,g.$v)({eventName:"complete",value:e,tags:{handler:(0,f.H)()}});let n=(0,u.b)(),s={type:"surface",surface:i.name,id:i.id,navigationType:a,isAuthenticated:n.isAuthenticated},d=(0,o.W)({annotateExperiments:t,annotations:{},binaryAnnotations:y,constraintMap:w,endTime:P,imageTimings:L,isV4Logger:!0,metricId:s,pwtStaticContext:n,startTime:A,traceId:r,spans:[]});(0,g.qu)(`All constraints complete. ${i.name} PWT completed at ${Math.floor(P)}ms. PWT duration: ${Math.floor(e)}ms`),(0,g.qu)("Result:",d),(0,l.Z)({metricId:s,pwtStaticContext:n,result:d,isV4Logger:!0,annotateExperiments:t}),b()}}else(0,g.jn)({errorName:"constraint_completed_not_in_PWT_constraint_list",pwtName:i.name,errorDetailsTag:e})}else(0,g.jn)({errorName:"remove_constraint_while_no_PWT_in_progress",errorDetailsTag:e}),T.push(e)}}function D(e){if((0,p.Z)()&&i){let t=[...R,...i.annotateExperiments||[]];(0,g.T0)({abortReason:e,pwtName:i.name,annotateExperiments:t}),E.forEach(e=>{(0,g.yi)(e,i?.name)});let n=(0,u.b)(),s={type:"surface",surface:i.name,id:i.id,navigationType:a,isAuthenticated:n.isAuthenticated},d=(0,o.N)({reason:e,annotateExperiments:t,annotations:{},binaryAnnotations:y,constraintMap:w,endTime:performance.now(),imageTimings:L,isV4Logger:!0,metricId:s,pwtStaticContext:n,startTime:A,traceId:r,spans:[]});(0,g.qu)(`Abort ${i.name} PWT. Abort reason: ${e}`),(0,g.qu)("Result:",d),(0,l.Z)({metricId:s,pwtStaticContext:n,result:d,isV4Logger:!0,annotateExperiments:t}),b()}}function $(e){(0,p.Z)()&&i&&E.includes("VisuallyComplete")&&((0,g.qu)("Set visually complete result"),(0,g.qu)("Image resource timings: ",e),0===(L=e).length&&D("visuallyComplete_noImages"))}function H(e){if((0,p.Z)()){if(i){let t=[...R,...i.annotateExperiments||[]],{isAuthenticated:n,deviceType:r}=(0,u.b)(),o=h({isAuthenticated:n,isInitialPageLoad:"initial_app_load"===a,isMobile:"phone"===r,segment:e});if(!o){(0,g.jn)({errorName:"segment_action_name_not_found",errorDetailsTag:e});return}(0,g.T0)({abortReason:"segmentChange",pwtName:i.name,annotateExperiments:t}),i.name=o,(0,g.qu)(`Set segment to ${e}. PWT action name: ${o}`),(0,g.sd)({pwtName:i.name,annotateExperiments:[...R,...i.annotateExperiments||[]]})}else(0,g.jn)({errorName:"set_segment_while_no_PWT_in_progress",errorDetailsTag:e})}}function M(e,t){if((0,p.Z)()){if(I+=1,i?D("routeChange"):b(),"POP"===e&&!1===N);else{m();let{isAuthenticated:n,deviceType:o,serverData:l}=(0,u.b)();if(i=v({isAuthenticated:n,isInitialPageLoad:N,isMobile:"phone"===o})){if(A=t,N)a="initial_app_load";else switch(e){case"PUSH":a="client_route_push";break;case"REPLACE":a="client_route_replace"}(0,g.sd)({pwtName:i.name,annotateExperiments:[...R,...i.annotateExperiments||[]]}),(0,g.qu)(`Start ${i.name} PWT`),i?.constraints.forEach(e=>{!function(e){if((0,p.Z)()){if(i){(0,g.DM)(e,i.name);let t=T.indexOf(e);t>-1?(T.splice(t,1),(0,g.qu)(`Add constraint: ${e}. Found constraint in completed constraint buffer`)):E.includes(e)||(E.push(e),(0,g.qu)(`Add constraint: ${e}`))}else(0,g.jn)({errorName:"add_constraint_while_no_PWT_in_progress",errorDetailsTag:e})}}(e)}),r=(0,s.Vd)()||(0,s.ZP)("initial_app_load"===a,l?.trace_id)}1===I&&(N=!1)}}}function j({requestContext:e,traceLoggerData:t,isForcedReload:n}){try{if((0,u.Z)({requestContext:e,traceLoggerData:t,isForcedReload:n}),(0,p.Z)())(0,g.El)({eventName:"supportedPWTBrowser"});else{(0,g.El)({eventName:"unsupportedPWTBrowser"});return}m(),d.Z.onSessionPause(D);let a=new PerformanceObserver(e=>{e&&e.getEntries&&e.getEntries().forEach(e=>{if(e&&e.name&&!e.name.startsWith("--")&&e.name.includes("constraint")){var t;!function(e,t){if(!(0,p.Z)())return;let n=E.indexOf(e);n>-1&&(P<t&&(P=t),w[e]=t,(0,g.eR)(E[n],i?.name),(0,g.$v)({eventName:`${i?.name}.constraint.${e}`,value:t}),(0,g.$v)({eventName:`constraint.${e}`,value:t,tags:{handler:(0,f.H)()}}),(0,g.qu)(`Complete constraint: ${e} at ${Math.floor(t)}ms`),O(e))}((t=e.name).includes("constraint_")?t.split("_")[1]||"":t,e.startTime)}})});a.observe&&a.observe({type:"mark",buffered:!0}),window.addEventListener("beforeunload",()=>{a.disconnect()})}catch(e){(0,g.jn)({errorName:e})}}},279794:function(e,t,n){n.d(t,{Z:()=>a});var i=n(667294);let a=(e,t)=>{let n=(0,i.useRef)(()=>{});(0,i.useEffect)(()=>{n.current=e},[e]),(0,i.useEffect)(()=>{if(null===t)return()=>{};let e=setInterval(()=>n.current(),t);return()=>clearInterval(e)},[t])}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/46683-552eb31c6933ffac.mjs.map