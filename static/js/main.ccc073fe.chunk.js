(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),s=n(4),c=n.n(s),o=(n(9),n(3)),a=(n(10),n(0));function d(e){var t=e.question,n=e.correct;return t?Object(a.jsx)("h1",{children:t.question}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:"There are no more questions."}),Object(a.jsx)("h2",{children:"You got ".concat(n," correct")})]})}function u(e){var t=e.currentQuestion,n=void 0===t?void 0:t,i=function(e){var t=document.getElementById(e.target.name);"hidden"===t.classList.value?t.classList="":t.classList="hidden"};return console.log(n),void 0==n?Object(a.jsx)("h3",{children:"Take the test again?"}):Object(a.jsxs)("div",{id:"hints",children:[Object(a.jsx)("button",{name:"hint",onClick:i,children:"Hint"}),Object(a.jsx)("p",{id:"hint",className:"hidden",children:n.hint}),Object(a.jsx)("button",{name:"picture",onClick:i,children:"Picture"}),Object(a.jsx)("img",{id:"picture",className:"hidden",src:n.picture}),Object(a.jsx)("button",{name:"answer",onClick:i,children:"Show Answer"}),Object(a.jsx)("p",{id:"answer",className:"hidden",children:n.answer})]})}var h=function(){var e,t=Object(i.useState)([{id:1,question:"Who is Mirabel",hint:"Different from everyone else",picture:"/images/mirabel.jpg",answer:"She has no gift, but keeps the family together",isAnswered:!1,isCorrect:!1},{id:2,question:"Who is Abuela?",hint:"She might burn you",picture:"/images/abuela.jpg",answer:"Keeper of the Magical Candle",isAnswered:!1,isCorrect:!1},{id:3,question:"Who is Dolores?",hint:"Hard to keep secrets from",picture:"/images/dolores.jpg",answer:"Super hearing",isAnswered:!1,isCorrect:!1},{id:4,question:"Who is Bruno?",hint:"We don't talk about Bruno-no-no",picture:"/images/bruno.jpg",answer:"Can see the future",isAnswered:!1,isCorrect:!1}]),n=Object(o.a)(t,2),r=n[0],s=n[1],c=Object(i.useState)(r.filter((function(e){return!1===e.isAnswered}))),h=Object(o.a)(c,2),l=h[0],j=h[1],b=Math.floor(Math.random()*l.length),g=r.length,f=r.filter((function(e){return!0===e.isAnswered})).length,O=r.filter((function(e){return!0===e.isCorrect})).length,m=l[b];l.length>0&&(e=m.id);var x=function(t){var n=r,i=r.findIndex((function(t){return t.id===e}));n[i].isAnswered=!0,n[i].isCorrect=t,s(n),j(r.filter((function(e){return!1===e.isAnswered})))};return Object(a.jsxs)("div",{id:"main",children:[Object(a.jsx)("h4",{children:"Right Wrong Tester"}),Object(a.jsxs)("h2",{children:["Subject: ","Encanto"]}),Object(a.jsxs)("p",{children:["You have answered ",f,"/",g]}),Object(a.jsx)(d,{question:m,correct:O}),Object(a.jsx)(u,{currentQuestion:m}),Object(a.jsxs)("div",{id:"correctWrong",children:[Object(a.jsx)("button",{id:"correct",onClick:function(){x(!0)},children:"\u2714"}),Object(a.jsx)("button",{id:"wrong",onClick:function(){x(!1)},children:"\u2716"})]})]})};c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.ccc073fe.chunk.js.map