(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{15:function(e,n,t){"use strict";var r=t(25),a=t(2),o=t.n(a),s=t(3),i=t(19),c=t.n(i),u=t(11),p={owner:"zhirui1994",repo:"zhirui1994.github.io",token:"MSt6aGlydWkxOTk0KzBhOGZmMjAwNWM3M2NmNmM1YzEzYWQyZmRkZjhjN2E4MDU0NzdlK3poaXJ1aTE5OTQuZ2l0aHViLmlvKzg=",client_id:"635ab95d562259d5e20a",client_secret:"e795e7e409ce731cf304facd92aecd305c774731"},l=new u.b.Entity("milestones"),d=new u.b.Entity("labels"),f=new u.b.Entity("comments"),h=new u.b.Entity("issues",{milestone:l,labels:{nodes:[d]},comments:{nodes:[f]}}),m=new u.b.Entity("repositories",{issue:h,issues:{nodes:[h]},labels:{nodes:[d]},milestones:{nodes:[l]}});function b(){var e=atob(p.token),n=new RegExp("(\\+".concat(p.owner,"\\+|\\+").concat(p.repo,"\\+)"),"g");return e.replace(n,"")}function y(){return g.apply(this,arguments)}function g(){return(g=Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.post("https://api.github.com/graphql",{query:'query { \n                repository(owner: "'.concat(p.owner,'", name: "').concat(p.repo,'") {\n                    id,\n                    labels(first: 100) {\n                        nodes {\n                            id,\n                            name,\n                            color,\n                        } \n                    },\n                    milestones(first:100) {\n                        nodes {\n                            id,\n                            number,\n                            state,\n                            title,\n                        }\n                    },\n                    issues(last:20, states:OPEN, orderBy: {direction: DESC, field: UPDATED_AT}) {\n                        pageInfo {\n                            endCursor,\n                            startCursor,\n                            hasNextPage,\n                            hasPreviousPage\n                        },\n                        totalCount,\n                        nodes {\n                            id,\n                            title,\n                            number,\n                            createdAt,\n                            milestone {\n                                id\n                            },\n                            labels(first:100) {\n                                nodes {\n                                    id,\n                                }\n                            }\n                        }\n                    }\n                }\n            }')},{headers:{Authorization:"bearer ".concat(b())}}).then(function(e){return Object(u.a)(e.data.data.repository,m)}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function w(e){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(o.a.mark(function e(n){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.post("https://api.github.com/graphql",{query:'query { \n                repository(owner: "'.concat(p.owner,'", name: "').concat(p.repo,'") {\n                    id,\n                    issue(number: ').concat(n,") {\n                        id,\n                        title,\n                        number,\n                        bodyHTML,\n                        createdAt,\n                        milestone {\n                            id,\n                            number,\n                            state,\n                            title,\n                        },\n                        labels(first:100) {\n                            nodes {\n                                id,\n                                name,\n                                color,\n                            }\n                        },\n                        comments(last: 20) {\n                            nodes {\n                                id,\n                                author {\n                                    avatarUrl,\n                                    login,\n                                    url,\n                                },\n                                bodyHTML,\n                                createdAt,\n                            }\n                        }\n                    }\n                }\n            }")},{headers:{Authorization:"bearer ".concat(b())}}).then(function(e){return Object(u.a)(e.data.data.repository,m)}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function k(){var e={scope:"public_repo, user",redirect_uri:encodeURIComponent("https://zhirui1994.github.io/#/article/1"),client_id:p.client_id},n=Object.keys(e).map(function(n){return"".concat(n,"=").concat(e[n])}).join("&");return"https://github.com/login/oauth/authorize?".concat(n)}function v(e){return j.apply(this,arguments)}function j(){return(j=Object(s.a)(o.a.mark(function e(n){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",e.abrupt("return",c.a.post("https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",{code:n,client_id:p.client_id,client_secret:p.client_secret},{headers:{Accept:"application/json"}}).then(function(e){return e&&e.data}));case 2:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function O(e){return E.apply(this,arguments)}function E(){return(E=Object(s.a)(o.a.mark(function e(n){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.post("https://api.github.com/graphql",{query:"query { \n            viewer {\n                email,\n                id,\n                login,\n                name,\n                url,\n                avatarUrl, \n            }\n        }"},{headers:{Authorization:n}}).then(function(e){return e&&e.data&&e.data.data&&e.data.data.viewer}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function q(e){return _.apply(this,arguments)}function _(){return(_=Object(s.a)(o.a.mark(function e(n){var t,r,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.id,r=n.content,a=n.token,e.abrupt("return",c.a.post("https://api.github.com/graphql",{query:'mutation {\n                addComment(input:{subjectId: "'.concat(t,'", body: "').concat(r,'"}) {\n                    commentEdge {\n                        node {\n                            id,\n                            bodyHTML,\n                            createdAt,\n                            author {\n                                avatarUrl,\n                                login,\n                                url,\n                            },\n                        }\n                    }\n                }\n            }')},{headers:{Authorization:a}}).then(function(e){var n=e&&e.data&&e.data.data&&e.data.data.addComment.commentEdge.node;if(n)return Object(u.a)(n,f)}));case 2:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function I(){return T.apply(this,arguments)}function T(){return(T=Object(s.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.post("https://api.github.com/graphql",{query:'query {\n                repository(owner: "'.concat(p.owner,'", name: "').concat(p.repo,'") {\n                    id,\n                    labels(first: 100) {\n                        nodes {\n                            id,\n                            name,\n                            color,\n                        } \n                    },\n                    milestones(first:100) {\n                        nodes {\n                            id,\n                            number,\n                            state,\n                            title,\n                        }\n                    },\n                }\n            }')},{headers:{Authorization:"bearer ".concat(b())}}).then(function(e){var n=e&&e.data&&e.data.data&&e.data.data.repository;return!!n&&Object(u.a)(n,m)}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function A(e){return z.apply(this,arguments)}function z(){return(z=Object(s.a)(o.a.mark(function e(n){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="repo:".concat(p.owner,"/").concat(p.repo," "),n&&n.milestone&&(t+="milestone:".concat(n.milestone," ")),n&&n.labels&&n.labels.length&&(t+=n.labels.map(function(e){return"label:".concat(e," ")}).join("")),n&&n.query&&(t+="".concat(n.query," ")),e.abrupt("return",c.a.post("https://api.github.com/graphql",{query:'query {\n                search(type: ISSUE, last: 20, query: "'.concat(t.trim(),'") {\n                    issueCount\n                    pageInfo {\n                        endCursor\n                        startCursor\n                        hasNextPage\n                        hasPreviousPage\n                    }\n                    nodes {\n                        ... on Issue {\n                            id,\n                            title,\n                            number,\n                            createdAt,\n                            milestone {\n                                id\n                            },\n                            labels(first:100) {\n                                nodes {\n                                    id,\n                                }\n                            }\n                        }\n                    }\n                }\n            }')},{headers:{Authorization:"bearer ".concat(b())}}).then(function(e){var n=e&&e.data&&e.data.data&&e.data.data.search;if(n){var t=Object(u.a)(n.nodes,[h]);return Object(r.a)({},n,{nodes:t.result,entities:t.entities})}return!1}));case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function C(e){return S.apply(this,arguments)}function S(){return(S=Object(s.a)(o.a.mark(function e(n){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.post("https://api.github.com/graphql",{query:'mutation {\n            createIssue(input: {\n                title: "'.concat(n.title,'",\n                body: "').concat(n.body,'",\n                labelIds: "').concat(JSON.stringify(n.labels),'",\n                milestoneId: "').concat(n.milestone,'",\n                repositoryId: "').concat(n.repository,'"\n            }) {\n                clientMutationId\n                issue {\n                    id,\n                    title,\n                    number,\n                    bodyHTML,\n                    createdAt,\n                    milestone {\n                        id,\n                        number,\n                        state,\n                        title,\n                    },\n                    labels(first:100) {\n                        nodes {\n                            id,\n                            name,\n                            color,\n                        }\n                    },\n                    comments(last: 20) {\n                        nodes {\n                            id,\n                            author {\n                                avatarUrl,\n                                login,\n                                url,\n                            },\n                            bodyHTML,\n                            createdAt,\n                        }\n                    }\n                }\n            }\n        }')},{headers:{Authorization:"bearer ".concat(b())}}).then(function(e){var n=e&&e.data&&e.data.data&&e.data.data.createIssue.issue;if(n)return Object(u.a)(n,h)}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}t.d(n,"g",function(){return y}),t.d(n,"d",function(){return w}),t.d(n,"c",function(){return k}),t.d(n,"i",function(){return v}),t.d(n,"e",function(){return O}),t.d(n,"a",function(){return q}),t.d(n,"f",function(){return I}),t.d(n,"h",function(){return A}),t.d(n,"b",function(){return C})},162:function(e,n,t){e.exports={loadingContainer:"style_loadingContainer__3Pquw"}},164:function(e,n,t){e.exports=t(361)},357:function(e,n,t){},361:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(159),s=t.n(o),i=t(160),c=t(87),u=t(25),p=t(21),l=t(2),d=t.n(l),f=t(3),h=t(15),m=t(62),b={name:"repository",state:{result:"",loading:!0,searchParams:{milestone:"*",labels:[],query:""}},reducers:{update:function(e,n){return m.merge(e,n)}},effects:function(e){return{initIndex:function(){var n=Object(f.a)(d.a.mark(function n(t,r){var a;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r.repository.loading){n.next=3;break}return n.next=3,e.repository.update({loading:!0});case 3:return n.next=5,h.g();case 5:if(!(a=n.sent)){n.next=11;break}return n.next=9,e.entities.update(a.entities);case 9:return n.next=11,e.repository.update({result:a.result,loading:!1});case 11:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}(),getSingleIssue:function(){var n=Object(f.a)(d.a.mark(function n(t,r){var a;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r.repository.loading){n.next=3;break}return n.next=3,e.repository.update({loading:!0});case 3:return n.next=5,h.d(t);case 5:if(!(a=n.sent)){n.next=11;break}return n.next=9,e.entities.update(a.entities);case 9:return n.next=11,e.repository.update({result:a.result,loading:!1});case 11:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}(),closeCurrentIssue:function(){var n=Object(f.a)(d.a.mark(function n(t,r){var a,o,s;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(a=r.repository.result,!(o=r.entities.repositories[a])){n.next=7;break}return o.issue=void 0,s={repositories:Object(p.a)({},a,o)},n.next=7,e.entities.update(s);case 7:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}(),initEditor:function(){var n=Object(f.a)(d.a.mark(function n(t,r){var a,o,s;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(a=r.repository.result,!((o=r.entities.repositories[a])&&o.labels&&o.labels.nodes.length&&o.milestones&&o.milestones.nodes.length)){n.next=4;break}return n.abrupt("return");case 4:if(r.repository.loading){n.next=7;break}return n.next=7,e.repository.update({loading:!0});case 7:return n.next=9,h.f();case 9:if(!(s=n.sent)){n.next=15;break}return n.next=13,e.entities.update(s.entities);case 13:return n.next=15,e.repository.update({result:s.result,loading:!1});case 15:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}(),searchIssues:function(){var n=Object(f.a)(d.a.mark(function n(t,r){var a,o,s,i,c,l;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.milestone,o=t.labels,s=t.query,n.next=3,e.repository.update({searchParams:{milestone:a,labels:o,query:s}});case 3:return n.next=5,h.h({milestone:a,labels:o,query:s});case 5:(i=n.sent)&&(c=r.repository.result,(l=r.entities.repositories[c])&&(l.issues={pageInfo:i.pageInfo,totalCount:i.issueCount,nodes:i.nodes},e.entities.update(Object(u.a)({repositories:Object(p.a)({},c,l)},i.entities))));case 7:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}(),createIssue:function(){var n=Object(f.a)(d.a.mark(function n(t,r){var a,o;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.b(t);case 2:if(!(a=n.sent)||!a.result){n.next=8;break}return(o=r.entities.repositories[r.repository.result]).issue=a.result,n.next=8,e.entities.update(Object(u.a)({},a.entities,{repositories:Object(p.a)({},r.repository.result,o)}));case 8:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}()}}},y=t(62),g={name:"entities",state:{repositories:{},issues:{},labels:{},milestones:{},comments:{}},reducers:{update:function(e,n){return y.merge(e,n)}}};function w(){var e=new URLSearchParams(window.location.search),n=e.get("code");if(n){e.delete("code");var t=e.toString(),r="".concat(window.location.pathname).concat(t?"?".concat(t):"").concat(window.location.hash);return window.history.pushState(null,null,r),n}return""}var x=t(62),k={user:{name:"user",state:{loading:!1,auth:!1,accessToken:"",scope:"",tokenType:"",viewer:{email:"",id:"",login:"",name:"",url:"",avatarUrl:""}},reducers:{update:function(e,n){return x.merge(e,n)}},effects:function(e){return{getAuthToken:function(){var n=Object(f.a)(d.a.mark(function n(t,r){var a,o,s,i,c,u,p,l,f;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r.user.loading){n.next=3;break}return n.next=3,e.user.update({loading:!0});case 3:if(a=w(),!(o=localStorage.getItem("GITHUB_USER_AUTH"))){n.next=15;break}return s=JSON.parse(o),i=s.access_token,c=s.token_type,u=s.scope,n.next=9,Object(h.e)("".concat(c," ").concat(i));case 9:if(!(p=n.sent)){n.next=13;break}return n.next=13,e.user.update({accessToken:i,tokenType:c,scope:u,auth:!0,loading:!1,viewer:p});case 13:n.next=27;break;case 15:if(!a){n.next=27;break}return n.next=18,Object(h.i)(a);case 18:if(!(l=n.sent)||!l.access_token){n.next=27;break}return localStorage.setItem("GITHUB_USER_AUTH",JSON.stringify(l)),n.next=23,Object(h.e)("".concat(l.token_type," ").concat(l.access_token));case 23:if(!(f=n.sent)){n.next=27;break}return n.next=27,e.user.update({accessToken:l.access_token,tokenType:l.token_type,scope:l.scope,auth:!0,loading:!1,viewer:f});case 27:return n.next=29,e.user.update({loading:!1});case 29:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}(),addComment:function(){var n=Object(f.a)(d.a.mark(function n(t,r){var a,o,s,i,c,l,f;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(a=t.id,o=t.content,s=t.callback,r.user.accessToken){n.next=3;break}return n.abrupt("return");case 3:return i="".concat(r.user.tokenType," ").concat(r.user.accessToken),n.next=6,Object(h.a)({id:a,content:o,token:i});case 6:if(!(c=n.sent)){n.next=14;break}return l=r.entities.issues,(f=l[a]).comments.nodes.push(c.result),n.next=13,e.entities.update(Object(u.a)({issues:Object(p.a)({},a,f)},c.entities));case 13:"function"===typeof s&&s();case 14:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}()}}},entities:g,repository:b};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=t(579),j=t(581),O=t(371),E=t(88),q=[{path:"/",exact:!0,component:Object(r.lazy)(function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,577))})},{path:"/editor",exact:!0,component:Object(r.lazy)(function(){return Promise.all([t.e(6),t.e(3)]).then(t.bind(null,580))})},{path:"/article/:number",exact:!0,component:Object(r.lazy)(function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,578))})}],_=function(){return a.a.createElement(v.a,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(E.a,{loading:!0})},a.a.createElement(j.a,null,q.map(function(e){return a.a.createElement(O.a,{key:e.path,path:e.path,exact:e.exact,component:function(){return a.a.createElement(e.component,null)}})}))))};t(357);t.d(n,"store",function(){return I});var I=Object(i.init)({models:k});s.a.render(a.a.createElement(c.a,{store:I},a.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},88:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(162),s=t.n(o);n.a=function(e){var n=e.children,t=e.loading;return void 0===t||t?a.a.createElement("div",{className:s.a.loadingContainer},a.a.createElement("i",{className:"fa fa-spinner fa-pulse"})):a.a.createElement(r.Fragment,null,n)}}},[[164,7,5]]]);
//# sourceMappingURL=main.e645517d.chunk.js.map