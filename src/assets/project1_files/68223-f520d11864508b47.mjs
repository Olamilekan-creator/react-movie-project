(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["68223"],{639546:function(e,t,n){n.r(t),n.d(t,{default:()=>a});let i={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"isAuthParam"},{defaultValue:null,kind:"LocalArgument",name:"isDesktopParam"},{defaultValue:!1,kind:"LocalArgument",name:"skipUnauthFragment"}],kind:"Fragment",metadata:null,name:"StructuredFeedStoryModule_story",selections:[{alias:null,args:null,concreteType:"StoryAction",kind:"LinkedField",name:"action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"location",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"containerType",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"contentIds",storageKey:null},{alias:null,args:null,concreteType:"StoryDisplayOptions",kind:"LinkedField",name:"displayOptions",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryContentDisplay",kind:"LinkedField",name:"contentDisplay",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"componentType",storageKey:null}],storageKey:null}],storageKey:null},{alias:"storyId",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyType",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"trackingParams",storageKey:null},{args:[{kind:"Variable",name:"isAuthParam",variableName:"isAuthParam"},{kind:"Variable",name:"isDesktopParam",variableName:"isDesktopParam"},{kind:"Variable",name:"skipUnauthFragment",variableName:"skipUnauthFragment"}],kind:"FragmentSpread",name:"CarouselModule_story"},{args:null,kind:"FragmentSpread",name:"HeaderModule_story"}],type:"Story",abstractKey:null};i.hash="f3d95ba322a421566dde963a1bcddef6";let a=i},624152:function(e,t,n){n.d(t,{Z:()=>s});var i=n(667294),a=n(883119),r=n(806513),o=n(785893);function l(){return(0,o.jsx)(a.xu,{width:r.yF})}function s(){return(0,o.jsx)(i.Fragment,{children:Array(12).fill(void 0).map((e,t)=>(0,o.jsx)(l,{},t))})}},567121:function(e,t,n){n.d(t,{Z:()=>l});var i=n(883119),a=n(867745),r=n(785893);let o=new Map([["pin",4],["explorearticle",2]]);function l({children:e,itemType:t,overrideMargin:n}){return(0,r.jsx)(i.xu,{marginBottom:n||o.get(t)||a.mT,children:e})}},698318:function(e,t,n){n.r(t),n.d(t,{default:()=>Q}),n(167912);var i,a=n(883119),r=n(907022),o=n(79271),l=n(41516),s=n(480353),d=n(806513),c=n(719748),u=n(229067),p=n(760510),m=n(867745),y=n(543616),h=n(785893);let g=()=>(0,h.jsx)(a.xu,{color:"secondary",height:d.yF,width:d.yF}),x={1:{itemRep:u.Z,deprecatedActionShape:"square",deprecatedGetActionImage:e=>e.images?.orig?.url||""},4:{itemRep:c.Z,deprecatedActionShape:"circle",deprecatedGetActionImage:e=>e.images?.orig?.url||""},2:{itemRep:p.Z,deprecatedActionShape:"circle",deprecatedGetActionImage:e=>e.image_large_url}};function f({auxData:e,componentFallback:t,showExpanded:n=!0,story:i,view:r,viewParameter:o}){let l=(x[(i.display_options?.content_display||{}).model_type]||m.g5).itemRep||g,s=i.display_options?.content_display?.component_type??t;return(0,h.jsx)(a.xu,{marginBottom:2,children:(0,h.jsxs)(a.kC,{alignItems:"stretch",direction:"column",justifyContent:"center",children:[i.title&&(0,h.jsx)(y.Z,{showExpanded:n,storyKey:{type:"deprecated",data:i}}),(0,h.jsx)(a.kC,{gap:2,justifyContent:"center",wrap:!0,children:i.objects?.map(function(t,n){return(0,h.jsx)(l,{auxData:e,component:s,imagePlaceholderColor:"rgba(0, 0, 0, 0)",index:n,item:t,story:i,view:r,viewParameter:o},n)})})]})})}var j=n(667294),_=n(309947),w=n(222451),v=n(624152),I=n(567121),k=n(29786),b=n(592150),S=n(65210),C=n(739405);let F="rgba(0, 0, 0, 0)",A=()=>(0,h.jsx)(a.xu,{color:"secondary",height:d.yF,width:d.yF}),T={1:{itemRep:u.Z,deprecatedActionShape:"square",deprecatedGetActionImage:e=>e.images?.orig?.url||""},4:{itemRep:c.Z,deprecatedActionShape:"circle",deprecatedGetActionImage:e=>e.images?.orig?.url||""},2:{itemRep:p.Z,deprecatedActionShape:"circle",deprecatedGetActionImage:e=>e.image_large_url}};function Z({auxData:e,componentFallback:t,dangerouslySetActionUrl:n,dangerouslySetContentVisibleItemCount:i,disableHeader:r,dynamicItemWidth:o,initialSlotIndex:l=0,showExpanded:s,story:c,surface:u,view:p,viewParameter:g,width:x}){let f=(0,C.HG)(),Z=c.display_options?.content_display||{},D=T[Z.model_type]||m.g5,P=D.itemRep||A,{action:K}=c,L=n||c.action?.url||"",E=c.display_options?.content_display?.component_type??t,R=Z.grid_layout?.rows,W="number"==typeof R?R:1,G=Z.grid_layout?.cols,N="number"==typeof G?G:-1,z=-1===N,M=i??Z.content_visible_item_count?.web,O=M&&x&&o?(0,d.Wv)({defaultItemWidth:d.yF,contentVisibleItemCount:M,gap:d.oX,moduleWidth:"number"==typeof x?x:parseInt(x,10)}):d.yF,{containerRef:H,itemsToRender:U,actionItem:B}=(0,S.Z)({items:c.objects||[],itemWidth:(0,k.Z)()?d.tG:O,itemGap:d.oX,actionItemType:K?"one":void 0,numRows:W}),V=B&&D.deprecatedGetActionImage?D.deprecatedGetActionImage(B):void 0,X=z?U:c.objects||[],{experimentalGutterBoints:q}=(0,_.Z)(),Y=X.map((t,n)=>(0,h.jsx)(I.Z,{itemType:"string"==typeof t.type?t.type:null,children:(0,h.jsx)(P,{auxData:e,component:E,imagePlaceholderColor:F,imageWidth:O,index:n,item:t,slotIndex:l+n,story:c,surface:u,view:p,viewParameter:g})},n)),J=!!L&&!!K?.text&&V&&(0,h.jsx)(w.Z,{auxData:e,buttonText:K.text,component:E,contentIds:c.content_ids,element:179,imageWidth:O,previewImageSrc:V,shape:D.deprecatedActionShape,storyId:c.id,storyType:c.story_type,url:L,view:p,viewParameter:g});return(0,h.jsxs)(a.xu,{alignItems:"stretch",color:"default",direction:"column",display:"flex",justifyContent:"start",children:[c.title&&!r&&(0,h.jsx)(y.Z,{showExpanded:s,storyKey:{type:"deprecated",data:c}}),z?(0,h.jsxs)(b.Z,{containerRef:H,itemGap:d.oX,numRows:W,rowAlignment:"center",children:[Y,J,W>1&&(0,h.jsx)(v.Z,{})]}):(0,h.jsxs)(j.Fragment,{children:[N>1?Array(W).fill(null).map((e,t)=>(0,h.jsx)(a.kC,{alignItems:"stretch",gap:q??(f?d.jC:d.D6),justifyContent:"start",width:"100%",wrap:N<=1,children:N>0&&Array(N).fill(null).map((e,n)=>{let i=Y[t*N+n];return(0,h.jsx)(a.kC.Item,{flex:"grow",children:i},n)})},X[t].id)):(0,h.jsx)(a.kC,{direction:"column",children:Y}),J]})]})}function D({auxData:e,componentFallback:t,showExpanded:n=!0,story:i,view:r,viewParameter:o}){let l=(T[(i.display_options?.content_display||{}).model_type]||m.g5).itemRep||A,s=i.display_options?.content_display?.component_type??t,c=(0,k.Z)()?d.tG:d.yF;return(0,h.jsxs)(a.kC,{alignItems:"stretch",direction:"column",justifyContent:"start",children:[i.title&&(0,h.jsx)(y.Z,{showExpanded:n,storyKey:{type:"deprecated",data:i}}),(0,h.jsx)(a.Rk,{columnWidth:c,gutterWidth:d.oX,items:i.objects||[],layout:"flexible",renderItem:({data:t,itemIdx:n})=>(0,h.jsx)(l,{auxData:e,component:s,imagePlaceholderColor:F,index:n,item:t,story:i,view:r,viewParameter:o},n)})]})}function P(e){switch(e.story.display_options?.content_display?.pins_display){case 3:case 1:case 2:return(0,h.jsx)(D,{...e});default:return(0,h.jsx)(Z,{...e})}}var K=n(28031),L=n(616550),E=n(230201),R=n(583875),W=n(138596),G=n(33581),N=n(462867);let z=({actionText:e,actionUrl:t,articleId:n,author:i,authorAvatar:r,auxData:l,component:s,contentIds:d,coverImage:c,debug:u,index:p,isFullWidth:m=!1,onImageLoad:y,storyId:g,storyType:x,subtitle:f,title:_,view:w,viewParameter:v,width:I,windowWidth:k})=>{let b=(0,W.ZP)(),S=(0,L.k6)(),{logContextEvent:C}=(0,E.v)(),[F,A]=(0,j.useState)(!1),T=(0,N.Z)(),Z=T.isAuth?T?.avatar_color_index:void 0,D=(0,o.Z)({loggingId:n,objectIdStr:n,impressionType:"Article",contextLogData:{content_ids:d,story_id:g,story_type:x,article_id:n,...l},slotIndex:p,viewParameter:v,viewType:w,componentType:s});return(0,h.jsx)(a.xu,{"data-test-id":"sf-hero",children:(0,h.jsxs)(a.xu,{ref:D,height:"auto",onMouseEnter:()=>A(!0),onMouseLeave:()=>A(!1),width:I,children:[(0,h.jsx)(a.iP,{onTap:()=>{C({event_type:101,view_type:w,view_parameter:v,component:s,aux_data:{article_id:n,content_ids:d,story_id:g,story_type:x,...l}}),S.push(t)},children:(0,h.jsxs)(a.xu,{height:m?400:"35vw",maxHeight:500,overflow:"hidden",position:"relative",children:[(0,h.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{transition:"transform 0.4s",transform:F?"scale(1.5)":"scale(1)"}},height:"100%",width:"100%",children:(0,h.jsx)(a.Ee,{alt:b._('Cover image of this shopping spotlight', 'hero.heroCoverImage', 'alt text for an image previewing the contents of a spotlight article'),color:"#fff",fit:"cover",naturalHeight:400,naturalWidth:400,onLoad:y,src:c,children:(0,h.jsx)(a.xu,{color:"transparentDarkGray",display:"block",height:"100%",opacity:.3,width:"100%"})})}),(0,h.jsx)(a.xu,{bottom:!0,marginBottom:m?12:0,padding:6,position:"absolute",width:"100%",children:(0,h.jsxs)(a.kC,{direction:"column",height:"100%",justifyContent:"end",children:[(0,h.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{transition:"transform 0.4s",transform:F?"translateY(-20px)":"translateY(20px)"}},children:(0,h.jsx)(a.X6,{color:"light",size:k<=822?"600":k<1e3?"400":k<1100?"500":"600",children:_})}),(0,h.jsxs)(a.xu,{dangerouslySetInlineStyle:{__style:{opacity:F?1:0,transition:F?"opacity 0.4s ease-in":"opacity 0.4s ease-out"}},display:"block",height:F?"auto":20,overflow:"hidden",children:[(0,h.jsx)(a.xv,{color:"inverse",children:f}),i&&(0,h.jsx)(a.xu,{marginTop:4,children:(0,h.jsxs)(a.kC,{alignItems:"center",direction:"row",children:[(0,h.jsx)(R.qE,{color:Z,name:i,size:"md",src:r}),"\xa0",(0,h.jsx)(a.xv,{color:"inverse",children:i})]})})]}),(0,h.jsx)(a.xu,{marginTop:4,width:"74px",children:(0,h.jsx)(a.zx,{color:"white",onClick:()=>{S.push(t)},size:"lg",text:e})})]})})]})}),void 0!==u&&(0,h.jsx)(G.Z,{data:u})]})})};var M=n(501755),O=n(620766),H=n(206928);function U({auxData:e,onImageLoad:t,story:n,view:i,viewParameter:r,component:o,width:l}){let[s,d]=(0,j.useState)(0),c=(0,j.useRef)(null),u=n.objects?.slice(0,3)||[];return(0,h.jsxs)(a.xu,{ref:c,alignItems:"end",display:"flex",height:400,justifyContent:"center",position:"relative",width:l,children:[(0,h.jsx)(M.Z,{containerRef:c.current,id:n.id,index:s,slideWidth:l,children:u.map((a,s)=>(0,h.jsx)(z,{actionText:a.action?.text||"",actionUrl:a.action?.url||"",articleId:a.id,auxData:e,component:o,coverImage:a.cover_images&&a.cover_images[0].originals?.url||"",debug:a.debug,index:s,isFullWidth:!0,onImageLoad:t,storyId:n.id,storyType:n.story_type,subtitle:a.subtitle?.format||"",title:a.title?.format||"",view:i,viewParameter:r,width:l,windowWidth:l},a.id))}),(0,h.jsx)(a.xu,{display:"inlineBlock",height:"auto",paddingY:5,position:"absolute",width:"60%",children:(0,h.jsx)(O.default,{addEllipsis:!0,backNode:(0,h.jsx)(H.Z,{iconColor:"inverse",iconType:"back",showFab:!0}),carouselData:{index:s,entityId:"",carouselSlots:u.map(e=>({id:e.id,title:null}))},carouselIndex:s,forwardNode:(0,h.jsx)(H.Z,{iconColor:"inverse",iconType:"forward",showFab:!0}),handleCarouselSwipe:e=>{d(e)},pinKey:null})})]})}function B({auxData:e,component:t,onImageLoad:n,story:i,view:r,viewParameter:o,windowWidth:l}){let s=i.objects?.slice(0,3)||[];return(0,h.jsxs)(j.Fragment,{children:[(0,h.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:s[0].dominant_colors[0]}},flex:"grow"}),s.map((a,s)=>(0,h.jsx)(z,{actionText:a.action?.text||"",actionUrl:a.action?.url||"",articleId:a.id,auxData:e,component:t,coverImage:a.cover_images&&a.cover_images[0].originals?.url||"",debug:a.debug,index:s,onImageLoad:n,storyId:i.id,storyType:i.story_type,subtitle:a.subtitle?.format||"",title:a.title?.format||"",view:r,viewParameter:o,width:500,windowWidth:l},a.id)),(0,h.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:s[2].dominant_colors[0]}},flex:"grow"})]})}function V({auxData:e,component:t,pwtSurfaceContext:n,story:i,view:r,viewParameter:o}){let{width:l}=(0,K.Z)()||{},s=()=>{n&&n.markConstraintComplete("RenderHeroImages")},d=!l||l>822?3:1;return(0,h.jsx)(j.Fragment,{children:(0,h.jsx)(a.kC,{alignItems:"stretch",direction:"row",justifyContent:"start",width:l,children:3===d?(0,h.jsx)(B,{auxData:e,component:t,onImageLoad:s,story:i,view:r,viewParameter:o,windowWidth:l}):(0,h.jsx)(U,{auxData:e,component:t,onImageLoad:s,story:i,view:r,viewParameter:o,width:l})})})}function X({story:e}){let t=(0,L.k6)(),{user:n,custom_properties:i,action:r}=e||{},{full_name:o,username:l,image_medium_url:s,avatar_color_index:c}=n||{},u=o||e.title?.format||"",{url:p,text:m}=r||{},{image:y}=i||{};if(!p||!m)return null;let g=(0,h.jsxs)(a.xu,{alignItems:"center",color:"transparentDarkGray",display:"flex",height:"100%",justifyContent:"center",padding:2,position:"relative",children:[l&&s&&(0,h.jsx)(a.xu,{left:!0,padding:2,position:"absolute",top:!0,children:(0,h.jsx)(R.qE,{color:c||void 0,name:l,size:"sm",src:s})}),u&&(0,h.jsx)(a.xv,{color:"inverse",weight:"bold",children:u})]});return(0,h.jsxs)(a.xu,{marginBottom:4,width:d.yF,children:[(0,h.jsx)(a.iP,{onTap:()=>t.push(p),children:(0,h.jsx)(a.zd,{height:d.yF,rounding:2,wash:!0,children:"string"==typeof y&&y?(0,h.jsx)(a.Ee,{alt:u,fit:"contain",naturalHeight:d.yF,naturalWidth:d.yF,src:y,children:g}):(0,h.jsx)(a.xu,{height:d.yF,width:d.yF,children:g})})}),(0,h.jsx)(a.xu,{marginTop:3,children:(0,h.jsx)(a.ZP,{fullWidth:!0,href:p,text:m})})]})}let q=new Set([101]),Y="UNKNOWN_CONTAINER_TYPE",J=void 0!==i?i:i=n(639546);function Q(e){var t;let{auxData:n,componentFallback:i,initialSlotIndex:d,view:c,viewParameter:u,width:p}=e,{story:m,storyKey:g,...x}=e,j=(0,r.Z)(J,g),_=j?.displayOptions?.contentDisplay?.componentType??i,w={...x,component:_},v=(0,o.Z)({clientTrackingParams:j?.trackingParams,componentType:_,contextLogData:{story_id:j?.storyId,story_type:j?.storyType,content_ids:j?.contentIds,...n},impressionType:"Story",loggingId:j?.storyId,slotIndex:d||0,viewParameter:u,viewType:c}),I=(()=>{switch(j?.containerType){case 90:case 139:return(0,h.jsx)(l.default,{...w,story:m,storyKey:j,width:p});case 88:return(0,h.jsx)(y.Z,{...w,storyKey:j});case 89:let{location:e,text:t,url:n}=j?.action||{};return(0,h.jsx)(s.Z,{location:e,text:t,url:n});case 91:return!!m&&(0,h.jsx)(P,{...w,story:m});case 101:return!!m&&(0,h.jsx)(V,{...w,story:m});case 92:return!!m&&(0,h.jsx)(X,{...w,story:m});case 131:return!!m&&(0,h.jsx)(f,{...w,story:m});default:return Y}})();return I===Y?null:(0,h.jsxs)(a.xu,{ref:v,width:(t=j?.containerType,q.has(t))?void 0:p,children:[I,(0,h.jsx)(a.xu,{})]})}},592150:function(e,t,n){n.d(t,{Z:()=>o});var i=n(883119),a=n(785893);let r={center:{outer:"center",inner:"center"},left:{outer:"start",inner:"start"},right:{outer:"end",inner:"end"}};function o({children:e,itemGap:t,containerRef:n,numRows:o=1,rowAlignment:l="center"}){let s=r[l];return(0,a.jsx)(i.xu,{ref:n,width:"100%",children:(0,a.jsx)(i.kC,{alignItems:"center",justifyContent:s.outer,children:(0,a.jsx)(i.kC,{dataTestId:"story-row-items-container",gap:{row:Math.floor(t/4),column:0},justifyContent:s.inner,wrap:o>1,children:e})})})}},65210:function(e,t,n){n.d(t,{Z:()=>a});var i=n(667294);function a({items:e,itemWidth:t,itemGap:n,numRows:a=1,actionItemType:r}){let o;let[l,s]=function(){let[e,t]=(0,i.useState)(0),n=(0,i.useRef)(null),a=(0,i.useCallback)(()=>{n.current&&t(n.current.clientWidth)},[n]);return(0,i.useEffect)(()=>(window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}),[a]),(0,i.useEffect)(a),[e,n]}(),d=Math.floor((l+n)/(t+n))*a||a,c=e.slice(0,d),u=[];switch(r){case"nextFour":d>=e.length?u=[c.pop()]:(c.pop(),u=e.slice(d-1,d+3));break;case"one":o=d>e.length?e[Math.floor(e.length/2)]:c.pop()}return{containerRef:s,itemsToRender:c,actionItem:o,nextFourItems:u}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/68223-f520d11864508b47.mjs.map