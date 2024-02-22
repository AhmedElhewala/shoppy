import{u as r,r as n,j as o}from"./index-tiG3UDW2.js";const m=r.div`
  width: 100%;
  margin: 0 1rem;
  font-size: 1.6rem;
  overflow: hidden;
  transition: var(--main-transition);
  position: relative;
  margin: 0 auto;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: start;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  &::-webkit-scrollbar-horizontal {
    height: 0;
  }
`,d=r.div`
  display: grid;
  grid-template-columns: ${e=>e.columns};
  column-gap: 2.4rem;
  align-items: center;
  width: fit-content;
`,p=r(d)`
  padding: 8px 12px;
  font-weight: bold;
  border-bottom: 1px solid var(--color-grey-500);
`,u=r(d)`
  padding: 8px 12px;
  border-bottom: 1px solid var(--color-grey-500);

  &:not(:last-child) {
  }
`,x=r.div`
  font-size: 1.4rem;
`,h=r.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  position: relative;
  margin-top: 2rem;
`,i=n.createContext();function l({columns:e,children:t}){const s=n.useRef(),c=a=>{a.stopPropagation(),s.current.scrollLeft+=a.deltaY};return o.jsx(i.Provider,{value:{columns:e},children:o.jsx(m,{role:"table",ref:s,onWheel:c,children:t})})}function f({children:e}){const{columns:t}=n.useContext(i);return o.jsx(p,{role:"row",columns:t,as:"header",children:e})}function g({children:e}){const{columns:t}=n.useContext(i);return o.jsx(u,{role:"row",columns:t,children:e})}function w({data:e,render:t}){return e.length?o.jsx(x,{children:e.map(t)}):o.jsx(h,{children:"There is no data to show"})}l.Header=f;l.Row=g;l.Body=w;export{l as T};
