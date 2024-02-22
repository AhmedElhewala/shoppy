import{u as a}from"./useQuery-eENayJcY.js";import{b as u}from"./apiCategory-e7eLQlsh.js";import{u as c,j as s,r as i}from"./index-tiG3UDW2.js";import{O as d}from"./Spinner-DmyEU9UC.js";function E(){const{isLoading:e,data:t,error:r}=a({queryKey:["categoryList"],queryFn:u,retry:!1});return{isLoading:e,categories:t,error:r}}const f=c.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  &::-webkit-scrollbar-horizontal {
    height: 0;
  }
`;function v({children:e}){return s.jsx(d,{children:s.jsx(f,{children:e})})}function g(e,t,r){i.useEffect(()=>{const n=o=>{e.current&&!e.current.contains(o.target)&&t&&r()};return document.addEventListener("click",n,!0),()=>document.removeEventListener("click",n,!0)},[t,r,e]),i.useEffect(()=>{const n=o=>{e.current&&o.key==="Escape"&&t&&r()};return document.addEventListener("keydown",n,!0),()=>document.removeEventListener("keydown",n,!0)},[t,r,e])}export{v as M,E as a,g as u};
