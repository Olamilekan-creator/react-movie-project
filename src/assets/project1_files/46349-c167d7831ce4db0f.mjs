(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["46349"],{876431:function(e,t,i){i.r(t),i.d(t,{default:()=>r});let o={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"TopicImageWithText_topic",selections:[{alias:"background_color",args:null,kind:"ScalarField",name:"backgroundColor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:"follower_count",args:null,kind:"ScalarField",name:"followerCount",storageKey:null},{alias:null,args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null}],storageKey:'images(spec:"236x")'}],type:"Interest",abstractKey:null};o.hash="b5b71fb4390c1d3835e468a25f687669";let r=o},495783:function(e,t,i){i.r(t),i.d(t,{default:()=>r});let o={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"TopicRepFragment_topic",selections:[{alias:"is_followed",args:null,kind:"ScalarField",name:"isFollowed",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{args:null,kind:"FragmentSpread",name:"TopicImageWithText_topic"}],type:"Interest",abstractKey:null};o.hash="e5a0b7dce2aa2313e4cf2c9871cbedf7";let r=o},610142:function(e,t,i){i.d(t,{iK:()=>G,ZP:()=>$,Zt:()=>K});var o=i(667294),r=i(581722),n=i(616550),l=i(883119),a=i(261954),d=i(309947),s=i(806513),u=i(138596),c=i(906127),p=i(774838),h=i(619481),g=i(661376),f=i(70625),_=i(739405),m=i(662911);let x=e=>`BREAK_IN_${e}`,y=new Map,w=e=>{let t=y.get(e);if(t)return t;let i=Object.freeze({type:"FEED_BREAK_IN",__typename:"FEED_BREAK_IN",id:x(e)});return y.set(e,i),i},I=({breakIn:{index:e},items:t})=>t.length<e?t:[...t.slice(0,e),w(e),...t.slice(e)];var S=i(31425),v=i(267288),b=i(596663),F=i(471310),E=i(989045),T=i(966039),j=i(759302),P=i(285676),N=i(956701),A=i(914253),L=i(836643),C=i(633101),k=i(734802),D=i(589247),R=i(209385),O=i(271245),B=i(785893);function Z(e,t,i){var o;return(t="symbol"==typeof(o=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?o:o+"")in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let H=(0,O.Z)(()=>i.e("65300").then(i.bind(i,827555)),void 0,e=>827555,"app-www-businessNux-BizNuxHomefeedLoader"),M=(0,O.Z)(()=>i.e("68443").then(i.bind(i,173842)),void 0,e=>173842,"app-www-save-board-MoreIdeasFeed-MoreIdeasFeed"),U=()=>{let{plpImageRenderData:e}=(0,T.HW)(),[t]=e;return t?t.pin_id:null};class z extends o.PureComponent{constructor(...e){super(...e),Z(this,"state",{refreshing:!1,unauthLandingPinStateForAuthHomefeed:this.props.authHomefeedComponentDidUpdate?{pinId:U(),feedItem:null}:null}),Z(this,"backOnlineAutoFetchResource",()=>{this.props.pagination.loadNext()}),Z(this,"handlePullToRefresh",()=>{this.props.pagination.refetch(),this.setState({refreshing:!0})}),Z(this,"gridContainerRef",(0,o.createRef)()),Z(this,"renderFeedPin",(e,t)=>{let{feedItemProps:i,location:o,performanceOptimization:r,showSeoMetadata:n,surface:l,trafficSource:a}=this.props,{auxData:d,componentType:s,feedback:u,imageOnly:c,impressionData:p,isEggsUi:h,objectIdStr:g,oneTapSave:f,onFeedItemClick:_,onPinLinkClick:m,shouldAllowProductPriceIndicator:x,showSeoMetadata:y,viewData:w,viewParameter:I,viewType:S}=i||{},v=(o.search||"").includes("force_seo"),b=!!r?.lazyLoadBelowFoldIndex&&t>r.lazyLoadBelowFoldIndex,F=!!r?.priorityFetchAboveFoldIndex&&t<=r.priorityFetchAboveFoldIndex;return(0,B.jsx)(P.ZP,{auxData:d,componentType:s||0,duploFeedItemProps:{onPinClick:_,onPinLinkClick:m,showSeoMetadata:n||v||y},duploLazyLoadImage:b,duploOneTapSave:f,duploPriorityFetchImage:F,duploQueryRef:null,duploShouldAllowProductPriceIndicator:x,feedback:u,imageOnlyOption:c?"image-only":"default",impressionData:p,isEggsUi:h,objectIdStr:g,pinId:e.id,saveButtonOptions:h?{savedInfo:{boardId:void 0,pinId:e.id,title:void 0,url:void 0},type:"inline"}:void 0,seoDrawerPinType:this.props.seoDrawerPinType,shouldMoveFieldToSeoDrawer:this.props.shouldMoveFieldToSeoDrawer,shouldShowSeoDrawerNewfields:this.props.shouldShowSeoDrawerNewfields,shouldShowSeoDrawerOption:this.props.shouldShowSeoDrawerOption,slotIndex:t,surface:l,trackingParams:e.trackingParams,trafficSource:a,viewData:w,viewParameter:I,viewType:S||1})}),Z(this,"getBoardId",()=>{let e=this.props.feedKey?.split(":");return e&&e.length>1&&"boardfeed"===e[0]?e[1]:null}),Z(this,"hideMoreIdeas",()=>{let{getReduxBoard:e,surface:t,trafficSource:i}=this.props,o=this.getBoardId(),r="board"===i&&"BaseBoardPinGrid"===t&&o?e(o):null;return r?.featured_board_metadata?.more_ideas===!1})}componentDidMount(){window.addEventListener("online",this.backOnlineAutoFetchResource),(0,S.IA)(this.props.feedKey,this)}componentWillUnmount(){window.removeEventListener("online",this.backOnlineAutoFetchResource),(0,S.do)(this.props.feedKey)}componentDidUpdate(e){let{refreshing:t,unauthLandingPinStateForAuthHomefeed:i}=this.state,{feedItems:o,authHomefeedComponentDidUpdate:r}=this.props,n=t&&e.pagination.isLoadingNext&&!this.props.pagination.isLoadingNext;if(n&&this.setState({refreshing:!1}),r&&i){let t=r({feedItems:o,prevFeedItems:e.feedItems,finishedRefresh:n,unauthLandingPinStateForAuthHomefeed:i});t&&this.setState({unauthLandingPinStateForAuthHomefeed:t})}}render(){let{deviceType:e,dynamicHeights:t,emptyState:i,experimentalColumnWidth:r,experimentalGutter:n,feedItemProps:d,feedItems:u,feedItemsAdjustment:p,feedKey:h,feedStoryId:g,getColumnSpanConfig:_,gridConfig:x,i18n:y,pageSize:w,pagination:I,pullToRefresh:S,renderFeedItem:T,serverRender:P,showBizNuxHomefeedLoader:N,trafficSource:A,visuallyCompleteProfilerOptions:L,useLoadingState:O,isLoadingAccessibilityLabel:Z,isLoadedAccessibilityLabel:U}=this.props,{unauthLandingPinStateForAuthHomefeed:z}=this.state,K=z?.feedItem&&u.length?[z.feedItem,...u]:u,{viewParameter:W,viewType:G}=d||{},{gridMeasurementKey:V}=x||{},Y=h+(V?`|${V}`:""),$="user_search"===A,q=$?window.innerWidth-16:void 0,Q=K.some(e=>"board"===e.type),J={columnWidth:(0,b.SY)({deviceType:e,customMWebColumnWidth:q,experimentalColumnWidth:Q?236:r}),renderItem:({data:e,itemIdx:t})=>{if(T){let i=T(e,t);if("FALLBACK_TO_DEFAULT"!==i)return i}switch(e.type){case"pin":return(0,B.jsx)(v.Z,{children:this.renderFeedPin(e,t)});case"user":return(0,B.jsx)(R.Z,{truncateName:!0,userId:e.id,userSearchRepStyle:$,viewParameter:W,viewType:G});case"board":let i=this.props.getReduxBoard(e.id);return(0,B.jsx)(m.default,{boardKey:i?{type:"deprecated",data:i}:null,type:"grid",viewParameter:W,viewType:G});case"topic":return(0,B.jsx)(k.Z,{id:e.id,shouldClickthrough:!0,showFollowButton:!0,showFollowerCount:!0,viewParameter:W,viewType:G});case"story":if("number"==typeof W)return(0,B.jsx)(C.Z,{slotIndex:t,storyId:e.id,viewParameter:W,viewType:G||1});return null;case"FEED_BREAK_IN":return p&&"breakIn"===p.type&&p.value.content;default:return null}},gutterWidth:(0,b.s)({experimentalGutter:n,trafficSource:A,deviceType:e}),loadItems:I.loadNext,minCols:$?1:2,...x},X=!N&&I.isLoadingNext&&0===K.length&&!this.state.refreshing&&!O,ee=w&&25>parseInt(w,10),[et,ei,eo]=p?.type==="fullWidthBreakIn"?[K.slice(0,p.value.index),p.value.content,K.slice(p.value.index)]:[K,null,[]],er="desktop"===e&&"flashlight"===A,en=er?0:s.qG;return(0,B.jsxs)(l.xu,{"data-test-id":"MobileFeed",children:[(0,B.jsx)(F.Z,{auxData:d?.auxData||null,enabled:!!S,onPull:this.handlePullToRefresh,refreshing:this.state.refreshing,viewParameter:d?.viewParameter||null}),(0,B.jsxs)(l.xu,{ref:this.gridContainerRef,"data-test-id":"grid",marginEnd:en,marginStart:en,opacity:this.state.refreshing?.5:1,children:[(0,B.jsxs)(c.Z,{includeBackgroundImages:L?.includeBackgroundImages,includeVideos:L?.includeVideos,isAtEndOfFeed:!I.hasNext,itemCount:K.length,pinData:L?.pins,children:[K.length||O&&I.isLoadingNext?(0,B.jsx)(l.xu,{"data-test-id":"feed",marginTop:(0,b.kk)({isDesktop:"desktop"===e}),children:(0,B.jsx)(f.Z.Consumer,{children:e=>(0,B.jsx)(o.Fragment,{children:(0,B.jsxs)(D.Z,{children:[(0,B.jsx)(a.default,{_dynamicHeights:t,_getColumnSpanConfig:_,cacheKey:Y,id:P?h:void 0,isFetching:I.isLoadingNext,isLoadedAccessibilityLabel:U??"",isLoadingAccessibilityLabel:Z??"",items:et,scrollContainerRef:e,serverRender:P,useLoadingState:!!O,...J}),ei,eo.length>0&&(0,B.jsx)(a.default,{cacheKey:`${Y}_afterBreak`,items:eo,scrollContainerRef:e,...J,isFetching:I.isLoadingNext,isLoadedAccessibilityLabel:U??"",isLoadingAccessibilityLabel:Z??"",useLoadingState:!!O})]})})})}):I.isLoadingNext?(0,B.jsx)(E.Z,{}):i??null,I.isLoadingNext&&"board"===A&&ee&&!O&&(0,B.jsx)(l.xH,{accessibilityLabel:y._('Loading', 'Label for loading spinner', 'Label for loading spinner'),show:!0})]}),X&&(0,B.jsx)(l.xu,{column:12,paddingY:2,children:(0,B.jsx)(j.Z,{partialViewportWidth:er})}),N&&(0,B.jsx)(H,{gridContainerRef:this.gridContainerRef,homefeedLoading:I.isLoadingNext}),g&&!this.hideMoreIdeas()&&(0,B.jsx)(l.xu,{marginBottom:6,children:(0,B.jsx)(M,{storyId:g})})]})]})}}function K({feedItems:e,pagination:t,...i}){let{feedItemsAdjustment:o}=i,l=(0,n.TH)(),a=(0,_.ZP)(),s=(0,u.ZP)(),{isAuthenticated:c,isBot:h}=(0,p.B)(),{isBizNuxHomefeedLoadShown:g}=(0,r.v9)(({session:e})=>e),f=e;o?.type==="breakIn"&&(f=I({items:e,breakIn:o.value}));let{experimentalColumnWidth:m,experimentalGutter:x}=(0,d.Z)(),y=(0,A.gC)();return(0,B.jsx)(z,{...i,deviceType:a,experimentalColumnWidth:m,experimentalGutter:x,feedItems:f,getReduxBoard:y,i18n:s,isAuthenticated:c,location:l,pagination:t,showBizNuxHomefeedLoader:!!g,showSeoMetadata:h||!c})}function W({isAtEnd:e,isFetching:t,fetchMore:i,refresh:o,...n}){let l=(0,r.v9)(({feeds:e})=>e[n.feedKey]??[]),a=(0,r.v9)(({desktopStories:e})=>e),{featuredBoardStoryId:d,feedStoryId:s}=(0,L.Z)(l,a),u=(0,r.v9)(({session:e})=>e.firstHomeFeedRequestAfterNux),c=(0,r.I0)();return(0,B.jsx)(K,{...n,featuredBoardStoryId:d,feedItems:l,feedStoryId:s,pagination:{hasNext:!e,isLoadingNext:t,loadNext:()=>i(),refetch:()=>{u?c((0,N.H5)(!1)):o()}}})}function G({resource:{isAtEnd:e,isFetching:t,fetchMore:i,refresh:o},...r}){return(0,B.jsx)(W,{...r,fetchMore:i,isAtEnd:e,isFetching:t,refresh:o})}function V({resourceConfig:e,...t}){let i=(0,g.Z)(e);return(0,B.jsx)(G,{...t,resource:i})}function Y({resourceRef:e,...t}){let{isAtEnd:i}=(0,h.Z)(e),{fetchMore:o,refresh:r}=e;return(0,B.jsx)(W,{...t,fetchMore:o,isAtEnd:i,isFetching:!1,refresh:r})}function $({resourceConfig:e,resourceRef:t,...i}){return t?(0,B.jsx)(Y,{...i,resourceRef:t}):(0,B.jsx)(V,{...i,resourceConfig:e})}},31425:function(e,t,i){i.d(t,{IA:()=>n,cV:()=>r,do:()=>l});let o={},r=e=>{o[e]&&o[e].handlePullToRefresh()},n=(e,t)=>{o[e]=t},l=e=>{delete o[e]}},267288:function(e,t,i){i.d(t,{Z:()=>n});var o=i(310758),r=i(785893);let n=({children:e})=>(0,r.jsx)(o.Z,{onTouch:e=>{if(e.target instanceof HTMLElement&&"IMG"===e.target.tagName){let t=e.target.getBoundingClientRect().top+window.scrollY-70;window.scrollTo(window.scrollX,t)}},pressState:"none",children:e})},966039:function(e,t,i){i.d(t,{Es:()=>s,HW:()=>d,rQ:()=>u});var o=i(4533),r=i(34550);let n=e=>e>=Date.now()-72e5,l=(e,t)=>{let i=[];if(e)for(let o of e)(!t||o.is_shared)&&n(o.ts)&&i.push(o);return i},a=e=>{let t={};if(e)for(let i of e)i.is_shared&&n(i.ts)&&i.pin_id&&(t[i.pin_id]={inviteCode:i.pin_invite_code});return t},d=()=>{let e=(0,r.M0)().getItem(o.uc)??[],t=l(e,!1),i=l(e,!0),n=t.map(e=>e.first_pin_image_signature),d=i.map(e=>e.first_pin_image_signature),s=a(e);return{extraPlpImages:n,plpImageRenderData:t,extraBlpImages:l((0,r.M0)().getItem(o.hI)??[],!0).map(e=>e.first_pin_image_signature),extraSharedImages:d,sharedPinData:s}},s=(e,t)=>{if(e.length!==t.length)return!1;for(let i=0;i<e.length;i+=1)if(e[i].id!==t[i].id)return!1;return!0},u=(e,t)=>e.map(e=>({1:e,2:(t[e]||[]).map(e=>({1:e,2:"pin"}))}))},775907:function(e,t,i){i.d(t,{Z:()=>l});var o=i(883119),r=i(351736),n=i(785893);function l({color:e,image:t,isSelected:i,title:l}){let a=(0,r.vs)();return(0,n.jsxs)(o.xu,{alignItems:"center","aria-selected":i,dangerouslySetInlineStyle:{__style:{backgroundColor:a?i?"#fff":"#767676":i?"#111":"#efefef"}},display:"flex",padding:1,rounding:"pill",children:[(0,n.jsx)(o.zd,{height:48,rounding:"circle",width:48,children:t.url&&(0,n.jsx)(o.Ee,{alt:"",color:e,fit:"cover",naturalHeight:t.height??1,naturalWidth:t.width??1,src:t.url})}),(0,n.jsx)(o.xu,{marginEnd:3,marginStart:2,children:(0,n.jsx)(o.xv,{color:i?"inverse":a?"light":"dark",weight:"bold",children:l})})]})}},956701:function(e,t,i){i.d(t,{Cp:()=>s,FK:()=>d,H5:()=>w,MI:()=>f,O0:()=>g,QZ:()=>a,W:()=>x,WF:()=>c,Wz:()=>I,a5:()=>p,dz:()=>m,e0:()=>h,e2:()=>l,iW:()=>y,n1:()=>n,rm:()=>u,xu:()=>_});var o=i(173874),r=i(138482);let n=()=>({type:"DISMISS_UNAUTH_SAVE"}),l=()=>({type:"COMPLETE_UNAUTH_SAVE_ACTION"}),a=e=>({type:"SET_UNAUTH_SAVE_PIN_ID",payload:{unauthSavePinId:e}}),d=()=>({type:"HIDE_NAV_FOOTER"}),s=()=>({type:"SHOW_NAV_FOOTER"}),u=e=>({type:"SET_LOGIN_SIGNUP_FROM",payload:{from:e}}),c=()=>({type:"SHOW_REPIN_ANIMATION"}),p=()=>({type:"HIDE_REPIN_ANIMATION"}),h=e=>({type:"SET_NUM_SIGNUP_STEPS",payload:{steps:e}}),g=()=>({type:"SET_OWN_PROFILE_PINS_REFRESH"}),f=e=>({type:"SHOW_BIZ_NUX_HOMEFEED_LOADER",payload:e}),_=e=>({type:"SET_VIEWED_IMAGE",payload:{viewedImageSignature:e}}),m=e=>({type:"SET_VIEWED_SHARED_PINS",payload:{pins:e}}),x=()=>({type:"DISMISS_UNAUTH_APP_UPSELL"}),y=e=>e?{type:"LOGGED_OUT_USER_INFO_FOUND",payload:e}:{type:"LOGGED_OUT_USER_INFO_NOT_FOUND"},w=e=>({type:"UPDATE_USER_FIRST_HOME_FEED_REQUEST_AFTER_NUX",payload:e}),I=(e,t)=>({type:"SET_LANDING_PAGE_TYPE",payload:e?(0,o.bo)(e)?"today":(0,o.dr)(e)?"ideas":t&&(0,o.dZ)(e,t)?"own_section":t&&(0,o.J)(e,t)?"own_board":(0,o.OJ)(e)?"section":(0,o.am)(e)?"board":(0,o.L6)(e)?"closeup":(0,o.C$)(e)?"home":(0,r.Z)(e)?"profile":(0,o.En)(e)?"search":(0,o.$V)(e)?"topic":"":""})},199024:function(e,t,i){i.d(t,{ZN:()=>l,fv:()=>a,hr:()=>n,lD:()=>d});var o=i(27399);function r(e,t){return o.Z.create("InterestFollowResource",{interest_id:e,interest_list:"favorited",referrer:t})}let n=(e,t)=>({type:"TOPIC_FOLLOW",payload:{id:e,value:t}}),l=(e,t,i)=>async o=>{o(n(e,!0));try{await r(e,i).callCreate(),t({event_type:601,object_id_str:e})}catch(t){o(n(e,!1))}},a=(e,t,i)=>async o=>{o(n(e,!1));try{await r(e,i).callDelete(),t({event_type:602,object_id_str:e})}catch(t){o(n(e,!0))}},d=(e,t="")=>i=>o.Z.create("UpdateFollowedInterestsResource",{referrer:t,updated_interest_follows:e}).callUpdate().then(()=>{Object.keys(e).forEach(t=>{let o=e[t];i(n(t,o))})})},836643:function(e,t,i){i.d(t,{Z:()=>r});let o={feed:void 0,featuredBoardStoryId:void 0,feedStoryId:void 0,footerStoryId:void 0,boardShopModuleId:void 0,boardShopModuleIndex:void 0},r=(e,t)=>e?e.reduce(({boardShopModuleId:e,boardShopModuleIndex:i,featuredBoardStoryId:o,feed:r,feedStoryId:n,footerStoryId:l},a,d)=>{let s="story"===a.type&&t[a.id]?.story_type,u="board_ideas_feed"===s,c="board_ideas_preview_detailed"===s,p=!1;if("board_shop_tool_module"===s){let e=t[a.id];p=!!e.custom_properties?.is_full_width}return{feed:r.concat(c||u||p?[]:[a]),featuredBoardStoryId:"featured_boards"===s?a.id:o,feedStoryId:u?a.id:n,footerStoryId:c?a.id:l,boardShopModuleId:p?a.id:e,boardShopModuleIndex:p?d:i}},{boardShopModuleId:void 0,boardShopModuleIndex:void 0,featuredBoardStoryId:void 0,feed:[],feedStoryId:void 0,footerStoryId:void 0}):o},734802:function(e,t,i){i.d(t,{Z:()=>b});var o,r,n=i(581722),l=i(167912),a=i(883119),d=i(104999),s=i(774838),u=i(338065),c=i(199024),p=i(138596),h=i(720459),g=i(775907),f=i(785893);let _=({backgroundColor:e,decreaseNamePadding:t,isHomefeedTuner:i,isLego:o,isSelected:r,locale:n,nameTextSize:l,renderAsPill:d,showFollowerCount:s,topicName:u,followerCount:c,image:_})=>{let m=(0,p.ZP)(),x=(0,h.Z)(),y=(0,f.jsx)(a.JO,{accessibilityLabel:m._('Selected', ' - ', ' -- '),color:"light",icon:o?"check":"check-circle",size:o?12:24});return d?(0,f.jsx)(g.Z,{color:e||"#767676",image:_,isSelected:r??!1,title:u}):(0,f.jsxs)(a.xu,{"aria-selected":r,position:"relative",children:[(0,f.jsx)(a.zd,{rounding:o||i?4:2,children:(0,f.jsxs)(a.xu,{dangerouslySetInlineStyle:{__style:{paddingBottom:"100%"}},position:"relative",children:[(0,f.jsx)(a.xu,{bottom:!0,left:!0,padding:o&&r?1:0,position:"absolute",right:!0,rounding:o&&r?4:0,top:!0,children:_.url&&(0,f.jsx)(a.Ee,{alt:u,color:e||"#767676",fit:"cover",naturalHeight:1,naturalWidth:1,src:_.url})}),(0,f.jsx)(a.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{backgroundColor:r?"rgba(0,0,0,0.6)":"rgba(0,0,0,0.3)",border:o&&r?"4px solid #767676":"none"}},left:!0,position:"absolute",right:!0,rounding:o?4:void 0,top:!0}),o&&r&&(0,f.jsx)(a.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{border:"2px solid #111"}},left:!0,position:"absolute",right:!0,rounding:4,top:!0})]})}),i?(0,f.jsx)(a.xu,{alignContent:"center",alignItems:"center",bottom:!0,display:"flex",justifyContent:"center",left:!0,padding:2,position:"absolute",right:!0,top:!0,children:(0,f.jsx)(a.xv,{align:"center",color:"light",size:l,weight:"bold",children:u})}):(0,f.jsxs)(a.xu,{bottom:!0,left:!0,padding:t?1:2,position:"absolute",right:!0,children:[(0,f.jsx)(a.xv,{color:"light",size:l,weight:"bold",children:u}),s&&c>=0&&(0,f.jsx)(a.xu,{paddingY:1,children:(0,f.jsxs)(a.xv,{color:"inverse",size:"100",children:[(0,f.jsx)(a.xv,{color:"inverse",inline:!0,size:"100",weight:"bold",children:x(n,c,{shortform:!0,shortform_maximum_fraction_digits:1})}),m._('followers', ' - ', ' -- ')]})})]}),r&&(0,f.jsx)(a.xu,{margin:2,position:"absolute",right:!0,top:!0,children:o?(0,f.jsx)(a.xu,{alignItems:"center",color:"selected",display:"flex",height:24,justifyContent:"center",rounding:2,width:24,children:y}):y})]})},m=void 0!==o?o:o=i(876431),x=({topicRef:e,...t})=>{let i=(0,l.useFragment)(m,e),o=i.images?{url:i.images.url??"",width:i.images.width??0,height:i.images.height??0,dominant_color:"",type:""}:{dominant_color:"",height:0,type:"",url:"",width:0};return(0,f.jsx)(_,{backgroundColor:i.background_color??"",followerCount:i.follower_count??0,image:o,topicName:i.name??"",...t})},y=({topic:e,topicBlob:t,topicInfoForContextualExp:i,...o})=>{let r=i||e||t,n=r?.images?.["236x"]||r?.images?.["400x"]||r?.images?.["474x"]||r?.images?.orig||{height:1,url:"",width:1},l=r&&"follower_count"in r&&void 0!==r.follower_count?r.follower_count:-1;return(0,f.jsx)(_,{backgroundColor:r?.background_color||"",followerCount:l,image:n,topicName:r?.name||"",...o})},w=({decreaseNamePadding:e=!1,isHomefeedTuner:t,isLego:i,isSelected:o=!1,nameTextSize:r="lg",onTouch:l,padding:p=2,renderAsPill:h,showFollowButton:g=!1,showFollowerCount:_=!1,shouldClickthrough:m=!1,topic:w,viewParameter:I,viewType:S})=>{let v=(0,n.I0)(),b=(0,d.Z)(),{locale:F}=(0,s.B)(),E=(0,f.jsxs)(a.xu,{"data-test-id":"nux-picker-topic",children:["graphql"!==w.type?(0,f.jsx)(y,{decreaseNamePadding:e,isHomefeedTuner:t,isLego:i,isSelected:o,locale:F,nameTextSize:r,renderAsPill:h,showFollowerCount:_,topic:w.topic,topicBlob:w.topicBlob,topicInfoForContextualExp:w.topicInfoForContextualExp}):(0,f.jsx)(x,{decreaseNamePadding:e,isHomefeedTuner:t,isLego:i,isSelected:o,locale:F,nameTextSize:r,renderAsPill:h,showFollowerCount:_,topicRef:w.topicRef}),!!w&&g&&(0,f.jsx)(a.xu,{paddingY:2,children:(0,f.jsx)(u.Z,{followEventType:601,id:w.id,inline:t,invertColors:t,isFollowed:w.is_followed,onFollow:e=>v((0,c.ZN)(e,b)),onUnfollow:e=>v((0,c.fv)(e,b)),pinKey:null,size:"md",textType:t?"AddRemove":"FollowFollowing",unfollowEventType:602,viewParameter:I||void 0,viewType:S||void 0})})]}),T="/";return w&&(T=`/topics/${w.id}`),m&&w.slug?(0,f.jsx)(a.Tg,{href:T,onTap:({event:e})=>{l?.(e)},rounding:2,tapStyle:"compress",children:(0,f.jsx)(a.xu,{padding:p,children:E})}):E},I=void 0!==r?r:r=i(495783),S=({topicRef:e,decreaseNamePadding:t=!1,isHomefeedTuner:i,isLego:o,isSelected:r=!1,nameTextSize:n="lg",onTouch:a,padding:d=2,renderAsPill:s,showFollowButton:u=!1,showFollowerCount:c=!1,shouldClickthrough:p=!1,viewParameter:h,viewType:g})=>{let _=(0,l.useFragment)(I,e);return(0,f.jsx)(w,{decreaseNamePadding:t,isHomefeedTuner:i,isLego:o,isSelected:r,nameTextSize:n,onTouch:a,padding:d,renderAsPill:s,shouldClickthrough:p,showFollowButton:u,showFollowerCount:c,topic:{id:_.entityId??"",type:"graphql",is_followed:_.is_followed??!1,topicRef:_},viewParameter:h,viewType:g})},v=({id:e,topic:t,topicBlob:i,topicInfoForContextualExp:o,decreaseNamePadding:r=!1,isHomefeedTuner:l,isLego:a,isSelected:d=!1,nameTextSize:s="lg",onTouch:u,padding:c=2,renderAsPill:p,showFollowButton:h=!1,showFollowerCount:g=!1,shouldClickthrough:_=!1,viewParameter:m,viewType:x})=>{let y=(0,n.v9)(({topics:t})=>t[e]),I=t??y;return(0,f.jsx)(w,{decreaseNamePadding:r,isHomefeedTuner:l,isLego:a,isSelected:d,nameTextSize:s,onTouch:u,padding:c,renderAsPill:p,shouldClickthrough:_,showFollowButton:h,showFollowerCount:g,topic:{id:e,is_followed:!!I?.is_followed,topic:I,topicBlob:i,topicInfoForContextualExp:o,type:"resource"},viewParameter:m,viewType:x})},b=({decreaseNamePadding:e=!1,isHomefeedTuner:t,isLego:i,isSelected:o=!1,nameTextSize:r="lg",onTouch:n,padding:l=2,renderAsPill:a,showFollowButton:d=!1,showFollowerCount:s=!1,shouldClickthrough:u=!1,viewParameter:c,viewType:p,...h})=>h.topicRef?(0,f.jsx)(S,{decreaseNamePadding:e,isHomefeedTuner:t,isLego:i,isSelected:o,nameTextSize:r,onTouch:n,padding:l,renderAsPill:a,shouldClickthrough:u,showFollowButton:d,showFollowerCount:s,topicRef:h.topicRef,viewParameter:c,viewType:p}):(0,f.jsx)(v,{decreaseNamePadding:e,id:h.id,isHomefeedTuner:t,isLego:i,isSelected:o,nameTextSize:r,onTouch:n,padding:l,renderAsPill:a,shouldClickthrough:u,showFollowButton:d,showFollowerCount:s,topic:h.topic,topicBlob:h.topicBlob,topicInfoForContextualExp:h.topicInfoForContextualExp,viewParameter:c,viewType:p})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/46349-c167d7831ce4db0f.mjs.map