"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[284],{148:(e,t,a)=>{a.d(t,{MD:()=>o,MZ:()=>i,Q9:()=>n,YF:()=>r,wQ:()=>h});const c="15e8ef5623f4bb022257f8b28e9fd365",s="https://api.themoviedb.org/3",n=async()=>{const e=await fetch("".concat(s,"/trending/movie/day?api_key=").concat(c));return await e.json()},o=async e=>{const t=await fetch("".concat(s,"/search/movie?api_key=").concat(c,"&query=").concat(e));return await t.json()},i=async e=>{const t=await fetch("".concat(s,"/movie/").concat(e,"?api_key=").concat(c));return await t.json()},r=async e=>{const t=await fetch("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(c));return await t.json()},h=async e=>{const t=await fetch("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(c));return await t.json()}},284:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var c=a(420),s=a(148);const n="Movies_movies__tPRCM",o="Movies_searchForm__S-9T7",i="Movies_resultsContainer__DwstD",r="Movies_movie__pLkFX";var h=a(744);const l=()=>{const[e,t]=(0,c.useState)(""),[a,l]=(0,c.useState)([]);return(0,h.jsxs)("div",{className:n,children:[(0,h.jsx)("h2",{children:"Search Movies"}),(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("input",{type:"text",placeholder:"Search movies...",value:e,onChange:e=>t(e.target.value)}),(0,h.jsx)("button",{onClick:async()=>{try{const t=await(0,s.MD)(e);l(t.results)}catch(t){console.error("Error searching movies:",t)}},children:"Search"})]}),(0,h.jsx)("div",{className:i,children:a.map((e=>(0,h.jsxs)("div",{className:r,children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title}),(0,h.jsx)("p",{children:e.title})]},e.id)))})]})}}}]);
//# sourceMappingURL=284.1f041100.chunk.js.map