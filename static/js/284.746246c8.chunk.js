"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[284],{148:(e,t,a)=>{a.d(t,{MD:()=>o,MZ:()=>i,Q9:()=>n,YF:()=>r,wQ:()=>h});const c="15e8ef5623f4bb022257f8b28e9fd365",s="https://api.themoviedb.org/3",n=async()=>{const e=await fetch("".concat(s,"/trending/movie/day?api_key=").concat(c));return await e.json()},o=async e=>{const t=await fetch("".concat(s,"/search/movie?api_key=").concat(c,"&query=").concat(e));return await t.json()},i=async e=>{const t=await fetch("".concat(s,"/movie/").concat(e,"?api_key=").concat(c));return await t.json()},r=async e=>{const t=await fetch("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(c));return await t.json()},h=async e=>{const t=await fetch("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(c));return await t.json()}},284:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var c=a(420),s=a(148),n=a(8);const o="Movies_movies__tPRCM",i="Movies_searchForm__S-9T7",r="Movies_resultsContainer__DwstD",h="Movies_movie__pLkFX";var l=a(744);const v=()=>{const[e,t]=(0,c.useState)(""),[a,v]=(0,c.useState)([]),d=async()=>{try{const t=await(0,s.MD)(e);v(t.results)}catch(t){console.error("Error searching movies:",t)}};return(0,l.jsxs)("div",{className:o,children:[(0,l.jsx)("h2",{children:"Search Movies"}),(0,l.jsxs)("div",{className:i,children:[(0,l.jsx)("input",{type:"text",placeholder:"Search movies...",value:e,onChange:e=>t(e.target.value),onKeyPress:e=>{"Enter"===e.key&&d()}}),(0,l.jsx)("button",{onClick:d,children:"Search"})]}),(0,l.jsx)("div",{className:r,children:a.map((e=>(0,l.jsx)("div",{className:h,children:(0,l.jsxs)(n.cH,{to:"/movies/".concat(e.id),children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title}),(0,l.jsx)("p",{children:e.title})]})},e.id)))})]})}}}]);
//# sourceMappingURL=284.746246c8.chunk.js.map