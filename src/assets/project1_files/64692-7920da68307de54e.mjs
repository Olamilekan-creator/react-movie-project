(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["64692"],{611649:function(e,t,a){a.d(t,{Z:()=>g});var r=a(613567),d=a(739405),n=a(462867),o=a(200619),_=a(601871);function g(e){let t=(0,d.HG)(),{checkExperiment:a}=(0,r.F)(),g=(0,o.Z)(),i=(0,n.Z)(),l=(0,_.lJ)(i,g),E=!t||a("web_sce_organic_pinbuilder_dep").anyEnabled,s=a("uid_sce_lightswitch_advertisers").anyEnabled;return!l&&(e&&a("sce_lightswitch_organic"),!t||!!(E||s))}},17658:function(e,t,a){a.d(t,{Z:()=>d});var r=a(667294);function d(e,t){let a=(0,r.useRef)([]),[d,n]=(0,r.useState)(),[o,_]=(0,r.useReducer)(d??(()=>t),t),g=(0,r.useCallback)(t=>{d?_(t):(a.current.length||e().then(e=>{n(()=>e.default)}),a.current=[...a.current,t])},[e,d]);return(0,r.useEffect)(()=>{d&&(a.current.forEach(_),a.current=[])},[d]),[o,g]}},264267:function(e,t,a){a.d(t,{pb:()=>C,lV:()=>A,nf:()=>G});var r=a(667294),d=a(581722),n=a(441143),o=a.n(n),_=a(27399),g=a(213491),i=a(681698),l=a(57887),E=a(360033),s=a(730056);let u={feature_map:Object.freeze({})},m=(e,t)=>{let a={...(0,s.Z)(e,t),...t.reaction_counts?{reaction_counts:t.reaction_counts}:Object.freeze({}),...t.tags?{tags:t.tags}:Object.freeze({}),...t.tagged_users?{tagged_users:t.tagged_users}:Object.freeze({})};return(0,E.ZP)(e,a)?e:a},c=(e=u,t)=>{if("FETCH_COMPLETE"===t.type){let{payload:{resource:a}}=t,{data:r}=t.payload.response.resource_response;if("AggregatedCommentFeedResource"===a||"AggregatedCommentReplyFeedResource"===a||"DidItCommentsResource"===a){let t=(r||[]).reduce((t,a)=>(t[a.id]=m(e[a.id],a),t),{});return{...e,...t}}if("UnifiedCommentsResource"===a&&r&&r.length>0){let t=r.filter(e=>"aggregatedcomment"===e.type).reduce((t,a)=>(t[a.id]=m(e[a.id],a),t),{});return{...e,...t}}if("UnifiedCommentsPreviewResource"===a&&r&&r.length>0){let t=r.map(e=>e.aggregated_comment).reduce((t,a)=>(a&&(t[a.id]=m(e[a.id],a)),t),{}),a=r.map(e=>e.creator_reply).reduce((t,a)=>(a&&a.id&&(t[a.id]=m(e[a.id],a)),t),{});return{...e,...t,...a}}if("AggregatedCommentFeaturesResource"===a&&r&&Object.keys(r).length>0)return{...e,feature_map:r}}else if("AGGREGATED_COMMENT_CREATED"===t.type){let{payload:{aggregatedComment:a}}=t;return a.id?{...e,[a.id]:a}:e}else if("AGGREGATED_COMMENT_DELETED"===t.type||"AGGREGATED_COMMENT_HIDDEN"===t.type){let{payload:{aggregatedCommentId:a}}=t,r={...e};return delete r[a],r}else if("AGGREGATED_COMMENT_HIDDEN_FOR_USER"===t.type){let{payload:{userId:a}}=t;return Object.fromEntries(Object.entries(e).filter(e=>e[1].user?.id!==a))}else if("AGGREGATED_COMMENT_UPDATED"===t.type){let{payload:{data:a}}=t;return{...e,[a.id]:m(e[a.id],a)}}else if("AGGREGATED_COMMENT_LIKE_TOGGLED"===t.type){let{payload:{data:a}}=t,r=e[a.id],d=r.reaction_counts[1]||0,n={1:a.reaction_by_me?d+1:d-1},o={...r,reaction_by_me:a.reaction_by_me,reaction_counts:n};return{...e,[a.id]:o}}else if("AGGREGATED_COMMENT_HELPFUL_TOGGLED"===t.type){let{payload:{data:a}}=t,r=e[a.id],d=r.helpful_count||0,n=a.marked_helpful_by_me?d+1:d-1,o={...r,marked_helpful_by_me:a.marked_helpful_by_me,helpful_count:n};return{...e,[a.id]:o}}else if("AGGREGATED_COMMENT_HIGHLIGHT_TOGGLED"===t.type){let{payload:{data:a}}=t,r={...e[a.aggregated_comment_id],highlighted_by_pin_owner:a.is_highlighted};return{...e,[a.aggregated_comment_id]:r}}else if("AGGREGATED_COMMENT_FEATURES_UPDATED"===t.type){let{payload:{data:{featureMap:a}}}=t;return{...e,feature_map:{...e.feature_map,...a}}}else if("UPDATE_AGGREGATED_COMMENT_COMMENT_COUNT"===t.type){let{payload:{increment:a,id:r}}=t,d=e[r];if(!d)return e;let n={...d,comment_count:d.comment_count+a};return{...e,[r]:n}}else if("DELETE_COMMENT_MENTION"===t.type){let{payload:{aggregatedCommentId:a,tagged_users:r}}=t,d={...e[a],tagged_users:r};return{...e,[a]:d}}else if("GET_COMMENT_TRANSLATION"===t.type){let{payload:{aggregatedCommentId:a,translatedText:r}}=t,d={...e[a],translatedText:r};return{...e,[a]:d}}return e};var p=a(785893);let{Provider:T,useHook:y}=(0,g.Z)("AggregatedComments");function C({children:e}){let t=(0,d.v9)(({resources:e})=>e?.UnifiedCommentsResource),a=u;t&&Object.values(t).forEach(e=>{let t=e.data?.filter(e=>"aggregatedcomment"===e.type),r=t?.reduce((e,t)=>(e[t.id]=m(a[t.id],t),e),{});a={...a,...r}});let[n,o]=(0,r.useReducer)(c,a),_=e=>{o({type:"FETCH_COMPLETE",payload:e})};(0,l.Z8)("AggregatedCommentFeaturesResource",_),(0,l.my)("AggregatedCommentFeaturesResource",_),(0,l.Z8)("AggregatedCommentFeedResource",_),(0,l.my)("AggregatedCommentFeedResource",_),(0,l.Z8)("AggregatedCommentReplyFeedResource",_),(0,l.my)("AggregatedCommentReplyFeedResource",_),(0,l.Z8)("DidItCommentsResource",_),(0,l.my)("DidItCommentsResource",_),(0,l.Z8)("UnifiedCommentsPreviewResource",_),(0,l.my)("UnifiedCommentsPreviewResource",_),(0,l.Z8)("UnifiedCommentsResource",_),(0,l.my)("UnifiedCommentsResource",_);let g=(0,r.useMemo)(()=>({aggregatedComments:n,dispatch:o}),[n,o]);return(0,p.jsx)(T,{value:g,children:e})}function G(){let{dispatch:e}=y();return(0,r.useMemo)(()=>({aggregatedCommentCreated(t,a){e({type:"AGGREGATED_COMMENT_CREATED",payload:{parentId:t,aggregatedComment:a}})},aggregatedCommentDeleted:(t,a)=>{e({type:"AGGREGATED_COMMENT_DELETED",payload:{parentId:t,aggregatedCommentId:a}})},aggregatedCommentHidden:t=>{e({type:"AGGREGATED_COMMENT_HIDDEN",payload:{aggregatedCommentId:t}})},aggregatedCommentsHiddenForUser:t=>{e({type:"AGGREGATED_COMMENT_HIDDEN_FOR_USER",payload:{userId:t}})},flagAggregatedComment:async({isAggregatedComment:e=!0,commentId:t,reason:a,detailedReasons:r})=>{let d=e?`/v3/aggregated_comments/${t}/flag/`:`/v3/did_it/${t}/flag/`;return(0,i.Z)({url:d,method:"PUT",data:{commentId:t,reason:a,detailedReasons:r}})},deleteCommentMention:async t=>{let{resource_response:a}=await (0,i.Z)({url:`/v3/aggregated_comments/${t}/mentions/`,method:"DELETE",data:{fields:["aggregatedcomment.id","aggregatedcomment.tagged_users"]}}),r=a.data??{};e({type:"DELETE_COMMENT_MENTION",payload:{aggregatedCommentId:r.id,tagged_users:r.tagged_users}})},translateAggregatedComment:async t=>{try{let{resource_response:a}=await (0,i.Z)({url:`/v3/aggregated_comments/${t}/translate/`,method:"GET"}),r=a.data??"";e({type:"GET_COMMENT_TRANSLATION",payload:{aggregatedCommentId:t,translatedText:r}})}catch(a){e({type:"GET_COMMENT_TRANSLATION",payload:{aggregatedCommentId:t,translatedText:""}})}},toggleAggregatedCommentHelpful:({aggregatedCommentId:t,isMarkedHelpfulByMe:a,orbacSubjectId:r})=>{(0,i.Z)({url:`/v3/helpful/1/${t}/`,method:a?"DELETE":"POST",data:r?{orbac_subject_id:r}:{}}),e({type:"AGGREGATED_COMMENT_HELPFUL_TOGGLED",payload:{data:{id:t,marked_helpful_by_me:!a}}})},toggleAggregatedCommentHighlight:async({aggregatedCommentId:t,pinId:a,isHighlighted:r})=>{o()(t,"Could not find comment"),o()(a,"Could not find Pin"),await (0,i.Z)({url:"/v3/aggregated_comments/pin/highlight/",method:"PUT",data:{aggregated_comment:t,pin:a,highlight:!r}}),e({type:"AGGREGATED_COMMENT_HIGHLIGHT_TOGGLED",payload:{data:{aggregated_comment_id:t,pin_id:a,is_highlighted:!r}}})},toggleAggregatedCommentLike:({aggregatedCommentId:t,isLikedByMe:a,orbacSubjectId:r})=>{(0,i.Z)({url:`/v3/aggregated_comments/${t}/react/`,method:a?"DELETE":"POST",data:{reaction_type:1,...r?{orbac_subject_id:r}:{}}}),e({type:"AGGREGATED_COMMENT_LIKE_TOGGLED",payload:{data:{id:t,reaction_by_me:a?0:1}}})},updateAggregatedComment:async({commentId:t,force:a,orbacSubjectId:r,tags:d,text:n})=>{let{resource_response:o}=await _.Z.create("AggregatedCommentResource",{commentId:t,force:a,tags:d,text:n,...r?{orbacSubjectId:r}:{}}).callUpdate({showError:!1}),{tagged_users:g}=o.data??{};e({type:"AGGREGATED_COMMENT_UPDATED",payload:{data:{id:t,tagged_users:g.map(e=>({...e})),tags:JSON.parse(d),text:n}}})},updateAggregatedCommentFeatures:async({userId:t,featureMap:a,passcode:r,userConfirmPasscode:d})=>{let n={userId:t,featureMap:a,passcode:r,user_confirm_skip_passcode:d};void 0===d&&(n.user_confirm_skip_passcode=!1);let{resource_response:o}=await _.Z.create("AggregatedCommentFeaturesResource",n).callUpdate({showError:!1});e({type:"AGGREGATED_COMMENT_FEATURES_UPDATED",payload:{data:{featureMap:o.data??Object.freeze({})}}})},updateCommentCount:(t,a)=>{e({type:"UPDATE_AGGREGATED_COMMENT_COMMENT_COUNT",payload:{increment:a,id:t}})}}),[e])}function A(){let{aggregatedComments:e}=y();return e}},872003:function(e,t,a){a.d(t,{G:()=>s,Kl:()=>u,vo:()=>E});var r=a(667294),d=a(213491),n=a(57887),o=a(17658),_=a(785893);let g=()=>a.e("65333").then(a.bind(a,557189)),{Provider:i,useHook:l}=(0,d.Z)("NativeEngagements");function E({children:e}){let[t,a]=(0,o.Z)(g,[]);(0,n.Z8)("NativeInteractionsResource",e=>{a({type:"FETCH_COMPLETE",payload:e})}),(0,n.my)("NativeInteractionsResource",e=>{a({type:"FETCH_MORE_COMPLETE",payload:e})});let d=(0,r.useMemo)(()=>({dispatch:a,nativeEngagements:t}),[a,t]);return(0,_.jsx)(i,{value:d,children:e})}function s(){let{dispatch:e}=l();return(0,r.useMemo)(()=>({nativeEngagementsHiddenForUser:t=>{e({type:"NATIVE_ENGAGEMENT_HIDDEN_FOR_USER",payload:{userId:t}})}}),[e])}function u(){let{nativeEngagements:e}=l();return e}},301527:function(e,t,a){a.d(t,{C:()=>_,p:()=>g});var r=a(667294),d=a(213491),n=a(785893);let{Provider:o,useHook:_}=(0,d.Z)("Session");function g({children:e}){let[t,a]=(0,r.useState)(void 0),d=(0,r.useCallback)(()=>a(void 0),[]),_=(0,r.useMemo)(()=>({unauthCommentPinId:t,setUnauthCommentPinId:a,removeUnauthCommentPinId:d}),[t,d]);return(0,n.jsx)(o,{value:_,children:e})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/64692-7920da68307de54e.mjs.map